import "antd/es/modal/style";
import _Modal from "antd/es/modal";
import "antd/es/button/style";
import _Button from "antd/es/button";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import React, { PureComponent } from 'react';
import { modalSize } from '../constants';
import '../index.less';

function FormModal(FormComponent) {
  var _temp;

  var isUseForm = true;
  /**
   *
   * @params onOk     异步成功后的回调操作
   * @params onCancel 关闭窗口操作
   * @params onClose  窗口关闭后的回调操作，
   * @params ...      其它antd modal 属性
   */

  return _temp = /*#__PURE__*/function (_PureComponent) {
    _inherits(_temp, _PureComponent);

    var _super = _createSuper(_temp);

    function _temp() {
      var _this;

      _classCallCheck(this, _temp);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.form = React.createRef();
      _this.state = {
        loading: false
      };
      _this.extraValidate = null;
      _this.handleClose = null;

      _this.disableFormRef = function () {
        isUseForm = false;
      };

      _this.enableFormRef = function () {
        isUseForm = true;
      };

      _this.onOk = function (promise) {
        var onOk = _this.props.onOk;

        _this.setState({
          loading: true
        });

        promise.then(function () {
          if (onOk) {
            onOk();
          }
        }).finally(function () {
          _this.setState({
            loading: false
          });
        });
      };

      _this.handleOk = function () {
        var onOk = _this.props.onOk;

        if (isUseForm) {
          _this.form.current.submit();
        } else {
          // eslint-disable-next-line no-lonely-if
          if (_this.extraValidate != null && _this.extraValidate) {
            _this.onOk(_this.extraValidate());
          } else if (onOk) {
            onOk();
          }
        }
      };

      _this.handleCancel = function () {
        if (isUseForm) {
          _this.form.current.resetFields();
        }

        var _this$props = _this.props,
            onCancel = _this$props.onCancel,
            onClose = _this$props.onClose;

        if (onClose) {
          onClose();
        }

        if (onCancel) {
          onCancel();
        }

        if (_this.handleClose) {
          _this.handleClose();
        }
      };

      _this.handleOther = function () {
        var onHandleOther = _this.props.onHandleOther;

        if (onHandleOther) {
          onHandleOther();
        }
      };

      return _this;
    }

    _createClass(_temp, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            title = _this$props2.title,
            visible = _this$props2.visible,
            size = _this$props2.size,
            width = _this$props2.width,
            _this$props2$okText = _this$props2.okText,
            okText = _this$props2$okText === void 0 ? '提交' : _this$props2$okText,
            _this$props2$cancelTe = _this$props2.cancelText,
            cancelText = _this$props2$cancelTe === void 0 ? '取消' : _this$props2$cancelTe,
            otherText = _this$props2.otherText,
            _this$props2$otherTyp = _this$props2.otherType,
            otherType = _this$props2$otherTyp === void 0 ? 'default' : _this$props2$otherTyp,
            params = _this$props2.params,
            propsWidth = _this$props2.width,
            rest = _objectWithoutProperties(_this$props2, ["title", "visible", "size", "width", "okText", "cancelText", "otherText", "otherType", "params", "width"]);

        var loading = this.state.loading;
        return /*#__PURE__*/React.createElement(_Modal, _extends({
          wrapClassName: "custFormModal",
          title: title,
          visible: visible,
          width: width || "".concat(size) && modalSize["".concat(size)] || modalSize.sm // confirmLoading={loading}
          // okText={okText}
          // cancelText={cancelText}
          // onOk={this.handleOk}
          ,
          onCancel: this.handleCancel,
          destroyOnClose: true,
          maskClosable: false
        }, rest, {
          footer: rest.footer === undefined ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Button, {
            type: "primary",
            loading: loading,
            onClick: this.handleOk
          }, okText), otherText && /*#__PURE__*/React.createElement(_Button, {
            type: otherType,
            onClick: this.handleOther
          }, otherText), /*#__PURE__*/React.createElement(_Button, {
            onClick: this.handleCancel
          }, cancelText)) : rest.footer
        }), /*#__PURE__*/React.createElement(FormComponent, {
          form: this.form,
          params: params,
          onOk: this.onOk,
          onCancel: this.handleCancel,
          onClose: function onClose(callback) {
            _this2.handleClose = callback;
          },
          handleOther: this.handleOther,
          enableFormRef: this.enableFormRef,
          disableFormRef: this.disableFormRef,
          extraValidate: function extraValidate(validateFunc) {
            _this2.extraValidate = validateFunc;
          }
        }));
      }
    }]);

    return _temp;
  }(PureComponent), _temp;
}

export default FormModal;