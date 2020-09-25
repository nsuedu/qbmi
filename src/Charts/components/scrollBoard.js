import React, { Component } from 'react';

// 引入 排行榜组件 主模块
import ScrollBoard from '@jiaminghi/data-view-react/es/scrollBoard';
import './scrollBoard.less';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        index: true,
        oddRowBGC: '#fff',
        evenRowBGC: '#f0f0f0',
        columnWidth: [50],
        align: ['center'],
        data: [
          ['敬请期待'],
          ['敬请期待'],
          ['敬请期待'],
          ['敬请期待'],
          ['敬请期待'],
          ['敬请期待'],
          ['敬请期待'],
          ['敬请期待'],
          ['敬请期待'],
          ['敬请期待'],
        ],
      },
    };
  }

  render() {
    const { options: { style } = {} } = this.props;
    const { config } = this.state;
    const styles = { width: '100%', height: '300px', color: '#000', ...style };
    return <ScrollBoard config={config} style={styles} />;
  }
}
