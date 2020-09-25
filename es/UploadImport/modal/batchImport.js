import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import InfoModal from '../../Modal/InfoModal';
var Dragger = _Upload.Dragger;

var batchImportContent = function batchImportContent(props) {
  var _props$params = props.params,
      draggerProps = _props$params.draggerProps,
      downloadParams = _props$params.downloadParams;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "draggerContainer"
  }, /*#__PURE__*/React.createElement(Dragger, draggerProps, /*#__PURE__*/React.createElement("p", {
    className: "ant-upload-drag-icon"
  }, /*#__PURE__*/React.createElement(InboxOutlined, null)), /*#__PURE__*/React.createElement("p", {
    className: "ant-upload-text"
  }, "\u70B9\u51FB\u6216\u5C06\u5355\u4E2A\u6587\u4EF6\u62D6\u62FD\u5230\u8FD9\u91CC\u4E0A\u4F20"), /*#__PURE__*/React.createElement("p", {
    className: "ant-upload-hint"
  }, "\u652F\u6301\u6269\u5C55\u540D\uFF1A.xlsx \u6587\u4EF6\u5927\u5C0F10M\u4EE5\u5185"))), downloadParams && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, "\u63A8\u8350\u4F7F\u7528", /*#__PURE__*/React.createElement("a", {
    href: downloadParams && downloadParams.downloadUrl
  }, downloadParams && downloadParams.name), "\u6574\u7406\u6570\u636E\u3002"));
};

export default InfoModal(batchImportContent);