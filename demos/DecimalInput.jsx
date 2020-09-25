import React, { Component } from 'react';
import { Form } from 'antd';
import { DecimalInput } from 'qbmi';

const { InputNumber, DecimalPrice, DecimalText } = DecimalInput;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

const Demo = props => {
  return (
    <Form {...formItemLayout}>
      <Form.Item
        label="InputNumber"
        name="planOutputOther"
        rules={[{ required: true, message: '请输入' }]}
      >
        <InputNumber style={{ width: 300 }} placeholder="默认" />
      </Form.Item>
      <Form.Item
        label="InputNumber"
        name="planOutput"
        rules={[{ required: true, message: '请输入' }]}
      >
        <InputNumber
          suffix="suffix"
          style={{ width: 300 }}
          placeholder="带有单位，不设置小数位数"
        />
      </Form.Item>
      <Form.Item
        label="InputNumber"
        name="planOutputs"
        rules={[{ required: true, message: '请输入' }]}
      >
        <InputNumber
          suffix="suffix"
          style={{ width: 300 }}
          decimal={6}
          placeholder="带有单位，设置小数位数"
        />
      </Form.Item>
      <Form.Item label="DecimalPrice" name="amount" rules={[{ required: true, message: '请输入' }]}>
        <DecimalPrice style={{ width: 300 }} placeholder="用于金额，最大限制999999" />
      </Form.Item>
      <Form.Item label="金额显示">
        <DecimalText value={5632.9} />
        （默认）
      </Form.Item>
      <Form.Item label="金额显示">
        <DecimalText value={5632.9} special />
        （特殊标红样式）
      </Form.Item>
      <Form.Item label="金额显示">
        <DecimalText value={5632.9} decimal={5} />
        （保留小数位数）
      </Form.Item>
    </Form>
  );
};

export default Demo;
