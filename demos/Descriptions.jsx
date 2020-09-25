import React from 'react';
import { Descriptions } from 'qbmi';

const dataList = [
  { label: '承运商', value: 'carrierName' },
  { label: '提货方式', value: 'pickUpTypeStr' },
  { label: '费用承担方', value: 'payerStr' },
  { label: '车号', value: 'vehicleNumber' },
  { label: '联系人', value: 'contact' },
  { label: '联系电话', value: 'contactNumber' },
];

export default () => <Descriptions title="这是标题" list={dataList} col={3} />;
