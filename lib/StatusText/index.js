"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/badge/style");

var _badge = _interopRequireDefault(require("antd/es/badge"));

require("antd/es/tag/style");

var _tag = _interopRequireDefault(require("antd/es/tag"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var StatusText = /*#__PURE__*/function (_React$Component) {
  _inherits(StatusText, _React$Component);

  var _super = _createSuper(StatusText);

  function StatusText(props) {
    var _this;

    _classCallCheck(this, StatusText);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(StatusText, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          label = _this$props.label,
          mode = _this$props.mode;

      if (mode === 'tag') {
        return /*#__PURE__*/_react.default.createElement(_tag.default, {
          color: type === 'muted' ? 'default' : type
        }, label);
      }

      return /*#__PURE__*/_react.default.createElement(_badge.default, {
        status: type === 'muted' ? 'default' : type,
        text: label || ''
      });
    }
  }]);

  return StatusText;
}(_react.default.Component);

StatusText.propTypes = void 0;
StatusText.defaultProps = void 0;
StatusText.propTypes = {
  type: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  mode: _propTypes.default.string
};
StatusText.defaultProps = {
  mode: 'badge'
};
var _default = StatusText;
exports.default = _default;