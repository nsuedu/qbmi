/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import { isFunction, isEqual } from 'lodash';

import './index.less';

class StandardTable extends PureComponent {
  // 设置全局默认属性
  static defaultProps = {
    // 表单默认没有选择框
    hasRowSelection: false,
  };

  // 构造器
  constructor(props) {
    super(props);
    // 将组件注入的数据放在column中
    // const { columns } = props;

    // state
    this.state = {
      // 用来存储表格选择的行key数组
      selectedRowKeys: [],
    };
  }

  // 初次渲染组件时不会执行componentWillReceiveProps
  // 当Props发生改变时执行componentWillReceiveProps
  // 在这个方法体中，旧的属性仍然可以使用this,props来获取
  // 这个函数是react传入props后，render()渲染之前更新state的机会
  // 也可以在本函数体内调用自己的自定义函数，对props做一些响应
  // 本方法有两个参数，一个是nextProps，一个是nextContext
  componentWillReceiveProps(nextProps) {
    // clean state
    if (
      (nextProps.selectedRows && nextProps.selectedRows.length === 0) ||
      !isEqual(nextProps.data.list, this.props.data.list)
    ) {
      this.setState({
        selectedRowKeys: [],
      });
    }
  }

  // 当选中项发生改变时触发
  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    // selectedRowKeys选择行的key 数组
    // selectedRows选择行的数据 数组
    // 如果有传来专用来处理的选项改变触发的方法，则使用组件传来的方法
    const { onSelectRow } = this.props;
    if (isFunction(onSelectRow)) {
      onSelectRow(selectedRowKeys, selectedRows);
    }

    this.setState({ selectedRowKeys });
  };

  // 在分页、筛选、排序时触发本方法，本方法有四个参数pagination, filters, sorter, extra
  handleTableChange = (pagination, filters, sorter) => {
    // 从组件中获取到onChange方法
    const { onChange } = this.props;
    onChange(pagination, filters, sorter);
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  render() {
    const { selectedRowKeys } = this.state;
    const {
      // pagination是分页配置 list用来配置表格的数据源
      data: { list, pagination },
      // 表格是否加载中
      loading,
      // 列名
      columns,
      // 表格行的key生成工具
      rowKey,
      // 是否拥有RowSelection,用来判断是否拥有rowSelection
      hasRowSelection,
      // 表格是否允许滚动
      scroll,
      // 表格标题
      title,
      // rowSelection checkbox配置
      rowSelection: propsrowSelection,
      // Alert新增的字段
      alertProps = {},
      size,
      locale,
      rowClassName,
      className,
      tableLayout,
      footer,
      bordered,
      ...rest
    } = this.props;

    // 分页设置,设为false则取消分页选项
    const paginationProps =
      // 如果组件传入pagination
      (pagination && {
        // 是否可以改变pageSize
        showSizeChanger: true,
        // 是否可以快速跳转到某页
        showQuickJumper: true,
        // 组件分页配置
        ...pagination,
        // 用来显示数据总量和当前数据顺序,有total和range两个参数
        showTotal: () =>
          `总共${pagination && pagination.totalRecords ? pagination.totalRecords : 0}条`,
      }) ||
      false;

    // checkbox功能配置
    const rowSelection = {
      // 选中项的key数组,key的值与rowkey的生成方式相关
      selectedRowKeys,
      // 选中项发生变化时回调
      onChange: this.handleRowSelectChange,
      // 选择框默认属性配置
      getCheckboxProps: record => ({
        // 失效状态false为可以选择，true为禁用选择
        disabled: record.disabled,
      }),
      // 以上为默认配置，当传入的propsrowSelection中有相同属性时将会覆盖默认属性
      // 组件传入的rowSelection功能配置
      ...propsrowSelection,
    };
    return (
      <div className="qbmi-table">
        {/* 判断是否使用选项以及选项是单选还是多选 */}
        {hasRowSelection && !rowSelection.type ? ( // !rowSelection.type 列表radio
          <div className="m-b">
            <Alert
              message={
                // 允许你将子列表分组，而无需向 DOM 添加额外节点
                <Fragment>
                  已选择{' '}
                  <a
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {selectedRowKeys.length}
                  </a>{' '}
                  项&nbsp;&nbsp;
                  <span>
                    {// 判断是否使用Alert，如果使用将显示的组件也一同传来
                    alertProps.hasAlert ? alertProps.alertLayout : ''}
                  </span>
                </Fragment>
              }
              type="info"
              showIcon
            />
          </div>
        ) : null}

        <Table
          bordered={bordered}
          size={size}
          // 表格是否加载中
          tableLayout={tableLayout || ''}
          loading={loading}
          // 表示是否可以滚动
          scroll={scroll}
          // 表格行key取值
          rowKey={rowKey || 'id'}
          // 表格行checkbox配置
          rowSelection={hasRowSelection ? rowSelection : null}
          // 数据源
          dataSource={list.map(item => {
            item.pagination = paginationProps;
            return item;
          })}
          // 表格列配置
          columns={columns.map(item => {
            item.ellipsis = true;
            return item;
          })}
          // 是否展示外边框和列边框
          // bordered={this.props.bordered || true}
          // 分页器
          pagination={paginationProps}
          // 分页、筛选、排序时触发
          onChange={this.handleTableChange}
          // 表格标题
          title={title}
          rowClassName={rowClassName}
          locale={locale}
          className={bordered ? undefined : `table-striped${className ? ` ${className}` : ''}`}
          footer={footer}
          {...rest}
        />
      </div>
    );
  }
}

export default StandardTable;
