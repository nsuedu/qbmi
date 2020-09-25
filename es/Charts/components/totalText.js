import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/popover/style";
import _Popover from "antd/es/popover";

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

/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { isNumber } from 'lodash';
import NumTransform from '../../utils/numberTransform';
import './totalText.less';

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
          return /*#__PURE__*/React.createElement(_Col, {
            span: span,
            key: item.name,
            style: {
              borderLeft: "5px solid ".concat(color[index])
            },
            className: "item"
          }, /*#__PURE__*/React.createElement("div", {
            className: "title"
          }, item.name), /*#__PURE__*/React.createElement("div", {
            style: {
              color: color[index]
            },
            className: "text"
          }, item.value !== null && item.value !== undefined && isNumber(item.value) ? /*#__PURE__*/React.createElement(_Popover, {
            content: "".concat(options && options.preUnit || '').concat(item.value).concat(options && options.afterUnit || '')
          }, "".concat(options && options.preUnit || '').concat(NumTransform(item.value, 2)).concat(options && options.afterUnit || '')) : '敬请期待'));
        }

        return /*#__PURE__*/React.createElement("div", {
          key: item.name,
          style: {
            borderLeft: "5px solid ".concat(color[index])
          },
          className: "item"
        }, /*#__PURE__*/React.createElement("div", {
          className: "title"
        }, item.name), /*#__PURE__*/React.createElement("div", {
          style: {
            color: color[index]
          },
          className: "text"
        }, item.value !== null && item.value !== undefined && isNumber(item.value) ? /*#__PURE__*/React.createElement(_Popover, {
          content: "".concat(options && options.preUnit || '', "  ").concat(item.value, "  ").concat(options && options.afterUnit || '')
        }, "".concat(options && options.preUnit || '', "  ").concat(NumTransform(item.value, 2), "  ").concat(options && options.afterUnit || '')) : '敬请期待'));
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
      return /*#__PURE__*/React.createElement("div", {
        className: "total"
      }, options && options.title && /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, options.title), options.col && /*#__PURE__*/React.createElement(_Row, {
        className: "rowItems"
      }, this.renderItem(data)), !options.col && /*#__PURE__*/React.createElement("div", {
        className: "items"
      }, this.renderItem(data)));
    }
  }]);

  return Chart;
}(Component);

export { Chart as default };