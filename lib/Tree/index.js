"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/popconfirm/style");

var _popconfirm = _interopRequireDefault(require("antd/es/popconfirm"));

require("antd/es/popover/style");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/tree/style");

var _tree = _interopRequireDefault(require("antd/es/tree"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _IconFont = _interopRequireDefault(require("../IconFont"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var TreeNode = _tree.default.TreeNode;

var Tree = /*#__PURE__*/function (_React$Component) {
  _inherits(Tree, _React$Component);

  var _super = _createSuper(Tree);

  _createClass(Tree, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProp, preState) {
      var selectedKeys = nextProp.selectedKeys;

      if (selectedKeys && !(0, _lodash.isEqual)(selectedKeys, preState.selectedKeys)) {
        return {
          selectedKeys: selectedKeys
        };
      }

      return null;
    }
  }]);

  function Tree(props) {
    var _this;

    _classCallCheck(this, Tree);

    _this = _super.call(this, props);

    _this.onExpand = function (expandedKeys) {
      _this.setState({
        expandedKeys: expandedKeys,
        autoExpandParent: false
      });
    };

    _this.onSelect = function (selectedKeys, info) {
      var onSelect = _this.props.onSelect;
      var _this$state = _this.state,
          oldselectedKeys = _this$state.selectedKeys,
          oldexpandedKeys = _this$state.expandedKeys;

      var newselectedKeys = _toConsumableArray(selectedKeys);

      if (newselectedKeys.length === 0 && info && info.node && info.node.props) {
        var key = info.node.props.value || info.node.props.dataRef.key;
        newselectedKeys = [key];
      }

      if ((0, _lodash.isEqual)(newselectedKeys, oldselectedKeys)) {
        var _newkeys = [];

        if (oldexpandedKeys.includes(newselectedKeys[0])) {
          _newkeys = oldexpandedKeys.filter(function (item) {
            return !newselectedKeys.includes(item);
          });
        } else {
          _newkeys = [].concat(_toConsumableArray(oldexpandedKeys), [newselectedKeys[0]]);
        }

        if (!_newkeys.includes('0')) {
          _newkeys = [];
        }

        _this.setState({
          expandedKeys: _newkeys,
          autoExpandParent: false
        });

        return false;
      }

      var newkeys = [];

      if (oldexpandedKeys.includes(newselectedKeys[0])) {
        newkeys = oldexpandedKeys.filter(function (item) {
          return !newselectedKeys.includes(item);
        });
      } else {
        newkeys = [].concat(_toConsumableArray(oldexpandedKeys), [newselectedKeys[0]]);
      }

      _this.setState({
        expandedKeys: newkeys,
        autoExpandParent: false
      });

      if (onSelect) {
        onSelect(newselectedKeys, info);
      }

      if (!_this.props.selectedKeys) {
        _this.setState({
          selectedKeys: newselectedKeys
        });
      }
    };

    _this.renderTitle = function (obj, i) {
      var _this$props = _this.props,
          onAdd = _this$props.onAdd,
          onDelete = _this$props.onDelete,
          onEdit = _this$props.onEdit,
          deleteText = _this$props.deleteText,
          addText = _this$props.addText,
          editText = _this$props.editText,
          noEditAndDelete = _this$props.noEditAndDelete;
      var limit = _this.state.limit;
      var noEditAndDeleteItem = obj.origin && obj.origin[noEditAndDelete];
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "titleStyle"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "titleTextStyle"
      }, /*#__PURE__*/_react.default.createElement("span", {
        style: {
          display: 'inline-block',
          marginRight: 2
        }
      }, " ", obj.title), obj.number && /*#__PURE__*/_react.default.createElement("span", null, " ", "(".concat(obj.number, ")"))), obj.value !== '0' || obj.title !== '全部' ? /*#__PURE__*/_react.default.createElement("div", {
        className: "titleDescStyle",
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, addText && i <= limit && /*#__PURE__*/_react.default.createElement("span", {
        style: {
          display: 'inline-block'
        },
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();

          if (onAdd) {
            onAdd(obj);
          }
        }
      }, /*#__PURE__*/_react.default.createElement(_popover.default, {
        content: addText
      }, /*#__PURE__*/_react.default.createElement(_IconFont.default, {
        type: "iconadd",
        style: {
          marginRight: 6,
          color: '#40a9ff'
        }
      }))), editText && !noEditAndDeleteItem && /*#__PURE__*/_react.default.createElement("span", {
        style: {
          marginLeft: 15,
          marginRight: 15
        },
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();

          if (onEdit) {
            onEdit(obj);
          }
        }
      }, /*#__PURE__*/_react.default.createElement(_popover.default, {
        content: editText
      }, /*#__PURE__*/_react.default.createElement(_IconFont.default, {
        type: "iconbianji"
      }))), deleteText && !noEditAndDeleteItem && /*#__PURE__*/_react.default.createElement(_popconfirm.default, {
        title: "\u786E\u5B9A\u5220\u9664\u5417?",
        onConfirm: function onConfirm() {
          if (onDelete) {
            onDelete(obj);
          }
        },
        okText: "\u786E\u5B9A",
        cancelText: "\u53D6\u6D88"
      }, /*#__PURE__*/_react.default.createElement(_popover.default, {
        content: deleteText
      }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_IconFont.default, {
        type: "iconicon-delete"
      }))))) : null);
    };

    _this.renderTreeNodes = function (data, i) {
      var limit = _this.state.limit;
      return data.map(function (item) {
        if (item.children && item.children.length > 0) {
          return /*#__PURE__*/_react.default.createElement(TreeNode, {
            title: _this.renderTitle(item, i),
            key: item.key // dataRef={item}
            ,
            switcherIcon: function switcherIcon(node) {
              // 未展开
              if (!node.expanded) {
                return /*#__PURE__*/_react.default.createElement(_IconFont.default, {
                  type: "iconfile-open",
                  style: {
                    color: '#1D8EF5',
                    fontSize: 18,
                    lineHeight: '47px'
                  }
                });
              }

              if (node.expanded) {
                return /*#__PURE__*/_react.default.createElement(_IconFont.default, {
                  type: "iconfile-open-result",
                  style: {
                    color: '#1D8EF5',
                    fontSize: 18,
                    lineHeight: '47px'
                  }
                });
              }

              return null;
            }
          }, i <= limit && _this.renderTreeNodes(item.children, i + 1));
        }

        return /*#__PURE__*/_react.default.createElement(TreeNode, _extends({
          key: item.key
        }, item, {
          title: _this.renderTitle(item, i)
        }));
      });
    };

    _this.state = {
      expandedKeys: props.expandedKeys || ['0'],
      autoExpandParent: true,
      selectedKeys: props.selectedKeys || ['0'],
      limit: props.limit || 3
    };
    return _this;
  }

  _createClass(Tree, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          treeData = _this$props2.treeData,
          defaultSelectedKeys = _this$props2.defaultSelectedKeys;
      var _this$state2 = this.state,
          expandedKeys = _this$state2.expandedKeys,
          autoExpandParent = _this$state2.autoExpandParent,
          selectedKeys = _this$state2.selectedKeys;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "treeWrap"
      }, /*#__PURE__*/_react.default.createElement(_tree.default, {
        defaultSelectedKeys: defaultSelectedKeys || [],
        onExpand: this.onExpand,
        expandedKeys: expandedKeys,
        autoExpandParent: autoExpandParent,
        onSelect: this.onSelect,
        selectedKeys: selectedKeys
      }, this.renderTreeNodes(treeData, 1)));
    }
  }]);

  return Tree;
}(_react.default.Component);

var _default = Tree;
exports.default = _default;