import React, { Component } from 'react';
import { Card, Radio, DatePicker, Row, Col, Button } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isArray } from 'lodash';
import moment from 'moment';
import './chartCard.less';

const { RangePicker } = DatePicker;

function timeFormat(date) {
  if (!date || typeof date === 'string') {
    this.error('参数异常，请检查...');
  }
  const y = date.getFullYear(); // 年
  const m = date.getMonth() + 1; // 月
  const d = date.getDate(); // 日

  return `${y}-${m}-${d}`;
}

// 获取当月第一天
function getFirstDayOfMonth(date) {
  date.setDate(1);
  return timeFormat(date);
}
// 获取当年第一天
function getFirstDayOfYear(date) {
  date.setDate(1);
  date.setMonth(0);
  return timeFormat(date);
}

export default class ChartCard extends Component {
  constructor(props) {
    super(props);
    const { defaultValue } = props.options.headerOptions;
    this.state = {
      ...defaultValue,
      refeshDate: new Date().getTime(),
    };
  }

  renderLayout = () => {
    const { layout } = this.props.options;
    const items = layout.items.map((item, index) => {
      if (item.items && item.items.length > 0) {
        const subItems = item.items.map((subItem, subIndex) => {
          const Comp = subItem.component;

          const borderStyle =
            subIndex > 0 && item.showDivider
              ? { borderLeft: '1px solid #d8d8d8', paddingLeft: 120 }
              : {};
          return (
            <Col
              key={subItem.key}
              span={subItem.span || 24}
              offset={subItem.offset || 0}
              style={borderStyle}
            >
              <Comp
                key={subItem.key}
                colors={subItem.colors}
                preUnit={subItem.preUnit}
                afterUnit={subItem.afterUnit}
                data={subItem.data}
                options={subItem.options}
              />
            </Col>
          );
        });
        return (
          <Col span={item.span || 24} key={item.key} className={item.className}>
            <Row gutter={32} key={item.key}>
              {subItems}
            </Row>
          </Col>
        );
      }
      const Comp = item.component;
      const borderStyle =
        layout.showDivider && index > 0 ? { borderLeft: '1px solid gray', paddingLeft: 120 } : {};
      return (
        <Col key={item.key} span={item.span || 24} className={item.className} style={borderStyle}>
          <Comp key={item.key} colors={item.colors} data={item.data} options={item.options} />
        </Col>
      );
    });
    return <Row gutter={32}>{items}</Row>;
  };

  onChange = () => {
    this.props.onChange(this.state);
  };

  radioChange = (key, e) => {
    this.setState(
      {
        [key]: e.target.value,
      },
      () => {
        this.onChange();
      },
    );
  };

  timeChange = (key, val, format) => {
    this.setState(
      {
        [key]: [moment(val[0]).format(format), moment(val[1]).format(format)],
      },
      () => {
        this.onChange();
      },
    );
  };

  onTabChange = (key, val) => {
    this.setState(
      {
        [key]: val,
      },
      () => {
        this.onChange();
      },
    );
  };

  toMonth = (key, format) => {
    this.setState(
      {
        [key]: [getFirstDayOfMonth(new Date()), moment(new Date()).format(format)],
        refeshDate: new Date().getTime(),
      },
      () => {
        this.onChange();
      },
    );
  };

  toYear = (key, format) => {
    this.setState(
      {
        [key]: [getFirstDayOfYear(new Date()), moment(new Date()).format(format)],
        refeshDate: new Date().getTime(),
      },
      () => {
        this.onChange();
      },
    );
  };

  renderRadios = list => {
    return list.map((item, idx) => {
      return (
        <Radio.Group
          buttonStyle="solid"
          // eslint-disable-next-line react/no-array-index-key
          key={item.key + idx}
          value={this.state[item.key]}
          onChange={val => {
            this.radioChange(item.key, val);
          }}
          style={{ marginLeft: '10px' }}
        >
          {item.options.map(optionItem => {
            return (
              <Radio.Button key={optionItem.name} value={optionItem.value}>
                {optionItem.name}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      );
    });
  };

  render() {
    const { options } = this.props;
    const { title, radios, timeRange, tabList } = options.headerOptions;
    const cardOptions = {};
    const extra = (
      <span>
        {radios && !isArray(radios) && radios.options && (
          <Radio.Group
            buttonStyle="solid"
            value={this.state[radios.key]}
            onChange={val => {
              this.radioChange(radios.key, val);
            }}
          >
            {radios.options.map(item => {
              return (
                <Radio.Button key={item.name} value={item.value}>
                  {item.name}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        )}
        {radios && isArray(radios) && radios.length > 0 && this.renderRadios(radios)}
        {timeRange && (
          <RangePicker
            allowClear={false}
            key={this.state.refeshDate}
            onChange={val => {
              this.timeChange(timeRange.key, val, timeRange.format);
            }}
            style={{ marginLeft: '10px' }}
            value={[moment(this.state[timeRange.key][0]), moment(this.state[timeRange.key][1])]}
            format={timeRange.format}
            renderExtraFooter={() => {
              if (timeRange.showFooter) {
                return (
                  <div className="custDateFooter">
                    <Button
                      onClick={() => {
                        this.toYear(timeRange.key, timeRange.format);
                      }}
                    >
                      本年
                    </Button>
                    <Button
                      style={{ marginLeft: '20px' }}
                      onClick={() => {
                        this.toMonth(timeRange.key, timeRange.format);
                      }}
                    >
                      本月
                    </Button>
                  </div>
                );
              }
              return null;
            }}
          />
        )}
      </span>
    );
    if (title) {
      cardOptions.title = title;
    }
    if (tabList) {
      cardOptions.tabList = tabList.list;
      cardOptions.tabBarExtraContent = extra;
    } else {
      cardOptions.extra = extra;
    }
    return (
      <div className="echart-card-pane">
        <Card
          onTabChange={key => {
            this.onTabChange(tabList.key, key);
          }}
          {...cardOptions}
        >
          {this.renderLayout()}
        </Card>
      </div>
    );
  }
}
