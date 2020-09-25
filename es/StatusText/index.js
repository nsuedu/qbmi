import "antd/es/badge/style";
import _Badge from "antd/es/badge";
import "antd/es/tag/style";
import _Tag from "antd/es/tag";

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

/*
  author:lilin
  入参说明：
    type:状态类型，
    label:文本，
    mode:模式，接受tag和badge，badge左侧小点,tag标签框，默认badge
  状态说明:
  success: 已完成（正常结束）,
  error: 已终止（一场结束）,
  muted: 未开始、已创建（未进入流程）,
  processing: 已开始、正常流程中,
  warning: 被退回，已撤回（进行中的异常情况）,
*/
import React from 'react';
import PropTypes from 'prop-types';

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
        return /*#__PURE__*/React.createElement(_Tag, {
          color: type === 'muted' ? 'default' : type
        }, label);
      }

      return /*#__PURE__*/React.createElement(_Badge, {
        status: type === 'muted' ? 'default' : type,
        text: label || ''
      });
    }
  }]);

  return StatusText;
}(React.Component);

StatusText.propTypes = void 0;
StatusText.defaultProps = void 0;
StatusText.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mode: PropTypes.string
};
StatusText.defaultProps = {
  mode: 'badge'
};
export default StatusText;