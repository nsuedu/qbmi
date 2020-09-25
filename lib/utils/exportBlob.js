"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

require("antd/es/notification/style");

var _notification2 = _interopRequireDefault(require("antd/es/notification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tokenInfo = localStorage.tokenInfo && localStorage.tokenInfo !== 'undefined' && localStorage.tokenInfo !== 'null' ? JSON.parse(localStorage.tokenInfo) : {};
var requestHeaders = {
  Authorization: "Bearer ".concat(tokenInfo.accessToken)
};

function _default(downloadUrl, fileName) {
  fetch(downloadUrl, {
    method: 'GET',
    headers: _objectSpread(_objectSpread({}, requestHeaders), {}, {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'zh-CN,zh;q=0.9'
    }),
    body: null
  }).then(function (res) {
    if (res.status !== 200) {
      _notification2.default.error({
        description: '请求发生错误，不能正确导出！',
        message: '错误'
      });

      return null;
    }

    return res.blob();
  }).then(function (data) {
    if (data) {
      var blob = new Blob([data]);
      var elink = document.createElement('a');
      elink.download = "".concat(fileName, ".xlsx");
      elink.href = URL.createObjectURL(blob);
      elink.click();
    }
  });
}