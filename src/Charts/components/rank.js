import React, { Component } from 'react';
import { Empty } from 'antd';

// 引入 排行榜组件 主模块
import ScrollRankingBoard from '@jiaminghi/data-view-react/es/scrollRankingBoard';

import emptyImage from '../../assets/empty.png';

import './rank.less';

export default class Chart extends Component {
  static getDerivedStateFromProps(nextProps) {
    const {
      data,
      options: { prefix },
    } = nextProps;
    if (data) {
      return {
        data: prefix ? data.map(item => ({ ...item, name: `${prefix} ${item.name}` })) : data,
      };
    }
    return null;
  }

  state = {
    data: [],
  };

  render() {
    const { options: { style, title, prefix } = {} } = this.props;
    const { data } = this.state;
    const domStyles = {
      width: '100%',
      height: '300px',
      color: '#000',
      ...style,
    };
    if (title) {
      domStyles.height = domStyles.height.replace(/\d+/g, t => {
        return t - 0 - 24;
      });
    }

    const config = {
      data,
      sort: false,
    };
    return (
      <>
        {title ? <h5 className="echart-pane-title">{title}</h5> : null}
        {data.length ? (
          <ScrollRankingBoard
            config={config}
            style={domStyles}
            className={`${prefix ? 'textPrice' : ''}`}
          />
        ) : (
          <Empty
            image={emptyImage}
            description={<span className="text-subsidiary">暂无数据</span>}
          />
        )}
      </>
    );
  }
}
