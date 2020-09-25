import React, { Component } from 'react';
import eleResize from '../../utils/resize';
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入折线图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
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
    const { data: dataSource, options } = this.props;
    const { option, seriesOption } = options;
    const { legend } = option;

    const data = {
      xData: dataSource.xData || ['北京', '杭州', '上海', '成都'],
      yData: dataSource.yData || [
        {
          name: '销售量',
          type: 'line',
          data: [100, 230, 120, 180],
        },
        {
          name: '用户数',
          type: 'bar',
          data: [120, 150, 220, 280],
        },
      ],
    };
    const myChart = echarts.init(this.chartRef.current);
    myChart.clear();

    const yData = data.yData.map((item, idx) => {
      const yAxisData = { ...item };
      const { name } = yAxisData;
      let { data: dataArr } = yAxisData;

      if (dataArr.some(value => value > 10000)) {
        yAxisData.name = `${name} (万)`;
        dataArr = dataArr.map(val => val / 10000);
      }

      if (legend) {
        legend.data[idx].name = yAxisData.name;
        // legend.data[idx].name = name + name;
      }

      return {
        ...yAxisData,
        data: dataArr,
        ...seriesOption[idx],
      };
    });

    if (yData[1]) {
      yData[1].yAxisIndex = 1;
    }

    const yAxis = {
      min: 0,
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
    };

    // 绘制图表
    myChart.setOption({
      ...option,
      legend,
      xAxis: [
        {
          type: 'category',
          axisTick: {
            show: false,
          },
          data: data.xData || [],
        },
      ],

      yAxis: [
        {
          type: 'value',
          // name: (() => {
          //   if (yData[0]) {
          //     return `${yData[0].name} ${yData[0].smart ? '(万)' : ''}`;
          //   }
          //   return '';
          // })(),
          nameTextStyle: {
            // align: 'left',
          },
          min: 0,
          ...yAxis,
          axisLabel: {},
        },
        {
          type: 'value',
          // name: (() => {
          //   if (yData[1]) {
          //     return `${yData[1].name} ${yData[1].smart ? '(万)' : ''}`;
          //   }
          //   return '';
          // })(),
          min: 0,
          position: 'right',
          ...yAxis,
          axisLabel: {
            show: true,
            // formatter: '{value} %', // 右侧Y轴文字显示
          },
        },
      ],

      series: yData,
    });
    const ele = this.chartRef.current;
    eleResize.on(ele, () => {
      myChart.resize();
    });
  };

  render() {
    const {
      options: { height },
    } = this.props;
    const style = {
      height: height || 400,
    };
    return <div style={style} ref={this.chartRef} />;
  }
}
