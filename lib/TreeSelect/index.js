"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tree-select/style");

var _treeSelect = _interopRequireDefault(require("antd/es/tree-select"));

var _react = _interopRequireDefault(require("react"));

var _treeUtil = require("../utils/treeUtil");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var TreeNode = _treeSelect.default.TreeNode;

var TreeSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(TreeSelect, _React$Component);

  var _super = _createSuper(TreeSelect);

  function TreeSelect(props) {
    var _this;

    _classCallCheck(this, TreeSelect);

    _this = _super.call(this, props);

    _this.getServerData = function (callback) {
      var _this$props = _this.props,
          dataServer = _this$props.dataServer,
          transformOptions = _this$props.transformOptions;

      if (dataServer) {
        dataServer({
          loading: false
        }).then(function (res) {
          if (res && res.data) {
            if (transformOptions) {
              var datas = (0, _treeUtil.dataTransformToTree)(_objectSpread({
                originData: res.data
              }, transformOptions));

              _this.setState({
                treeData: datas
              }, function () {
                // eslint-disable-next-line no-unused-expressions
                callback && callback();
              });
            } else {
              _this.setState({
                treeData: res.data
              }, function () {
                // eslint-disable-next-line no-unused-expressions
                callback && callback();
              });
            }
          }
        });
      }
    };

    _this.onFocus = function () {
      _this.getServerData();
    };

    _this.renderNode = function (list) {
      return list.map(function (item) {
        var selectable = item.disabled === undefined ? true : !item.disabled;
        return /*#__PURE__*/_react.default.createElement(TreeNode, {
          key: item.key,
          selectable: selectable,
          className: selectable ? '' : 'custTreeDisableItem',
          value: "".concat(item.value),
          title: item.title
        }, item.children && item.children.length > 0 && _this.renderNode(item.children));
      });
    };

    _this.onChangeHandler = function (value, label, extra) {
      var onChange = _this.props.onChange;
      var treeData = _this.state.treeData;

      if (onChange) {
        onChange(value, label, extra, treeData);
      }
    };

    _this.state = {
      treeData: props.treeData || []
    };
    return _this;
  }

  _createClass(TreeSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var callback = this.props.callback;
      this.getServerData(callback);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          props = _objectWithoutProperties(_this$props2, ["onChange"]);

      var data = JSON.parse(JSON.stringify(this.state.treeData));
      delete props.treeData;
      delete props.transformOptions;
      delete props.dataServer;

      if (data && data.length > 0) {
        return /*#__PURE__*/_react.default.createElement(_treeSelect.default, _extends({
          onFocus: this.onFocus,
          dropdownClassName: "custDrop",
          onChange: this.onChangeHandler
        }, props), this.renderNode(data));
      }

      return /*#__PURE__*/_react.default.createElement(_treeSelect.default, {
        key: "null",
        style: props.style ? props.style : {
          width: '100%'
        }
      });
    }
  }]);

  return TreeSelect;
}(_react.default.Component);

var _default = TreeSelect;
exports.default = _default;