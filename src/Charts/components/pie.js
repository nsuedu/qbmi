import React, { Component } from 'react';
import eleResize from '../../utils/resize';
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/pie');
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
    const { data = [], options } = this.props;
    const { option = {}, seriseOption } = options;
    const { radius, showTotal } = seriseOption;
    const { title } = option;
    const myChart = echarts.init(this.chartRef.current);
    myChart.clear();
    const totaltitle = '总';
    let total = 0;
    data.forEach(item => {
      total += item.value;
    });
    // 绘制图表
    myChart.setOption({
      ...option,
      title: showTotal
        ? {
            text: `{name|${totaltitle}}\n{val|${parseFloat(total).toFixed(2)}}`,
            top: 'center',
            left: 'center',
            textStyle: {
              rich: {
                name: {
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#727272',
                  padding: [10, 0],
                },
                val: {
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#727272',
                },
              },
            },
          }
        : title || '',
      series: [
        {
          ...seriseOption,
          type: 'pie',
          radius: radius || '60%',
          data,
        },
      ],
    });
    const ele = this.chartRef.current;
    eleResize.on(ele, () => {
      myChart.resize();
    });
  };

  render() {
    const { options } = this.props;
    const { width, height } = options;
    return <div style={{ width, height }} ref={this.chartRef} />;
  }
}
