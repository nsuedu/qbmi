"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/descriptions/style");

var _descriptions = _interopRequireDefault(require("antd/es/descriptions"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Descriptions = function Descriptions(props) {
  var _props$list = props.list,
      list = _props$list === void 0 ? [] : _props$list,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$col = props.col,
      col = _props$col === void 0 ? 3 : _props$col,
      rest = _objectWithoutProperties(props, ["list", "title", "col"]);

  return /*#__PURE__*/_react.default.createElement(_descriptions.default, _extends({
    title: title,
    column: col
  }, rest), list && Array.isArray(list) && list.length > 0 && list.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_descriptions.default.Item, {
      label: item.label,
      span: item.span || 1
    }, item.value || '--');
  }));
};

var _default = Descriptions;
exports.default = _default;