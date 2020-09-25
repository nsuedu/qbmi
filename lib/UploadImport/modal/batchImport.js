"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/upload/style");

var _upload = _interopRequireDefault(require("antd/es/upload"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _InfoModal = _interopRequireDefault(require("../../Modal/InfoModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dragger = _upload.default.Dragger;

var batchImportContent = function batchImportContent(props) {
  var _props$params = props.params,
      draggerProps = _props$params.draggerProps,
      downloadParams = _props$params.downloadParams;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "draggerContainer"
  }, /*#__PURE__*/_react.default.createElement(Dragger, draggerProps, /*#__PURE__*/_react.default.createElement("p", {
    className: "ant-upload-drag-icon"
  }, /*#__PURE__*/_react.default.createElement(_icons.InboxOutlined, null)), /*#__PURE__*/_react.default.createElement("p", {
    className: "ant-upload-text"
  }, "\u70B9\u51FB\u6216\u5C06\u5355\u4E2A\u6587\u4EF6\u62D6\u62FD\u5230\u8FD9\u91CC\u4E0A\u4F20"), /*#__PURE__*/_react.default.createElement("p", {
    className: "ant-upload-hint"
  }, "\u652F\u6301\u6269\u5C55\u540D\uFF1A.xlsx \u6587\u4EF6\u5927\u5C0F10M\u4EE5\u5185"))), downloadParams && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, "\u63A8\u8350\u4F7F\u7528", /*#__PURE__*/_react.default.createElement("a", {
    href: downloadParams && downloadParams.downloadUrl
  }, downloadParams && downloadParams.name), "\u6574\u7406\u6570\u636E\u3002"));
};

var _default = (0, _InfoModal.default)(batchImportContent);

exports.default = _default;