"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _lodash = require("lodash");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  author:lilin
*/
// 渲染table操作列
// 说明：props接收operations数组，超过三个渲染为Dropdown
var TableOperation = function TableOperation(props) {
  var operations = props.operations;

  if ((0, _lodash.isArray)(operations) && operations.length > 0) {
    if (operations.length <= 3) {
      return operations.map(function (item, index, arr) {
        if (index < arr.length - 1) {
          return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item, /*#__PURE__*/_react.default.createElement(_divider.default, {
            type: "vertical"
          }));
        }

        return item;
      });
    }

    var renderDrop = function renderDrop() {
      var drops = [];
      operations.forEach(function (item, index) {
        if (index > 0) {
          drops.push( /*#__PURE__*/_react.default.createElement(_menu.default.Item, null, item));
        }
      });
      return drops;
    };

    var menu = /*#__PURE__*/_react.default.createElement(_menu.default, null, renderDrop());

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, operations[0], /*#__PURE__*/_react.default.createElement(_divider.default, {
      type: "vertical"
    }), /*#__PURE__*/_react.default.createElement(_dropdown.default, {
      trigger: "click",
      overlayClassName: "item",
      overlay: menu
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "ant-dropdown-link",
      onClick: function onClick(e) {
        return e.preventDefault();
      }
    }, "\u66F4\u591A\u64CD\u4F5C", /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null))));
  }

  return null;
};

TableOperation.propTypes = {
  operations: _propTypes.default.array.isRequired
};
var _default = TableOperation;
exports.default = _default;