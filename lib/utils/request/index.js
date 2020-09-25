"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/notification/style");

var _notification2 = _interopRequireDefault(require("antd/es/notification"));

var _umiRequest = require("umi-request");

var _lodash = require("lodash");

var _umi = require("umi");

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 401报错重复处理
var authFalse = false;
var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
/**
 * 异常处理程序
 */

var errorNotice = function errorNotice(message, description) {
  if (!authFalse) {
    authFalse = true;

    _notification2.default.error({
      message: message,
      description: description,
      onClose: function onClose() {
        authFalse = false;
      }
    });
  }
};

var errorHandler = function errorHandler(error) {
  var response = error.response;

  if (response && response.status) {
    var errorText = codeMessage[response.status] || response.statusText;
    var status = response.status,
        url = response.url; // 401处理

    if (status === 401) {
      // 刷新失败跳转登录
      localStorage.clear();

      _umi.history.push('/');
    }

    errorNotice("\u8BF7\u6C42\u9519\u8BEF ".concat(status, ": ").concat(url), errorText);
  } else if (!response) {
    errorNotice('网络异常', '您的网络发生异常，无法连接服务器');
  }

  return response;
};
/**
 * 配置request请求时的默认参数
 * ~静态配置
 */


var request = (0, _umiRequest.extend)({
  errorHandler: errorHandler,
  // 默认错误处理
  // credentials: 'include', // 默认请求是否带上cookie
  // 浏览器不在请求中包含凭据
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    mode: 'cors'
  }
});
/**
 * request拦截器, 改变url 或 options.
 * ~动态配置
 */

request.interceptors.request.use(function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var newUrl = url;

  var newOptions = _objectSpread({}, options);

  var tokenInfo = localStorage.tokenInfo && localStorage.tokenInfo !== 'null' ? JSON.parse(localStorage.tokenInfo) : {}; // 非登录接口添加token

  if (!url.includes('/account/login')) {
    newOptions.headers.Authorization = "Bearer ".concat(tokenInfo.accessToken);
  } // 刷新token去掉Authorization


  if (url.includes('/account/refresh')) {
    newOptions.headers.Authorization = null;
  } // 开发环境添加租户信息
  // const addr = window.location.origin;
  // if (addr.includes('localhost:')) {
  //   newOptions.headers.Tenant = '05e8c098-81e6-4ffa-9d37-6918818b699d';
  // }


  if (options.method === 'post') {
    if ((0, _lodash.isObject)(options.body)) {
      newOptions = _objectSpread(_objectSpread({}, newOptions), {}, {
        body: JSON.stringify(options.body)
      });
    }
  }

  return {
    url: newUrl,
    options: newOptions
  };
}); // 克隆响应对象做解析处理

request.interceptors.response.use( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(responseSelf) {
    var resObj, data, _localStorage, tokenExpires, currentTime, tokenInfo;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resObj = responseSelf.clone();

            if (!(resObj.status === 200)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return resObj.json();

          case 4:
            data = _context.sent;
            _context.next = 8;
            break;

          case 7:
            data = null;

          case 8:
            // 处理token失效
            _localStorage = localStorage, tokenExpires = _localStorage.tokenExpires;
            currentTime = new Date().getTime(); // token失效前4小时刷新

            if (tokenExpires > 0 && tokenExpires - currentTime < 14400000) {
              tokenInfo = localStorage.tokenInfo && localStorage.tokenInfo !== 'null' ? JSON.parse(localStorage.tokenInfo) : {};
              request("".concat(_constants.apiPrefix, "/account/refresh"), {
                method: 'POST',
                data: {
                  refreshToken: tokenInfo.refreshToken
                }
              }).then(function (resp) {
                if (resp && resp.data && resp.data.tokenInfo) {
                  localStorage.tokenInfo = JSON.stringify(resp.data.tokenInfo);
                  localStorage.tokenExpires = new Date().getTime() + resp.data.tokenInfo.expires * 1000;
                } else {
                  localStorage.tokenInfo = null;
                  localStorage.tokenExpires = 0;

                  _umi.history.push('/');
                }
              });
            } // 处理返回数据


            if (!data) {
              _context.next = 16;
              break;
            }

            if (!data.success) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", responseSelf);

          case 14:
            if (!authFalse) {
              _notification2.default.error({
                message: '提示',
                duration: 2.5,
                description: data.msg,
                onClose: function onClose() {
                  authFalse = false;
                }
              });
            } // 强制下线和其他地方登录


            if (data.code === 10005 || data.code === 10006) {
              authFalse = true;
              localStorage.tokenInfo = null;
              localStorage.tokenExpires = 0;

              _umi.history.push('/');
            }

          case 16:
            return _context.abrupt("return", responseSelf);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var _default = request;
exports.default = _default;