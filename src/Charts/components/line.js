import React, { Component } from 'react';
import eleResize from '../../utils/resize';
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

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
    const {
      options: { option },
      data,
    } = this.props;
    const { legend } = option;

    const myChart = echarts.init(this.chartRef.current);
    myChart.clear();
    const yData =
      data && data.yData
        ? data.yData.map((item, idx) => {
            const yAxisData = { ...item };

            // if (data.some(value => value > 10000)) {
            //   yAxisData.name = `${name} (万)`;
            //   data = data.map(item => item / 10000);
            // }

            if (legend) {
              legend.data[idx].name = yAxisData.name;
            }

            return {
              type: 'line',
              ...yAxisData,
            };
          })
        : [];
    // 绘制图表
    myChart.setOption({
      ...option,

      xAxis: {
        data: (data && data.xData) || [],
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      series: yData,
    });
    const ele = this.chartRef.current;
    eleResize.on(ele, () => {
      myChart.resize();
    });
  };

  render() {
    const { width, height } = this.props;
    return (
      <div style={{ width: width || '100%', height: height || '400px' }} ref={this.chartRef} />
    );
  }
}
