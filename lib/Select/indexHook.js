"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _selectRequestUtils = require("@/utils/selectRequestUtils");

var _index = _interopRequireDefault(require("./index.less"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Option = _select.default.Option;

var _default = function _default(props) {
  var onChangeProps = props.onChange,
      _props$value = props.value,
      valueProps = _props$value === void 0 ? undefined : _props$value,
      selectProps = props.selectProps,
      _props$options = props.options,
      optionsProps = _props$options === void 0 ? [] : _props$options,
      dataServer = props.dataServer,
      dataHandler = props.dataHandler,
      defaultValue = props.defaultValue,
      _props$defaultQuery = props.defaultQuery,
      defaultQuery = _props$defaultQuery === void 0 ? null : _props$defaultQuery;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(optionsProps),
      _useState4 = _slicedToArray(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0, _react.useState)(defaultQuery),
      _useState8 = _slicedToArray(_useState7, 2),
      query = _useState8[0],
      setQuery = _useState8[1];

  var usePrevious = function usePrevious(val) {
    var ref = (0, _react.useRef)();
    (0, _react.useEffect)(function () {
      ref.current = val;
    });
    return ref.current;
  };

  console.log('====================================');
  console.log(usePrevious(query));
  console.log('====================================');
  var debounceSearch = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res, newDatas;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(Array.isArray(optionsProps) && optionsProps.length > 0)) {
              _context.next = 4;
              break;
            }

            setLoading(false);
            _context.next = 12;
            break;

          case 4:
            if (!(0, _lodash.isFunction)(dataServer)) {
              _context.next = 12;
              break;
            }

            setLoading(true);
            _context.next = 8;
            return dataServer({
              input: query
            });

          case 8:
            res = _context.sent;
            newDatas = (0, _lodash.isFunction)(dataHandler) ? dataHandler(res) : res;
            setOptions(newDatas);
            setLoading(false);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [query, dataServer, dataHandler, optionsProps]);
  (0, _react.useEffect)(function () {
    var initialData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  debounceSearch();
                } catch (error) {
                  _message2.default.error(error);
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function initialData() {
        return _ref2.apply(this, arguments);
      };
    }();

    initialData();
  }, [query]);
  return /*#__PURE__*/_react.default.createElement(_select.default, _extends({
    value: value,
    loading: loading,
    notFoundContent: loading ? /*#__PURE__*/_react.default.createElement(_spin.default, {
      size: "small"
    }) : null,
    filterOption: false,
    showSearch: true,
    onSearch: function onSearch(val) {
      var str = val.replace(/\s+/g, '');

      if (str && str.length > 0) {
        setQuery(str);
      }
    },
    onChange: function onChange(val) {
      if (!(valueProps && onChangeProps)) {
        setValue(val);
      } else if ((0, _lodash.isFunction)(onChangeProps)) {
        onChangeProps(val, options);
      }
    },
    style: {
      width: '100%'
    },
    dropdownClassName: "custDrop",
    onFocus: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return setQuery(null);

            case 2:
              debounceSearch();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })) // onBlur={() => {
    //   setQuery(null)
    // }}

  }, selectProps), options.map(function (d) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: d.value,
      disabled: d.disabled,
      value: d.value
    }, d.label);
  }));
};

exports.default = _default;