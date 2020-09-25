import React, { Component } from 'react';

import eleResize from '../../utils/resize';

// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/dataZoom');
require('echarts/lib/component/legend');

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  renderChart = () => {
    const { data, options } = this.props;
    const { type, option, seriseOption } = options;
    const myChart = echarts.init(this.chartRef.current);
    myChart.clear();
    const yData =
      data && data.yData
        ? data.yData.map(item => {
            return {
              ...item,
              ...seriseOption,
              type: 'bar',
            };
          })
        : [];
    let axis = {
      xAxis: {
        data: (data && data.xData) || [],
        axisTick: {
          show: false,
        },
        ...(option.xAxis || {}),
      },
      yAxis: {
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
        ...(option.yAxis || {}),
      },
    };
    if (type === 'horizontal') {
      axis = {
        xAxis: option.xAxis
          ? {
              type: 'value',
              ...option.xAxis,
            }
          : {
              type: 'value',
            },
        yAxis: option.yAxis
          ? {
              type: 'category',
              data: (data && data.xData) || [],
              ...option.yAxis,
            }
          : {
              type: 'category',
              data: (data && data.xData) || [],
            },
      };
    }

    if (option.legend && option.legend.data && option.legend.data.length > 0 && yData[0]) {
      option.legend.data[0].name = yData[0].name;
    }
    // 绘制图表
    myChart.setOption({
      ...option,
      series: yData,
      ...axis,
    });
    const ele = this.chartRef.current;
    eleResize.on(ele, () => {
      myChart.resize();
    });
  };

  render() {
    const { options } = this.props;
    const { width, height } = options;
    return (
      <div style={{ width: width || '100%', height: height || '400px' }} ref={this.chartRef} />
    );
  }
}
