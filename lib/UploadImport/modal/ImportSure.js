"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/alert/style");

var _alert = _interopRequireDefault(require("antd/es/alert"));

var _react = _interopRequireDefault(require("react"));

var _FormModal = _interopRequireDefault(require("../../Modal/FormModal"));

var _StandardTable = _interopRequireDefault(require("../../TableWrapper/StandardTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImportSureContent = function ImportSureContent(props) {
  var disableFormRef = props.disableFormRef,
      _props$params = props.params,
      statistics = _props$params.statistics,
      columns = _props$params.columns,
      tableData = _props$params.tableData;
  disableFormRef();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_alert.default, {
    message: /*#__PURE__*/_react.default.createElement("span", null, "\u5171", ' ', /*#__PURE__*/_react.default.createElement("span", {
      className: statistics.errorRowCount ? 'errorNum' : 'successNum'
    }, statistics.total), ' ', "\u6761\uFF0C\u6709", /*#__PURE__*/_react.default.createElement("span", {
      className: statistics.errorRowCount ? 'errorNum' : 'successNum'
    }, ' ', statistics.errorRowCount), ' ', "\u6761\u65E0\u6CD5\u5BFC\u5165"),
    type: statistics.errorRowCount ? 'warning' : 'success',
    showIcon: true
  }), /*#__PURE__*/_react.default.createElement(_StandardTable.default, {
    rowKey: function rowKey() {
      return Math.random().toFixed(20);
    },
    tableLayout: "fixed",
    scroll: {
      x: false
    },
    columns: columns,
    data: {
      list: tableData,
      pagination: false
    }
  }));
};

var _default = (0, _FormModal.default)(ImportSureContent);

exports.default = _default;