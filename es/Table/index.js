import "antd/es/table/style";
import _Table from "antd/es/table";
import "antd/es/alert/style";
import _Alert from "antd/es/alert";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent, Fragment } from 'react';
import { isFunction, isEqual } from 'lodash';
import './index.less';

var StandardTable = /*#__PURE__*/function (_PureComponent) {
  _inherits(StandardTable, _PureComponent);

  var _super = _createSuper(StandardTable);

  // 设置全局默认属性
  // 构造器
  function StandardTable(props) {
    var _this;

    _classCallCheck(this, StandardTable);

    _this = _super.call(this, props); // 将组件注入的数据放在column中
    // const { columns } = props;
    // state

    _this.handleRowSelectChange = function (selectedRowKeys, selectedRows) {
      // selectedRowKeys选择行的key 数组
      // selectedRows选择行的数据 数组
      // 如果有传来专用来处理的选项改变触发的方法，则使用组件传来的方法
      var onSelectRow = _this.props.onSelectRow;

      if (isFunction(onSelectRow)) {
        onSelectRow(selectedRowKeys, selectedRows);
      }

      _this.setState({
        selectedRowKeys: selectedRowKeys
      });
    };

    _this.handleTableChange = function (pagination, filters, sorter) {
      // 从组件中获取到onChange方法
      var onChange = _this.props.onChange;
      onChange(pagination, filters, sorter);
    };

    _this.cleanSelectedKeys = function () {
      _this.handleRowSelectChange([], []);
    };

    _this.state = {
      // 用来存储表格选择的行key数组
      selectedRowKeys: []
    };
    return _this;
  } // 初次渲染组件时不会执行componentWillReceiveProps
  // 当Props发生改变时执行componentWillReceiveProps
  // 在这个方法体中，旧的属性仍然可以使用this,props来获取
  // 这个函数是react传入props后，render()渲染之前更新state的机会
  // 也可以在本函数体内调用自己的自定义函数，对props做一些响应
  // 本方法有两个参数，一个是nextProps，一个是nextContext


  _createClass(StandardTable, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // clean state
      if (nextProps.selectedRows && nextProps.selectedRows.length === 0 || !isEqual(nextProps.data.list, this.props.data.list)) {
        this.setState({
          selectedRowKeys: []
        });
      }
    } // 当选中项发生改变时触发

  }, {
    key: "render",
    value: function render() {
      var selectedRowKeys = this.state.selectedRowKeys;
      var _this$props = this.props,
          _this$props$data = _this$props.data,
          list = _this$props$data.list,
          pagination = _this$props$data.pagination,
          loading = _this$props.loading,
          columns = _this$props.columns,
          rowKey = _this$props.rowKey,
          hasRowSelection = _this$props.hasRowSelection,
          scroll = _this$props.scroll,
          title = _this$props.title,
          propsrowSelection = _this$props.rowSelection,
          _this$props$alertProp = _this$props.alertProps,
          alertProps = _this$props$alertProp === void 0 ? {} : _this$props$alertProp,
          size = _this$props.size,
          locale = _this$props.locale,
          rowClassName = _this$props.rowClassName,
          className = _this$props.className,
          tableLayout = _this$props.tableLayout; // 分页设置,设为false则取消分页选项

      var paginationProps = // 如果组件传入pagination
      pagination && _objectSpread(_objectSpread({
        // 是否可以改变pageSize
        showSizeChanger: true,
        // 是否可以快速跳转到某页
        showQuickJumper: true
      }, pagination), {}, {
        // 用来显示数据总量和当前数据顺序,有total和range两个参数
        showTotal: function showTotal() {
          return "\u603B\u5171".concat(pagination && pagination.total ? pagination.total : 0, "\u6761");
        }
      }) || false; // checkbox功能配置

      var rowSelection = _objectSpread({
        // 选中项的key数组,key的值与rowkey的生成方式相关
        selectedRowKeys: selectedRowKeys,
        // 选中项发生变化时回调
        onChange: this.handleRowSelectChange,
        // 选择框默认属性配置
        getCheckboxProps: function getCheckboxProps(record) {
          return {
            // 失效状态false为可以选择，true为禁用选择
            disabled: record.disabled
          };
        }
      }, propsrowSelection);

      return /*#__PURE__*/React.createElement("div", {
        className: "standardTable"
      }, hasRowSelection && !rowSelection.type &&
      /*#__PURE__*/
      // !rowSelection.type 列表radio
      React.createElement("div", {
        className: "tableAlert"
      }, /*#__PURE__*/React.createElement(_Alert, {
        message:
        /*#__PURE__*/
        // 允许你将子列表分组，而无需向 DOM 添加额外节点
        React.createElement(Fragment, null, "\u5DF2\u9009\u62E9", ' ', /*#__PURE__*/React.createElement("a", {
          style: {
            fontWeight: 600
          }
        }, selectedRowKeys.length), ' ', "\u9879\xA0\xA0", /*#__PURE__*/React.createElement("span", null, // 判断是否使用Alert，如果使用将显示的组件也一同传来
        alertProps.hasAlert ? alertProps.alertLayout : '')),
        type: "info",
        showIcon: true
      })), /*#__PURE__*/React.createElement(_Table, {
        size: size // 表格是否加载中
        ,
        tableLayout: tableLayout || '',
        loading: loading // 表示是否可以滚动
        ,
        scroll: scroll // 表格行key取值
        ,
        rowKey: rowKey || 'id' // 表格行checkbox配置
        ,
        rowSelection: hasRowSelection ? rowSelection : null // 数据源
        ,
        dataSource: list // 表格列配置
        ,
        columns: columns.map(function (item) {
          item.ellipsis = true;
          return item;
        }) // 是否展示外边框和列边框
        // bordered={this.props.bordered || true}
        // 分页器
        ,
        pagination: paginationProps // 分页、筛选、排序时触发
        ,
        onChange: this.handleTableChange // 表格标题
        ,
        title: title,
        rowClassName: rowClassName,
        locale: locale,
        className: "table-striped".concat(className ? " ".concat(className) : '')
      }));
    }
  }]);

  return StandardTable;
}(PureComponent);

StandardTable.defaultProps = {
  // 表单默认没有选择框
  hasRowSelection: false
};
export default StandardTable;