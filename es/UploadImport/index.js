import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/popover/style";
import _Popover from "antd/es/popover";
import "antd/es/message/style";
import _message from "antd/es/message";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CloudUploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import exportBlob from '../utils/exportBlob';
import './index.less'; // 使用示例

/*
  <UploadEle
    // 上传参数
    uploadParams={{
      confirmTitle: '采购清单导入确认', //确认弹窗标题
      uploadUrl: executeimportByFile, // 上传server
      uploadOption: {                 // 上传接口传递的参数
        planId: detailData.id,
        planNumber: detailData.serialNumber,
      },
      exportErrorUrl: `${purchasingPrefix}/inventory/export-errorrows`, // 错误导出接口地址
      confirmService: executeimportInventory, // 确认导入server
      callback: (tableData) => { // 导入回调默认传递后端返回结果
        refreshInventory(tableData);
      },
    }}
    // 下载参数
    downloadParams={{
      downloadUrl: templates.purchasePlan, // 下载地址
      name: '采购需求清单模板', // 下载模板名称
    }}
  />
*/

import BatchImportModal from './modal/batchImport';
import ImportSureModal from './modal/ImportSure';

var generWidth = function generWidth(text) {
  var radio = 110 / 5; // 默认5个字符显示105的宽度

  return Math.max(text.length, 5) * radio;
};

var generTitle = function generTitle(title) {
  return title.indexOf('*') > -1 ? /*#__PURE__*/React.createElement("span", {
    className: "ant-form-item-label"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ant-form-item-required"
  }, title.replace('*', ''))) : title;
};

