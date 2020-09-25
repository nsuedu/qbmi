"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/card/style");

var _card = _interopRequireDefault(require("antd/es/card"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/radio/style");

var _radio = _interopRequireDefault(require("antd/es/radio"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _moment = _interopRequireDefault(require("moment"));

require("./chartCard.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var RangePicker = _datePicker.default.RangePicker;

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
            return /*#__PURE__*/_react.default.createElement(_col.default, {
              key: subItem.key,
              span: subItem.span || 24,
              offset: subItem.offset || 0,
              style: borderStyle
            }, /*#__PURE__*/_react.default.createElement(Comp, {
              key: subItem.key,
              colors: subItem.colors,
              preUnit: subItem.preUnit,
              afterUnit: subItem.afterUnit,
              data: subItem.data,
              options: subItem.options
            }));
          });
          return /*#__PURE__*/_react.default.createElement(_col.default, {
            span: item.span || 24,
            key: item.key,
            className: item.className
          }, /*#__PURE__*/_react.default.createElement(_row.default, {
            gutter: 32,
            key: item.key
          }, subItems));
        }

        var Comp = item.component;
        var borderStyle = layout.showDivider && index > 0 ? {
          borderLeft: '1px solid gray',
          paddingLeft: 120
        } : {};
        return /*#__PURE__*/_react.default.createElement(_col.default, {
          key: item.key,
          span: item.span || 24,
          className: item.className,
          style: borderStyle
        }, /*#__PURE__*/_react.default.createElement(Comp, {
          key: item.key,
          colors: item.colors,
          data: item.data,
          options: item.options
        }));
      });
      return /*#__PURE__*/_react.default.createElement(_row.default, {
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
      _this.setState(_defineProperty({}, key, [(0, _moment.default)(val[0]).format(format), (0, _moment.default)(val[1]).format(format)]), function () {
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

      _this.setState((_this$setState4 = {}, _defineProperty(_this$setState4, key, [getFirstDayOfMonth(new Date()), (0, _moment.default)(new Date()).format(format)]), _defineProperty(_this$setState4, "refeshDate", new Date().getTime()), _this$setState4), function () {
        _this.onChange();
      });
    };

    _this.toYear = function (key, format) {
      var _this$setState5;

      _this.setState((_this$setState5 = {}, _defineProperty(_this$setState5, key, [getFirstDayOfYear(new Date()), (0, _moment.default)(new Date()).format(format)]), _defineProperty(_this$setState5, "refeshDate", new Date().getTime()), _this$setState5), function () {
        _this.onChange();
      });
    };

    _this.renderRadios = function (list) {
      return list.map(function (item, idx) {
        return /*#__PURE__*/_react.default.createElement(_radio.default.Group, {
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
          return /*#__PURE__*/_react.default.createElement(_radio.default.Button, {
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

      var extra = /*#__PURE__*/_react.default.createElement("span", null, radios && !(0, _lodash.isArray)(radios) && radios.options && /*#__PURE__*/_react.default.createElement(_radio.default.Group, {
        buttonStyle: "solid",
        value: this.state[radios.key],
        onChange: function onChange(val) {
          _this2.radioChange(radios.key, val);
        }
      }, radios.options.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_radio.default.Button, {
          key: item.name,
          value: item.value
        }, item.name);
      })), radios && (0, _lodash.isArray)(radios) && radios.length > 0 && this.renderRadios(radios), timeRange && /*#__PURE__*/_react.default.createElement(RangePicker, {
        allowClear: false,
        key: this.state.refeshDate,
        onChange: function onChange(val) {
          _this2.timeChange(timeRange.key, val, timeRange.format);
        },
        style: {
          marginLeft: '10px'
        },
        value: [(0, _moment.default)(this.state[timeRange.key][0]), (0, _moment.default)(this.state[timeRange.key][1])],
        format: timeRange.format,
        renderExtraFooter: function renderExtraFooter() {
          if (timeRange.showFooter) {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "custDateFooter"
            }, /*#__PURE__*/_react.default.createElement(_button.default, {
              onClick: function onClick() {
                _this2.toYear(timeRange.key, timeRange.format);
              }
            }, "\u672C\u5E74"), /*#__PURE__*/_react.default.createElement(_button.default, {
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

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "echart-card-pane"
      }, /*#__PURE__*/_react.default.createElement(_card.default, _extends({
        onTabChange: function onTabChange(key) {
          _this2.onTabChange(tabList.key, key);
        }
      }, cardOptions), this.renderLayout()));
    }
  }]);

  return ChartCard;
}(_react.Component);

exports.default = ChartCard;