import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Charts } from 'qbmi';

const { ChartCard, Bar, Pie, TotalText } = Charts;

const View = () => {
  // 产量趋势
  const [productData, setProductData] = useState({
    statistics: [
      {
        name: '主产品总产量',
        value: 107.4,
      },
      {
        name: '副产品总产量',
        value: 0.0,
      },
    ],
    xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
    yData: [
      {
        name: '主产品产量',
        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 107.4],
      },
      {
        name: '副产品产量',
        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      },
    ],
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pieData, setPieData] = useState([
    {
      name: '',
      value: 30,
    },
    {
      name: '已回收',
      value: 87.3,
    },
  ]);

  const onTabChange = () => {
    console.log('change');
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={24}>
          <ChartCard
            onChange={onTabChange}
            options={{
              headerOptions: {
                title: '产量趋势',
                radios: {
                  key: 'timeType',
                  options: [
                    { name: '本年', value: 3 },
                    { name: '本月', value: 2 },
                    { name: '本日', value: 1 },
                  ],
                },
                defaultValue: {
                  timeType: 2,
                },
              },
              layout: {
                showDivider: '500px',
                items: [
                  {
                    key: 1,
                    span: 16,
                    items: [
                      {
                        key: 3,
                        component: TotalText,
                        data: productData.statistics || [],
                        options: {
                          color: ['#6595F9', '#62DAAB'],
                          afterUnit: '吨',
                        },
                      },
                      {
                        key: 4,
                        component: Bar,
                        data: {
                          xData: productData.xData || [],
                          yData: productData.yData || [],
                        },
                        options: {
                          option: {
                            grid: {
                              top: 32,
                              left: 16,
                              right: 32,
                              bottom: 0,
                              containLabel: true,
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
                            color: ['#6595F9', '#62DAAB'],
                            tooltip: {
                              trigger: 'axis',
                              axisPointer: {
                                // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                              },
                            },
                          },
                          seriseOption: {
                            barGap: 0,
                            barMaxWidth: '30px',
                          },
                          height: 400,
                        },
                      },
                    ],
                  },
                  {
                    key: 2,
                    span: 8,
                    component: Pie,
                    data: pieData,
                    options: {
                      option: {
                        title: {
                          text: '回收率',
                          top: '20px',
                          left: '20px',
                        },
                        color: ['#6595F9', '#FDBF2F'],
                      },
                      seriseOption: {
                        label: {
                          show: false,
                        },
                        labelLine: {
                          show: false,
                        },
                      },
                      height: 400,
                    },
                  },
                ],
              },
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default View;