var UploadModal = function UploadModal(props) {
  var downloadParams = props.downloadParams,
      uploadParams = props.uploadParams;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      confirmVisible = _useState4[0],
      setConfirmVisible = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      tableData = _useState6[0],
      setTableData = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      cacheId = _useState8[0],
      setCacheId = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      canImportAll = _useState10[0],
      setCanImportAll = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      canImportCorrect = _useState12[0],
      setCanImportCorrect = _useState12[1];

  var _useState13 = useState([]),
      _useState14 = _slicedToArray(_useState13, 2),
      headers = _useState14[0],
      setHeaders = _useState14[1];

  var _useState15 = useState({}),
      _useState16 = _slicedToArray(_useState15, 2),
      statistics = _useState16[0],
      setStatistics = _useState16[1];

  var _useState17 = useState([]),
      _useState18 = _slicedToArray(_useState17, 2),
      files = _useState18[0],
      setFiles = _useState18[1]; // // 开发环境添加租户信息
  // const addr = window.location.origin;
  // let Tenant;
  // if (addr.includes('localhost:')) {
  //   Tenant = '05e8c098-81e6-4ffa-9d37-6918818b699d';
  // }


  var tokenInfo = localStorage.tokenInfo && localStorage.tokenInfo !== 'undefined' && localStorage.tokenInfo !== 'null' ? JSON.parse(localStorage.tokenInfo) : {};

  var onCancel = function onCancel() {
    setFiles([]);
    setVisible(false);
  };

  var draggerProps = {
    name: 'file',
    multiple: uploadParams.multiple || false,
    action: uploadParams.uploadUrl,
    method: uploadParams.method || 'POST',
    fileList: files,
    onChange: function onChange(info) {
      var status = info.file.status;
      var fileList = info.fileList;
      setFiles(fileList);

      if (status !== 'uploading') {//
      }

      if (status === 'done') {
        if (info.file.response) {
          if (info.file.response.success) {
            onCancel();
            setCacheId(info.file.response.data.cacheId);
            setCanImportAll(info.file.response.data.canImportAll);
            setCanImportCorrect(info.file.response.data.canImportCorrect);
            setTableData(info.file.response.data.items);
            setHeaders(info.file.response.data.headers);
            setStatistics(info.file.response.data.statistics);
            setVisible(false);
            setConfirmVisible(true);
            setFiles([]);
          } else {
            var newFileList = fileList.filter(function (item) {
              return item.response.success;
            });
            setFiles(newFileList);

            _message.error(info.file.response.msg);
          }
        }
      } else if (status === 'error') {
        var _newFileList = fileList.filter(function (item) {
          return item.status !== 'error';
        });

        setFiles(_newFileList);

        _message.error("".concat(info.file.name, "\u4E0A\u4F20\u5931\u8D25"));
      }
    },
    headers: {
      Authorization: "Bearer ".concat(tokenInfo.accessToken)
    }
  };
  var fileName = "".concat(uploadParams.confirmTitle, "\u9519\u8BEF\u6570\u636E-").concat(moment(new Date()).format('YYYY-MM-DD'));

  var exportError = function exportError() {
    exportBlob("".concat(uploadParams.exportErrorUrl, "?cacheId=").concat(cacheId), fileName);
  };

  var confirmCancel = function confirmCancel() {
    setConfirmVisible(false);
  };

  var onConfirm = function onConfirm() {
    if (cacheId) {
      if (uploadParams.confirmService) {
        uploadParams.confirmService(_objectSpread({
          cacheId: cacheId,
          importAll: true
        }, uploadParams.uploadOption)).then(function (res) {
          if (res && res.success) {
            _message.success('导入成功！');

            if (uploadParams.callback) {
              uploadParams.callback(tableData);
              setConfirmVisible(false);
            }
          }
        });
      } else {
        if (uploadParams.callback) {
          uploadParams.callback(tableData);
        }

        setConfirmVisible(false);
      }
    }
  };

  var okConfirm = function okConfirm() {
    if (cacheId) {
      if (uploadParams.confirmService) {
        uploadParams.confirmService(_objectSpread({
          cacheId: cacheId,
          importAll: false
        }, uploadParams.uploadOption)).then(function (res) {
          if (res && res.success) {
            _message.success('导入成功！');

            if (uploadParams.callback) {
              setConfirmVisible(false);
              uploadParams.callback(tableData);
              exportError();
            }
          }
        });
      } else if (uploadParams.callback) {
        setConfirmVisible(false);
        uploadParams.callback(tableData);
        exportError();
      }
    }
  };

  var columns = Object.keys(headers).map(function (item) {
    return {
      title: generTitle(headers[item]),
      dataIndex: item,
      width: generWidth(headers[item]),
      render: function render(text, record) {
        if (!(record && record.rowData)) {
          return null;
        }

        var value = record.rowData[item];
        var errorMessage = record.rowError && record.rowError[item] ? record.rowError[item] : null;

        if (errorMessage) {
          return /*#__PURE__*/React.createElement(_Popover, {
            content: errorMessage
          }, /*#__PURE__*/React.createElement("span", {
            className: "text-error"
          }, value || '不能为空'));
        }

        return value;
      }
    };
  });
  var confirmFooter = [/*#__PURE__*/React.createElement(_Button, {
    key: "cancel",
    onClick: confirmCancel
  }, "\u53D6\u6D88")];

  if (canImportCorrect) {
    confirmFooter.push( /*#__PURE__*/React.createElement(_Button, {
      key: "okimport",
      type: "primary",
      onClick: okConfirm
    }, "\u5BFC\u5165\u5E76\u4E0B\u8F7D\u9519\u8BEF\u6570\u636E"));
  }

  if (canImportAll) {
    confirmFooter.push( /*#__PURE__*/React.createElement(_Button, {
      key: "ok",
      disabled: !canImportAll,
      type: "primary",
      onClick: onConfirm
    }, "\u5BFC\u5165\u5168\u90E8"));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Button, {
    onClick: function onClick() {
      setVisible(true);
    },
    disabled: uploadParams.disabled || false
  }, /*#__PURE__*/React.createElement(CloudUploadOutlined, null), "\u6279\u91CF\u5BFC\u5165"), /*#__PURE__*/React.createElement(BatchImportModal, {
    title: "\u6279\u91CF\u5BFC\u5165",
    visible: visible,
    params: {
      draggerProps: draggerProps,
      downloadParams: downloadParams
    },
    onCancel: onCancel
  }), /*#__PURE__*/React.createElement(ImportSureModal, {
    title: uploadParams.confirmTitle || '导入确认',
    visible: confirmVisible,
    size: "lg",
    params: {
      statistics: statistics,
      columns: columns,
      tableData: tableData
    },
    onCancel: confirmCancel,
    footer: confirmFooter
  }));
};

export default UploadModal;