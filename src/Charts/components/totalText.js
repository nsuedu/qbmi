/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { Row, Col, Popover } from 'antd';
import { isNumber } from 'lodash';

import NumTransform from '../../utils/numberTransform';

import './totalText.less';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = data => {
    const { options } = this.props;
    const { color } = options;

    return data.map((item, index) => {
      if (options.col) {
        const span = 24 / options.col;
        return (
          <Col
            span={span}
            key={item.name}
            style={{ borderLeft: `5px solid ${color[index]}` }}
            className="item"
          >
            <div className="title">{item.name}</div>
            <div style={{ color: color[index] }} className="text">
              {item.value !== null && item.value !== undefined && isNumber(item.value) ? (
                <Popover
                  content={`${(options && options.preUnit) || ''}${item.value}${(options &&
                    options.afterUnit) ||
                    ''}`}
                >{`${(options && options.preUnit) || ''}${NumTransform(item.value, 2)}${(options &&
                  options.afterUnit) ||
                  ''}`}</Popover>
              ) : (
                '敬请期待'
              )}
            </div>
          </Col>
        );
      }
      return (
        <div key={item.name} style={{ borderLeft: `5px solid ${color[index]}` }} className="item">
          <div className="title">{item.name}</div>
          <div style={{ color: color[index] }} className="text">
            {item.value !== null && item.value !== undefined && isNumber(item.value) ? (
              <Popover
                content={`${(options && options.preUnit) || ''}  ${item.value}  ${(options &&
                  options.afterUnit) ||
                  ''}`}
              >{`${(options && options.preUnit) || ''}  ${NumTransform(
                item.value,
                2,
              )}  ${(options && options.afterUnit) || ''}`}</Popover>
            ) : (
              '敬请期待'
            )}
          </div>
        </div>
      );
    });
  };

  render() {
    const { data = [], options } = this.props;

    return (
      <div className="total">
        {options && options.title && <div className="title">{options.title}</div>}
        {options.col && <Row className="rowItems">{this.renderItem(data)}</Row>}
        {!options.col && <div className="items">{this.renderItem(data)}</div>}
      </div>
    );
  }
}
