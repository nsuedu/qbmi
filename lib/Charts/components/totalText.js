"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/popover/style");

var _popover = _interopRequireDefault(require("antd/es/popover"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _numberTransform = _interopRequireDefault(require("../../utils/numberTransform"));

require("./totalText.less");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Chart = /*#__PURE__*/function (_Component) {
  _inherits(Chart, _Component);

  var _super = _createSuper(Chart);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _super.call(this, props);

    _this.renderItem = function (data) {
      var options = _this.props.options;
      var color = options.color;
      return data.map(function (item, index) {
        if (options.col) {
          var span = 24 / options.col;
          return /*#__PURE__*/_react.default.createElement(_col.default, {
            span: span,
            key: item.name,
            style: {
              borderLeft: "5px solid ".concat(color[index])
            },
            className: "item"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "title"
          }, item.name), /*#__PURE__*/_react.default.createElement("div", {
            style: {
              color: color[index]
            },
            className: "text"
          }, item.value !== null && item.value !== undefined && (0, _lodash.isNumber)(item.value) ? /*#__PURE__*/_react.default.createElement(_popover.default, {
            content: "".concat(options && options.preUnit || '').concat(item.value).concat(options && options.afterUnit || '')
          }, "".concat(options && options.preUnit || '').concat((0, _numberTransform.default)(item.value, 2)).concat(options && options.afterUnit || '')) : '敬请期待'));
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          key: item.name,
          style: {
            borderLeft: "5px solid ".concat(color[index])
          },
          className: "item"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "title"
        }, item.name), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            color: color[index]
          },
          className: "text"
        }, item.value !== null && item.value !== undefined && (0, _lodash.isNumber)(item.value) ? /*#__PURE__*/_react.default.createElement(_popover.default, {
          content: "".concat(options && options.preUnit || '', "  ").concat(item.value, "  ").concat(options && options.afterUnit || '')
        }, "".concat(options && options.preUnit || '', "  ").concat((0, _numberTransform.default)(item.value, 2), "  ").concat(options && options.afterUnit || '')) : '敬请期待'));
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Chart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          options = _this$props.options;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "total"
      }, options && options.title && /*#__PURE__*/_react.default.createElement("div", {
        className: "title"
      }, options.title), options.col && /*#__PURE__*/_react.default.createElement(_row.default, {
        className: "rowItems"
      }, this.renderItem(data)), !options.col && /*#__PURE__*/_react.default.createElement("div", {
        className: "items"
      }, this.renderItem(data)));
    }
  }]);

  return Chart;
}(_react.Component);

exports.default = Chart;