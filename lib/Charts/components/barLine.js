"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _resize = _interopRequireDefault(require("../../utils/resize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts'); // 引入柱状图


require('echarts/lib/chart/bar'); // 引入折线图


require('echarts/lib/chart/line'); // 引入提示框和标题组件


require('echarts/lib/component/tooltip');

require('echarts/lib/component/title');

require('echarts/lib/component/legend');

var Chart = /*#__PURE__*/function (_Component) {
  _inherits(Chart, _Component);

  var _super = _createSuper(Chart);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _super.call(this, props);

    _this.renderChart = function () {
      var _this$props = _this.props,
          dataSource = _this$props.data,
          options = _this$props.options;
      var option = options.option,
          seriesOption = options.seriesOption;
      var legend = option.legend;
      var data = {
        xData: dataSource.xData || ['北京', '杭州', '上海', '成都'],
        yData: dataSource.yData || [{
          name: '销售量',
          type: 'line',
          data: [100, 230, 120, 180]
        }, {
          name: '用户数',
          type: 'bar',
          data: [120, 150, 220, 280]
        }]
      };
      var myChart = echarts.init(_this.chartRef.current);
      myChart.clear();
      var yData = data.yData.map(function (item, idx) {
        var yAxisData = _objectSpread({}, item);

        var name = yAxisData.name;
        var dataArr = yAxisData.data;

        if (dataArr.some(function (value) {
          return value > 10000;
        })) {
          yAxisData.name = "".concat(name, " (\u4E07)");
          dataArr = dataArr.map(function (val) {
            return val / 10000;
          });
        }

        if (legend) {
          legend.data[idx].name = yAxisData.name; // legend.data[idx].name = name + name;
        }

        return _objectSpread(_objectSpread({}, yAxisData), {}, {
          data: dataArr
        }, seriesOption[idx]);
      });

      if (yData[1]) {
        yData[1].yAxisIndex = 1;
      }

      var yAxis = {
        min: 0,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      }; // 绘制图表

      myChart.setOption(_objectSpread(_objectSpread({}, option), {}, {
        legend: legend,
        xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          data: data.xData || []
        }],
        yAxis: [_objectSpread(_objectSpread({
          type: 'value',
          // name: (() => {
          //   if (yData[0]) {
          //     return `${yData[0].name} ${yData[0].smart ? '(万)' : ''}`;
          //   }
          //   return '';
          // })(),
          nameTextStyle: {// align: 'left',
          },
          min: 0
        }, yAxis), {}, {
          axisLabel: {}
        }), _objectSpread(_objectSpread({
          type: 'value',
          // name: (() => {
          //   if (yData[1]) {
          //     return `${yData[1].name} ${yData[1].smart ? '(万)' : ''}`;
          //   }
          //   return '';
          // })(),
          min: 0,
          position: 'right'
        }, yAxis), {}, {
          axisLabel: {
            show: true // formatter: '{value} %', // 右侧Y轴文字显示

          }
        })],
        series: yData
      }));
      var ele = _this.chartRef.current;

      _resize.default.on(ele, function () {
        myChart.resize();
      });
    };

    _this.state = {};
    _this.chartRef = _react.default.createRef();
    return _this;
  }

  _createClass(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderChart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderChart();
    }
  }, {
    key: "render",
    value: function render() {
      var height = this.props.options.height;
      var style = {
        height: height || 400
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        style: style,
        ref: this.chartRef
      });
    }
  }]);

  return Chart;
}(_react.Component);

exports.default = Chart;