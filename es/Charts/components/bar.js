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

import React, { Component } from 'react';
import eleResize from '../../utils/resize'; // 引入 ECharts 主模块

var echarts = require('echarts/lib/echarts'); // 引入柱状图


require('echarts/lib/chart/bar'); // 引入提示框和标题组件


require('echarts/lib/component/tooltip');

require('echarts/lib/component/title');

require('echarts/lib/component/dataZoom');

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
          data = _this$props.data,
          options = _this$props.options;
      var type = options.type,
          option = options.option,
          seriseOption = options.seriseOption;
      var myChart = echarts.init(_this.chartRef.current);
      myChart.clear();
      var yData = data && data.yData ? data.yData.map(function (item) {
        return _objectSpread(_objectSpread(_objectSpread({}, item), seriseOption), {}, {
          type: 'bar'
        });
      }) : [];
      var axis = {
        xAxis: _objectSpread({
          data: data && data.xData || [],
          axisTick: {
            show: false
          }
        }, option.xAxis || {}),
        yAxis: _objectSpread({
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
        }, option.yAxis || {})
      };

      if (type === 'horizontal') {
        axis = {
          xAxis: option.xAxis ? _objectSpread({
            type: 'value'
          }, option.xAxis) : {
            type: 'value'
          },
          yAxis: option.yAxis ? _objectSpread({
            type: 'category',
            data: data && data.xData || []
          }, option.yAxis) : {
            type: 'category',
            data: data && data.xData || []
          }
        };
      }

      if (option.legend && option.legend.data && option.legend.data.length > 0 && yData[0]) {
        option.legend.data[0].name = yData[0].name;
      } // 绘制图表


      myChart.setOption(_objectSpread(_objectSpread({}, option), {}, {
        series: yData
      }, axis));
      var ele = _this.chartRef.current;
      eleResize.on(ele, function () {
        myChart.resize();
      });
    };

    _this.state = {};
    _this.chartRef = React.createRef();
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
      var options = this.props.options;
      var width = options.width,
          height = options.height;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: width || '100%',
          height: height || '400px'
        },
        ref: this.chartRef
      });
    }
  }]);

  return Chart;
}(Component);

export { Chart as default };