function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

import React, { Component } from 'react';
import { isEqual, isFunction } from 'lodash';
import PropTypes from 'prop-types';
import StandardForm from './StandardForm';
import StandardTable from './StandardTable';

var TableList = /*#__PURE__*/function (_Component) {
  _inherits(TableList, _Component);

  var _super = _createSuper(TableList);

  function TableList(props) {
    var _this;

    _classCallCheck(this, TableList);

    _this = _super.call(this, props);

    _this.handleStandardTableChange = function (pagination, filtersArg, sorter) {
      var _this$props = _this.props,
          handleTableChange = _this$props.handleTableChange,
          sortOrder = _this$props.sortOrder;

      if (handleTableChange) {
        handleTableChange(pagination, filtersArg, sorter);
      }

      if (sorter.order && sortOrder && sorter.order !== sortOrder) {
        return;
      }

      _this.setState({
        currentPage: pagination.current,
        pageSize: pagination.pageSize
      }, function () {
        _this.getTableData();
      });
    };

    _this.handleMenuClick = function (e) {
      var handleMenuClick = _this.props.handleMenuClick;
      var selectedRows = _this.state.selectedRows;
      if (!selectedRows) return;

      if (handleMenuClick) {
        handleMenuClick(e.key, selectedRows);
      }

      _this.setState({
        selectedRows: []
      });
    };

    _this.handleSelectRows = function (selectedRowKeys, selectedRows) {
      _this.setState({
        selectedRows: selectedRows
      });

      var handleSelectRows = _this.props.handleSelectRows;

      if (handleSelectRows) {
        handleSelectRows(selectedRowKeys, selectedRows);
      }
    };

    _this.resetPageAndGetData = function () {
      _this.setState({
        pageSize: 10,
        currentPage: 1
      }, function () {
        _this.getTableData();
      });
    };

    _this.getTableData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$state, pageSize, currentPage, searchValues, searchParams, _this$props2, listService, dataHandler, paramsHandler, initialValues, _this$props2$tablePro, mergeRowPage, mergePageSize, postData, lataestParams, res, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, pageSize = _this$state.pageSize, currentPage = _this$state.currentPage, searchValues = _this$state.searchValues, searchParams = _this$state.searchParams;
              _this$props2 = _this.props, listService = _this$props2.listService, dataHandler = _this$props2.dataHandler, paramsHandler = _this$props2.paramsHandler, initialValues = _this$props2.initialValues, _this$props2$tablePro = _this$props2.tableProps, mergeRowPage = _this$props2$tablePro.mergeRowPage, mergePageSize = _this$props2$tablePro.mergePageSize;
              postData = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, initialValues), searchParams), searchValues), {}, {
                limit: mergeRowPage ? mergePageSize : pageSize,
                page: currentPage
              });
              lataestParams = isFunction(paramsHandler) ? paramsHandler(postData) : postData;
              _context.next = 6;
              return listService(lataestParams);

            case 6:
              res = _context.sent;

              if (res && res.success) {
                data = res.data;

                if (dataHandler) {
                  data = dataHandler(data);
                }

                _this.setState({
                  page: data.page,
                  total: data.total,
                  tableData: data.items
                });
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.onSearch = function (val) {
      _this.setState({
        searchValues: val,
        currentPage: 1
      }, function () {
        _this.getTableData();
      });
    };

    _this.handleFormReset = function () {
      var onFormReset = _this.props.onFormReset;

      _this.setState({
        pageSize: 10,
        currentPage: 1
      }, function () {
        if (onFormReset) {
          onFormReset();
        }
      });
    };

    _this.renderTable = function () {
      var _this$props3 = _this.props,
          tableProps = _this$props3.tableProps,
          alertProps = _this$props3.alertProps,
          formOptions = _this$props3.formOptions,
          children = _this$props3.children,
          initialValues = _this$props3.initialValues,
          formValuesChange = _this$props3.formValuesChange,
          format = _this$props3.format,
          formLayout = _this$props3.formLayout,
          formItemLayout = _this$props3.formItemLayout;
      var mergeRowPage = tableProps.mergeRowPage,
          mergePageSize = tableProps.mergePageSize,
          loading = tableProps.loading,
          _tableProps$scroll = tableProps.scroll,
          scroll = _tableProps$scroll === void 0 ? {
        x: false
      } : _tableProps$scroll;
      var _this$state2 = _this.state,
          tableData = _this$state2.tableData,
          total = _this$state2.total,
          page = _this$state2.page,
          pageSize = _this$state2.pageSize;
      var data = {};

      if (mergeRowPage) {
        // 如果mergeRowPage为true，则表明是合并行的table，
        // 设置mergeRowPage的同时，必须设置mergePageSize（每页请求数据条数，通常为10，20，30）
        // 每页实际展示数据行数
        var currentPageSize = tableData.length > mergePageSize ? tableData.length : mergePageSize;
        data = {
          list: tableData,
          pagination: {
            current: page,
            total: page * (currentPageSize - mergePageSize) + total,
            totalRecords: total,
            pageSize: currentPageSize,
            showSizeChanger: false
          }
        };
      } else {
        data = {
          list: tableData,
          pagination: {
            current: page,
            pageSize: pageSize,
            total: total,
            totalRecords: total
          }
        };
      }

      var newTableProps = _objectSpread(_objectSpread({
        scroll: scroll
      }, tableProps), {}, {
        data: data,
        loading: Boolean(loading),
        alertProps: alertProps
      });

      return /*#__PURE__*/React.createElement("div", null, formOptions && /*#__PURE__*/React.createElement(StandardForm, {
        onFinish: _this.onSearch,
        initialValues: initialValues,
        options: formOptions,
        onValuesChange: formValuesChange,
        format: format,
        formLayout: formLayout,
        formItemLayout: formItemLayout,
        onFormReset: _this.handleFormReset
      }), children, /*#__PURE__*/React.createElement(StandardTable, _extends({
        rowKey: "id"
      }, newTableProps, {
        onSelectRow: _this.handleSelectRows,
        onChange: _this.handleStandardTableChange
      })));
    };

    _this.state = {
      pageSize: 10,
      currentPage: 1,
      tableData: [],
      total: 0,
      searchValues: {},
      selectedRows: [],
      searchParams: props.searchParams
    }; // this.tableWrapperRef = React.createRef();

    return _this;
  }

  _createClass(TableList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var tableWrapperRef = this.props.tableWrapperRef; // if (isFunction(tableWrapperRef) && this.tableWrapperRef && this.tableWrapperRef.current) {

      if (isFunction(tableWrapperRef)) {
        tableWrapperRef(this);
      }

      this.getTableData();
    } // 即将废除
    // componentWillReceiveProps(nextProps) {
    //   const { searchParams } = this.props;
    //   if (
    //     nextProps.searchParams &&
    //     !isEqual(nextProps.searchParams, searchParams)
    //   ) {
    //     this.getTableData(nextProps.searchParams);
    //   }
    // }

  }, {
    key: "componentDidUpdate",
    // React声明周期方法，在组件更新结束之后执行，在初始化render时不执行
    value: function componentDidUpdate(prevState) {
      var preSearchParams = prevState.searchParams;
      var thisSearchParams = this.state.searchParams; // 当传入的type发生变化的时候，更新state

      if (thisSearchParams && !isEqual(thisSearchParams, preSearchParams)) {
        this.resetPageAndGetData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderTable();
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var searchParams = nextProps.searchParams; // 当传入的type发生变化的时候，更新state

      if (nextProps.searchParams && !isEqual(searchParams, prevState.searchParams)) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          searchParams: nextProps.searchParams
        });
      } // 否则，对于state不进行任何操作


      return null;
    }
  }]);

  return TableList;
}(Component);

TableList.propTypes = {
  // 表格props
  tableProps: PropTypes.shape({
    columns: PropTypes.array.isRequired
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
  onFormReset: PropTypes.func
};
TableList.defaultProps = {
  handleTableChange: undefined,
  handleMenuClick: undefined,
  formValuesChange: undefined,
  sortOrder: 'descend',
  handleSelectRows: undefined,
  alertProps: {
    hasAlert: false
  },
  // scroll: { x: false },
  searchParams: {}
};
export default TableList;