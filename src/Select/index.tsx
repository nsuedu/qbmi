import React from 'react';
import { Select as SelectAntd, Spin, Empty } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce, isFunction, isEqual, uniqBy, cloneDeep } from 'lodash';

import { IProps, IState, IfetchData } from './interface.d';

const { Option } = SelectAntd;

export default class Select extends React.Component<IProps, IState> {
  static defaultProps = {
    isLoading: false, // 提供默认初始化时，就加载下拉数据
  };

  static getDerivedStateFromProps(nextProps: IProps, currState: IState) {
    const { value: newValue, options: originOptions } = nextProps;
    const { value, options } = currState;
    const state = {};

    if (newValue && !isEqual(newValue, value)) {
      Object.assign(state, { value: newValue });
    }
    // 外部通过异步请求获得下拉框数据，因此要在这里每次都接收一下
    if (Array.isArray(originOptions) && !isEqual(originOptions, options)) {
      Object.assign(state, { options: originOptions });
    }
    return state;
  }

  constructor(props) {
    super(props);

    this.handleSearch = debounce(this.handleSearch, 400);
    this.state = {
      options: props.options || [],
      value: props.defaultValue || [],
      // 默认的"关键字"搜索条件
      query: props.defaultQuery || null,
      fetching: false,
      cancelDisable: props.cancelDisable || false,
    };
  }

  componentDidMount() {
    const { isLoading, options: optionsProps } = this.props;
    const { value } = this.state;
    /*
    如果在一个列表(table)中，每一行都存在此下拉框组件，为了避免重复请求
    列表中的下拉框存在value时才请求，下拉框的数据
    */
    if (isLoading || (value && !(Array.isArray(optionsProps) && optionsProps.length))) {
      this.fetchData({});
    }
  }

  fetchData = async (obj: IfetchData) => {
    const { input = this.state.query, page = this.state.currentPage } = obj;
    const { dataServer, dataHandler } = this.props;

    if (!isFunction(dataServer)) {
      return;
    }

    const newQuery = [null, undefined, '', ' '].includes(input) ? '' : input;
    this.setState({ fetching: true });

    const res = await dataServer({ input: newQuery, limit: 50, page });

    if (Array.isArray(res)) {
      const newDatas = isFunction(dataHandler) ? dataHandler(res) : res;
      this.setState({ options: newDatas, fetching: false });
    } else if (Array.isArray(res.dataSource)) {
      const newDatas = isFunction(dataHandler) ? dataHandler(res.dataSource) : res.dataSource;

      this.setState((prev: IState) => {
        let newdata = newDatas;
        if (page > 1) {
          // @change by smallBear 当输入过滤字符，pageIndex 重置为1 返回新结果，当结果为空（渲染列表应该为空）， 为了区分分页返回结果需要追加到渲染列表 ，用pageIndex来做判断
          const newOptions = [...prev.options];
          newOptions.push(...newDatas);
          newdata = uniqBy(newOptions, 'value');
        }

        return {
          options: newdata,
          fetching: false,
          currentPage: res.currentPage,
          totalPage: res.totalPage,
        };
      });
    }
  };

  // 搜索时防抖
  handleSearch = (str: string) => {
    this.fetchData({ input: str, page: 1 });
  };

  // 聚焦到下拉框时不防抖， 直接重新获取最新数据
  handleFocus = () => {
    this.fetchData({ input: '', page: 1 });
  };

  handleChange = val => {
    const { value: valueProps, onChange: onChangeProps, selectProps = {} } = this.props;

    const { options } = this.state;

    const origin =
      selectProps.labelInValue && val
        ? options.find(items => items.value === val.value)
        : options.find(items => items.value === val);

    if (isFunction(onChangeProps)) {
      // onChange时抛出 (当前选中的value,所有下拉框数据，当前选中的一行原始数据)
      onChangeProps(val, options, origin);
    }
    if (!valueProps) {
      this.setState({
        value: val,
      });
    }
  };

  companyScroll = e => {
    const { clientHeight, scrollHeight, scrollTop } = e.target;
    const { currentPage, totalPage, fetching } = this.state;

    if (
      clientHeight + scrollTop === scrollHeight &&
      !fetching &&
      totalPage !== undefined &&
      currentPage !== undefined &&
      totalPage > currentPage
    ) {
      const newpage = currentPage + 1;

      this.setState(
        {
          currentPage: newpage,
        },
        () => {
          // 获取数据的接口
          this.fetchData({ page: newpage });
        },
      );
    }
  };

  render() {
    const { notFoundTips, selectProps } = this.props;
    const { fetching, options, value, cancelDisable } = this.state;
    return (
      <SelectAntd
        // labelInValue
        allowClear
        value={value}
        notFoundContent={fetching ? <Spin size="small" /> : <Empty tips={notFoundTips} />}
        filterOption={false}
        showSearch
        onSearch={val => {
          const str = val.replace(/\s+/g, '');
          // if (str) {
          this.handleSearch(str);
          // }
        }}
        onFocus={() => {
          this.handleFocus();
        }}
        // onBlur={() => {
        //   this.setState({ query: null, currentPage: 1, options: [] });
        // }}
        onChange={this.handleChange}
        placeholder="请选择"
        style={{ width: '100%' }}
        {...selectProps}
        onPopupScroll={this.companyScroll}
      >
        {options.map(({ value: val, label, ...rest }) => {
          const newRest = { ...rest };
          if (cancelDisable) {
            newRest.disabled = false;
          }
          return (
            <Option key={val} value={val} {...newRest}>
              {label}
            </Option>
          );
        })}
      </SelectAntd>
    );
  }
}
