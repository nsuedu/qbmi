import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/radio/style";
import _Radio from "antd/es/radio";
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isArray } from 'lodash';
import moment from 'moment';
import './chartCard.less';
var RangePicker = _DatePicker.RangePicker;

function timeFormat(date) {
  if (!date || typeof date === 'string') {
    this.error('参数异常，请检查...');
  }

  var y = date.getFullYear(); // 年

  var m = date.getMonth() + 1; // 月

  var d = date.getDate(); // 日

  return "".concat(y, "-").concat(m, "-").concat(d);
} // 获取当月第一天


function getFirstDayOfMonth(date) {
  date.setDate(1);
  return timeFormat(date);
} // 获取当年第一天


function getFirstDayOfYear(date) {
  date.setDate(1);
  date.setMonth(0);
  return timeFormat(date);
}

var ChartCard = /*#__PURE__*/function (_Component) {
  _inherits(ChartCard, _Component);

  var _super = _createSuper(ChartCard);

  function ChartCard(props) {
    var _this;

    _classCallCheck(this, ChartCard);

    _this = _super.call(this, props);

    _this.renderLayout = function () {
      var layout = _this.props.options.layout;
      var items = layout.items.map(function (item, index) {
        if (item.items && item.items.length > 0) {
          var subItems = item.items.map(function (subItem, subIndex) {
            var Comp = subItem.component;
            var borderStyle = subIndex > 0 && item.showDivider ? {
              borderLeft: '1px solid #d8d8d8',
              paddingLeft: 120
            } : {};
            return /*#__PURE__*/React.createElement(_Col, {
              key: subItem.key,
              span: subItem.span || 24,
              offset: subItem.offset || 0,
              style: borderStyle
            }, /*#__PURE__*/React.createElement(Comp, {
              key: subItem.key,
              colors: subItem.colors,
              preUnit: subItem.preUnit,
              afterUnit: subItem.afterUnit,
              data: subItem.data,
              options: subItem.options
            }));
          });
          return /*#__PURE__*/React.createElement(_Col, {
            span: item.span || 24,
            key: item.key,
            className: item.className
          }, /*#__PURE__*/React.createElement(_Row, {
            gutter: 32,
            key: item.key
          }, subItems));
        }

        var Comp = item.component;
        var borderStyle = layout.showDivider && index > 0 ? {
          borderLeft: '1px solid gray',
          paddingLeft: 120
        } : {};
        return /*#__PURE__*/React.createElement(_Col, {
          key: item.key,
          span: item.span || 24,
          className: item.className,
          style: borderStyle
        }, /*#__PURE__*/React.createElement(Comp, {
          key: item.key,
          colors: item.colors,
          data: item.data,
          options: item.options
        }));
      });
      return /*#__PURE__*/React.createElement(_Row, {
        gutter: 32
      }, items);
    };

    _this.onChange = function () {
      _this.props.onChange(_this.state);
    };

    _this.radioChange = function (key, e) {
      _this.setState(_defineProperty({}, key, e.target.value), function () {
        _this.onChange();
      });
    };

    _this.timeChange = function (key, val, format) {
      _this.setState(_defineProperty({}, key, [moment(val[0]).format(format), moment(val[1]).format(format)]), function () {
        _this.onChange();
      });
    };

    _this.onTabChange = function (key, val) {
      _this.setState(_defineProperty({}, key, val), function () {
        _this.onChange();
      });
    };

    _this.toMonth = function (key, format) {
      var _this$setState4;

      _this.setState((_this$setState4 = {}, _defineProperty(_this$setState4, key, [getFirstDayOfMonth(new Date()), moment(new Date()).format(format)]), _defineProperty(_this$setState4, "refeshDate", new Date().getTime()), _this$setState4), function () {
        _this.onChange();
      });
    };

    _this.toYear = function (key, format) {
      var _this$setState5;

      _this.setState((_this$setState5 = {}, _defineProperty(_this$setState5, key, [getFirstDayOfYear(new Date()), moment(new Date()).format(format)]), _defineProperty(_this$setState5, "refeshDate", new Date().getTime()), _this$setState5), function () {
        _this.onChange();
      });
    };

    _this.renderRadios = function (list) {
      return list.map(function (item, idx) {
        return /*#__PURE__*/React.createElement(_Radio.Group, {
          buttonStyle: "solid" // eslint-disable-next-line react/no-array-index-key
          ,
          key: item.key + idx,
          value: _this.state[item.key],
          onChange: function onChange(val) {
            _this.radioChange(item.key, val);
          },
          style: {
            marginLeft: '10px'
          }
        }, item.options.map(function (optionItem) {
          return /*#__PURE__*/React.createElement(_Radio.Button, {
            key: optionItem.name,
            value: optionItem.value
          }, optionItem.name);
        }));
      });
    };

    var defaultValue = props.options.headerOptions.defaultValue;
    _this.state = _objectSpread(_objectSpread({}, defaultValue), {}, {
      refeshDate: new Date().getTime()
    });
    return _this;
  }

  _createClass(ChartCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = this.props.options;
      var _options$headerOption = options.headerOptions,
          title = _options$headerOption.title,
          radios = _options$headerOption.radios,
          timeRange = _options$headerOption.timeRange,
          tabList = _options$headerOption.tabList;
      var cardOptions = {};
      var extra = /*#__PURE__*/React.createElement("span", null, radios && !isArray(radios) && radios.options && /*#__PURE__*/React.createElement(_Radio.Group, {
        buttonStyle: "solid",
        value: this.state[radios.key],
        onChange: function onChange(val) {
          _this2.radioChange(radios.key, val);
        }
      }, radios.options.map(function (item) {
        return /*#__PURE__*/React.createElement(_Radio.Button, {
          key: item.name,
          value: item.value
        }, item.name);
      })), radios && isArray(radios) && radios.length > 0 && this.renderRadios(radios), timeRange && /*#__PURE__*/React.createElement(RangePicker, {
        allowClear: false,
        key: this.state.refeshDate,
        onChange: function onChange(val) {
          _this2.timeChange(timeRange.key, val, timeRange.format);
        },
        style: {
          marginLeft: '10px'
        },
        value: [moment(this.state[timeRange.key][0]), moment(this.state[timeRange.key][1])],
        format: timeRange.format,
        renderExtraFooter: function renderExtraFooter() {
          if (timeRange.showFooter) {
            return /*#__PURE__*/React.createElement("div", {
              className: "custDateFooter"
            }, /*#__PURE__*/React.createElement(_Button, {
              onClick: function onClick() {
                _this2.toYear(timeRange.key, timeRange.format);
              }
            }, "\u672C\u5E74"), /*#__PURE__*/React.createElement(_Button, {
              style: {
                marginLeft: '20px'
              },
              onClick: function onClick() {
                _this2.toMonth(timeRange.key, timeRange.format);
              }
            }, "\u672C\u6708"));
          }

          return null;
        }
      }));

      if (title) {
        cardOptions.title = title;
      }

      if (tabList) {
        cardOptions.tabList = tabList.list;
        cardOptions.tabBarExtraContent = extra;
      } else {
        cardOptions.extra = extra;
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "echart-card-pane"
      }, /*#__PURE__*/React.createElement(_Card, _extends({
        onTabChange: function onTabChange(key) {
          _this2.onTabChange(tabList.key, key);
        }
      }, cardOptions), this.renderLayout()));
    }
  }]);

  return ChartCard;
}(Component);

export { ChartCard as default };