import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useState } from 'react';
import RegExps from '../../../utils/RegExp';
var NUMBER = RegExps.NUMBER;

var DecimalAmount = function DecimalAmount(props) {
  var _props$decimal = props.decimal,
      decimal = _props$decimal === void 0 ? 2 : _props$decimal,
      dispatch = props.dispatch,
      value = props.value,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, ["decimal", "dispatch", "value", "onChange"]);

  var _useState = useState(0.1),
      _useState2 = _slicedToArray(_useState, 2),
      fixed = _useState2[0],
      setFixed = _useState2[1];

  var initFixed = function initFixed() {
    var num = '0.';

    if (decimal === 0) {
      setFixed(0);
    } else {
      for (var i = 1; i < decimal; i += 1) {
        num += '0';
      }

      num += '1';
      setFixed(parseFloat(num));
    }
  };

  useEffect(function () {
    initFixed();
  }, []);

  var formatter = function formatter(val) {
    if (!val && val !== 0) {
      return '';
    }

    var v = String(val);

    if (Number(v) < 1) {
      // 判断一下有没有减号
      if (v.indexOf('-') >= 0 && v.indexOf('e') > -1) {
        v = "0".concat(String(Number(v) + 1).substr(1));
      }
    } // return Number(value);


    return v;
  };

  var changeHandler = function changeHandler(v) {
    // 转换科学计数法
    if (onChange) {
      onChange(formatter(v));
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_InputNumber, _extends({
    value: value,
    min: 0,
    max: NUMBER['6'].max,
    step: fixed,
    precision: decimal,
    formatter: formatter,
    onChange: changeHandler,
    style: {
      width: '100%'
    }
  }, rest, {
    className: "searchForm-field"
  })));
};

export default DecimalAmount;