import "antd/es/spin/style";
import _Spin from "antd/es/spin";
import "antd/es/message/style";
import _message from "antd/es/message";
import "antd/es/select/style";
import _Select from "antd/es/select";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect, useCallback, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { throttle, isFunction } from 'lodash';
import { isPromise } from '@/utils/selectRequestUtils';
import styles from './index.less';
var Option = _Select.Option;
export default (function (props) {
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

  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(optionsProps),
      _useState4 = _slicedToArray(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var _useState5 = useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = useState(defaultQuery),
      _useState8 = _slicedToArray(_useState7, 2),
      query = _useState8[0],
      setQuery = _useState8[1];

  var usePrevious = function usePrevious(val) {
    var ref = useRef();
    useEffect(function () {
      ref.current = val;
    });
    return ref.current;
  };

  console.log('====================================');
  console.log(usePrevious(query));
  console.log('====================================');
  var debounceSearch = useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            if (!isFunction(dataServer)) {
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
            newDatas = isFunction(dataHandler) ? dataHandler(res) : res;
            setOptions(newDatas);
            setLoading(false);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [query, dataServer, dataHandler, optionsProps]);
  useEffect(function () {
    var initialData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  debounceSearch();
                } catch (error) {
                  _message.error(error);
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
  return /*#__PURE__*/React.createElement(_Select, _extends({
    value: value,
    loading: loading,
    notFoundContent: loading ? /*#__PURE__*/React.createElement(_Spin, {
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
      } else if (isFunction(onChangeProps)) {
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
    return /*#__PURE__*/React.createElement(Option, {
      key: d.value,
      disabled: d.disabled,
      value: d.value
    }, d.label);
  }));
});