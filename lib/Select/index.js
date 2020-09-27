"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/empty/style");

var _empty = _interopRequireDefault(require("antd/es/empty"));

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var Option = _select.default.Option;

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  _createClass(Select, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, currState) {
      var originValue = nextProps.value,
          originOptions = nextProps.options;
      var value = currState.value,
          options = currState.options;
      var state = {};

      if (!(0, _lodash.isEqual)(originValue, value)) {
        Object.assign(state, {
          value: originValue
        });
      } // 外部通过异步请求获得下拉框数据，因此要在这里每次都接收一下


      if (Array.isArray(originOptions) && !(0, _lodash.isEqual)(originOptions, options)) {
        Object.assign(state, {
          options: originOptions
        });
      }

      return state;
    }
  }]);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);

    _this.fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj) {
        var _obj$input, input, _obj$page, page, _this$props, dataServer, dataHandler, newQuery, res, newDatas, _newDatas;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _obj$input = obj.input, input = _obj$input === void 0 ? _this.state.query : _obj$input, _obj$page = obj.page, page = _obj$page === void 0 ? _this.state.currentPage : _obj$page;
                _this$props = _this.props, dataServer = _this$props.dataServer, dataHandler = _this$props.dataHandler;

                if ((0, _lodash.isFunction)(dataServer)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                newQuery = [null, undefined, '', ' '].includes(input) ? '' : input;

                _this.setState({
                  fetching: true
                });

                _context.next = 8;
                return dataServer({
                  input: newQuery,
                  limit: 50,
                  page: page
                });

              case 8:
                res = _context.sent;

                if (Array.isArray(res)) {
                  newDatas = (0, _lodash.isFunction)(dataHandler) ? dataHandler(res) : res;

                  _this.setState({
                    options: newDatas,
                    fetching: false
                  });
                } else if (Array.isArray(res.dataSource)) {
                  _newDatas = (0, _lodash.isFunction)(dataHandler) ? dataHandler(res.dataSource) : res.dataSource;

                  _this.setState(function (prev) {
                    var newOptions = _toConsumableArray(prev.options);

                    newOptions.push.apply(newOptions, _toConsumableArray(_newDatas));
                    var newdata = (0, _lodash.uniqBy)(newOptions, 'value');
                    return {
                      options: newdata,
                      fetching: false,
                      currentPage: res.currentPage,
                      totalPage: res.totalPage
                    };
                  });
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleSearch = function (str) {
      _this.fetchData({
        input: str
      });
    };

    _this.handleFocus = function () {
      _this.fetchData({
        input: '',
        page: 1
      });
    };

    _this.handleChange = function (val) {
      var _this$props2 = _this.props,
          valueProps = _this$props2.value,
          onChangeProps = _this$props2.onChange,
          _this$props2$selectPr = _this$props2.selectProps,
          selectProps = _this$props2$selectPr === void 0 ? {} : _this$props2$selectPr;
      var options = _this.state.options;
      var origin = selectProps.labelInValue && val ? options.find(function (items) {
        return items.value === val.value;
      }) : options.find(function (items) {
        return items.value === val;
      });

      if ((0, _lodash.isFunction)(onChangeProps)) {
        // onChange时抛出 (当前选中的value,所有下拉框数据，当前选中的一行原始数据)
        onChangeProps(val, options, origin);
      }

      if (!valueProps) {
        _this.setState({
          value: val
        });
      }
    };

    _this.companyScroll = function (e) {
      var _e$target = e.target,
          clientHeight = _e$target.clientHeight,
          scrollHeight = _e$target.scrollHeight,
          scrollTop = _e$target.scrollTop;
      var _this$state = _this.state,
          currentPage = _this$state.currentPage,
          totalPage = _this$state.totalPage,
          fetching = _this$state.fetching;

      if (clientHeight + scrollTop === scrollHeight && !fetching && totalPage !== undefined && currentPage !== undefined && totalPage > currentPage) {
        var newpage = currentPage + 1;

        _this.setState({
          currentPage: newpage
        }, function () {
          // 获取数据的接口
          _this.fetchData({
            page: newpage
          });
        });
      }
    };

    _this.handleSearch = (0, _lodash.debounce)(_this.handleSearch, 400);
    _this.state = {
      options: props.options || [],
      value: props.defaultValue || [],
      // 默认的"关键字"搜索条件
      query: props.defaultQuery || null,
      fetching: false,
      cancelDisable: props.cancelDisable || false
    };
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          isLoading = _this$props3.isLoading,
          optionsProps = _this$props3.options;
      var value = this.state.value;
      /*
      如果在一个列表(table)中，每一行都存在此下拉框组件，为了避免重复请求
      列表中的下拉框存在value时才请求，下拉框的数据
      */

      if (isLoading || value && !(Array.isArray(optionsProps) && optionsProps.length)) {
        this.fetchData({});
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          notFoundTips = _this$props4.notFoundTips,
          selectProps = _this$props4.selectProps;
      var _this$state2 = this.state,
          fetching = _this$state2.fetching,
          options = _this$state2.options,
          value = _this$state2.value,
          cancelDisable = _this$state2.cancelDisable;
      return /*#__PURE__*/_react.default.createElement(_select.default, _extends({
        // labelInValue
        allowClear: true,
        value: value,
        notFoundContent: fetching ? /*#__PURE__*/_react.default.createElement(_spin.default, {
          size: "small"
        }) : /*#__PURE__*/_react.default.createElement(_empty.default, {
          tips: notFoundTips
        }),
        filterOption: false,
        showSearch: true,
        onSearch: function onSearch(val) {
          var str = val.replace(/\s+/g, ''); // if (str) {

          _this2.handleSearch(str); // }

        },
        onFocus: function onFocus() {
          _this2.handleFocus();
        },
        onBlur: function onBlur() {
          _this2.setState({
            query: null,
            currentPage: 1,
            options: []
          });
        },
        onChange: this.handleChange,
        placeholder: "\u8BF7\u9009\u62E9",
        style: {
          width: '100%'
        }
      }, selectProps, {
        onPopupScroll: this.companyScroll
      }), options.map(function (_ref2) {
        var val = _ref2.value,
            label = _ref2.label,
            rest = _objectWithoutProperties(_ref2, ["value", "label"]);

        var newRest = _objectSpread({}, rest);

        if (cancelDisable) {
          newRest.disabled = false;
        }

        return /*#__PURE__*/_react.default.createElement(Option, _extends({
          key: val,
          value: val
        }, newRest), label);
      }));
    }
  }]);

  return Select;
}(_react.default.Component);

exports.default = Select;
Select.defaultProps = {
  isLoading: false // 提供默认初始化时，就加载下拉数据

};