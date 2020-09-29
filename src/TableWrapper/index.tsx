import React, { Component } from 'react';
import { isEqual, isFunction } from 'lodash';
import PropTypes from 'prop-types';

import StandardForm from './StandardForm';
import StandardTable from './StandardTable';

class TableList extends Component {
  static propTypes = {
    // 表格props
    tableProps: PropTypes.shape({
      columns: PropTypes.array.isRequired,
    }).isRequired,
    // 默认查询条件
    searchParams: PropTypes.object,
    // 表格改变事件
    handleTableChange: PropTypes.func,
    handleMenuClick: PropTypes.func,
    sortOrder: PropTypes.string,
    handleSelectRows: PropTypes.func,
    // 在Alert中是否显示总计
    alertProps: PropTypes.object,
    // scroll: PropTypes.object,
    listService: PropTypes.func.isRequired,
    formValuesChange: PropTypes.func,
    // eslint-disable-next-line react/require-default-props
    onFormReset: PropTypes.func,
  };

  static defaultProps = {
    handleTableChange: undefined,
    handleMenuClick: undefined,
    formValuesChange: undefined,
    sortOrder: 'descend',
    handleSelectRows: undefined,
    alertProps: {
      hasAlert: false,
    },
    // scroll: { x: false },
    searchParams: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      currentPage: 1,
      tableData: [],
      total: 0,
      searchValues: {},
      selectedRows: [],
      searchParams: props.searchParams,
    };
    // this.tableWrapperRef = React.createRef();
  }

  componentDidMount() {
    const { tableWrapperRef } = this.props;
    // if (isFunction(tableWrapperRef) && this.tableWrapperRef && this.tableWrapperRef.current) {
    if (isFunction(tableWrapperRef)) {
      tableWrapperRef(this);
    }
    this.getTableData();
  }
  // 即将废除
  // componentWillReceiveProps(nextProps) {
  //   const { searchParams } = this.props;
  //   if (
  //     nextProps.searchParams &&
  //     !isEqual(nextProps.searchParams, searchParams)
  //   ) {
  //     this.getTableData(nextProps.searchParams);
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { searchParams } = nextProps;
    // 当传入的type发生变化的时候，更新state
    if (nextProps.searchParams && !isEqual(searchParams, prevState.searchParams)) {
      return {
        ...prevState,
        searchParams: nextProps.searchParams,
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  // React声明周期方法，在组件更新结束之后执行，在初始化render时不执行
  componentDidUpdate(prevState) {
    const { searchParams: preSearchParams } = prevState;
    const { searchParams: thisSearchParams } = this.state;
    // 当传入的type发生变化的时候，更新state
    if (thisSearchParams && !isEqual(thisSearchParams, preSearchParams)) {
      this.resetPageAndGetData();
    }
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { handleTableChange, sortOrder } = this.props;

    if (handleTableChange) {
      handleTableChange(pagination, filtersArg, sorter);
    }

    // @change by smallBear 只能通过外面传参，更新参数获取新的返回值，取消这儿的 请求
    // if (sorter.order && sortOrder && sorter.order !== sortOrder) {
    //   return;
    // }
    // this.setState(
    //   {
    //     currentPage: pagination.current,
    //     pageSize: pagination.pageSize,
    //   },
    //   () => {
    //     this.getTableData();
    //   },
    // );
  };

  handleMenuClick = e => {
    const { handleMenuClick } = this.props;
    const { selectedRows } = this.state;
    if (!selectedRows) return;

    if (handleMenuClick) {
      handleMenuClick(e.key, selectedRows);
    }
    this.setState({
      selectedRows: [],
    });
  };

  handleSelectRows = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectedRows,
    });
    const { handleSelectRows } = this.props;
    if (handleSelectRows) {
      handleSelectRows(selectedRowKeys, selectedRows);
    }
  };

  resetPageAndGetData = () => {
    this.setState(
      {
        pageSize: 10,
        currentPage: 1,
      },
      () => {
        this.getTableData();
      },
    );
  };

  getTableData = async () => {
    const { pageSize, currentPage, searchValues, searchParams } = this.state;
    const {
      listService,
      dataHandler,
      paramsHandler,
      initialValues,
      tableProps: { mergeRowPage, mergePageSize },
    } = this.props;
    const postData = {
      ...initialValues,
      ...searchParams,
      ...searchValues,
      limit: mergeRowPage ? mergePageSize : pageSize,
      page: currentPage,
    };

    const lataestParams = isFunction(paramsHandler) ? paramsHandler(postData) : postData;
    const res = await listService(lataestParams);
    if (res && res.success) {
      let { data } = res;
      if (dataHandler) {
        data = dataHandler(data);
      }
      this.setState({
        page: data.page,
        total: data.total,
        tableData: data.items,
      });
    }
  };

  onSearch = val => {
    this.setState(
      {
        searchValues: val,
        currentPage: 1,
      },
      () => {
        this.getTableData();
      },
    );
  };

  handleFormReset = () => {
    const { onFormReset } = this.props;
    this.setState(
      {
        pageSize: 10,
        currentPage: 1,
      },
      () => {
        if (onFormReset) {
          onFormReset();
        }
      },
    );
  };

  renderTable = () => {
    const {
      tableProps,
      // scroll,
      alertProps,
      formOptions,
      children,
      initialValues,
      formValuesChange,
      format,
      formLayout,
      formItemLayout,
    } = this.props;
    const { mergeRowPage, mergePageSize, loading, scroll = { x: false } } = tableProps;
    const { tableData, total, page, pageSize } = this.state;
    let data = {};
    if (mergeRowPage) {
      // 如果mergeRowPage为true，则表明是合并行的table，
      // 设置mergeRowPage的同时，必须设置mergePageSize（每页请求数据条数，通常为10，20，30）

      // 每页实际展示数据行数
      const currentPageSize = tableData.length > mergePageSize ? tableData.length : mergePageSize;

      data = {
        list: tableData,
        pagination: {
          current: page,
          total: page * (currentPageSize - mergePageSize) + total,
          totalRecords: total,
          pageSize: currentPageSize,
          showSizeChanger: false,
        },
      };
    } else {
      data = {
        list: tableData,
        pagination: { current: page, pageSize, total, totalRecords: total },
      };
    }
    const newTableProps = {
      scroll,
      ...tableProps,
      data,
      loading: Boolean(loading),
      alertProps,
    };
    return (
      <div>
        {formOptions && (
          <StandardForm
            onFinish={this.onSearch}
            initialValues={initialValues}
            options={formOptions}
            onValuesChange={formValuesChange}
            format={format}
            formLayout={formLayout}
            formItemLayout={formItemLayout}
            onFormReset={this.handleFormReset}
          />
        )}
        {children}
        <StandardTable
          rowKey="id"
          {...newTableProps}
          onSelectRow={this.handleSelectRows}
          onChange={this.handleStandardTableChange}
        />
      </div>
    );
  };

  render() {
    return this.renderTable();
  }
}

export default TableList;
