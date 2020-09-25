import React, { Component } from 'react';
import { Input } from 'antd';
import _ from 'lodash';
import { DecimalInput, EditTable } from 'qbmi';

const { InputNumber } = DecimalInput;

class MaterialTableAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      materialList: [],
    };
  }

  dataSourceChange = ({ list }) => {
    this.setState({
      materialList: list,
    });
  };

  render() {
    const { materialList } = this.state;
    // 列表数据
    const columns = [
      {
        title: '数量',
        dataIndex: 'purchaseNumber',
        editable: true,
        rules: [{ required: true, message: '请输入' }],
        width: 255,
        render: (txt, record) => (
          <InputNumber
            placeholder="请输入数量"
            disabled={Boolean(record.id)}
            suffix={record.unitName}
            style={{ width: '80%' }}
          />
        ),
      },
      {
        title: '单价',
        dataIndex: 'price',
        editable: true,
        rules: [{ required: true, message: '请输入' }],
        width: 255,
        render: () => <InputNumber placeholder="请输入单价" precision={2} min={0.1} suffix="元" />,
      },
      {
        title: '备注',
        dataIndex: 'description',
        editable: true,
        width: 200,
        render: (text, record) => (
          <Input allowClear maxLength={100} placeholder="请输入备注" disabled={record.id} />
        ),
      },
    ];

    return (
      <EditTable
        ref={e => (this.editTable = e)}
        rowKey={() => Math.random().toFixed(20)}
        hasDelete
        columns={columns}
        dataSource={materialList}
        dataSourceChange={this.dataSourceChange}
        pagination={false}
      />
    );
  }
}

export default MaterialTableAdd;
