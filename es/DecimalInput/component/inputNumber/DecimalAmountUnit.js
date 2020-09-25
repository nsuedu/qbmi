import "antd/es/input/style";
import _Input from "antd/es/input";

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
var numberMap = {
  amount: 6,
  price: 9
};

var DecimalAmount = function DecimalAmount(props) {
  var decimal = props.decimal,
      priceDecimal = props.priceDecimal,
      _props$precisionType = props.precisionType,
      precisionType = _props$precisionType === void 0 ? 'amount' : _props$precisionType,
      precision = props.precision,
      value = props.value,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      onBlurProps = props.onBlur,
      rest = _objectWithoutProperties(props, ["decimal", "priceDecimal", "precisionType", "precision", "value", "min", "onBlur"]);

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      tValue = _useState2[0],
      setTValue = _useState2[1];

  var vPrecision = precisionType === 'price' ? priceDecimal : precision !== undefined ? precision : decimal;
  var max = NUMBER[numberMap[precisionType]].max;
  useEffect(function () {
    setTValue(value);
  }, [value]);

  var onBlur = function onBlur(e) {
    var onChange = props.onChange;
    var v = e.target.value;

    if (v) {
      var transformV = Math.min(Number(v), max).toFixed(vPrecision);
      setTValue(transformV);

      if (onChange) {
        onChange(transformV);
      }

      if (onBlurProps) {
        onBlurProps(e);
      }
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Input, _extends({
    type: "number",
    value: tValue,
    min: min,
    max: max,
    onBlur: onBlur,
    style: {
      width: '100%'
    }
  }, rest, {
    className: "searchForm-field"
  })));
};

export default DecimalAmount;