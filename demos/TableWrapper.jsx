import React, { useState } from 'react';
import { stringify } from 'qs';
import { TableWrapper, StatusText } from 'qbmi';

const orderStatus = [
  {
    value: 0,
    label: '全部',
  },
  {
    value: 1,
    label: '进行中',
    serviceText: '已创建',
    status: 'processing',
  },

  {
    value: 2,
    label: '进行中',
    serviceText: '通知收货',
    status: 'processing',
  },
  {
    value: 3,
    label: '进行中',
    serviceText: '已收货',
    status: 'processing',
  },
  {
    value: 4,
    label: '已完成',
    serviceText: '已完成',
    status: 'success',
  },
  {
    value: 5,
    label: '已终止',
    serviceText: '已终止',
    status: 'error',
  },
];

const formOptions = [
  {
    type: 'input',
    name: 'OrderNumber',
    label: '采购订单号',
    placeholder: '请输入',
    formSpan: {
      span: 8,
    },
  },
  {
    type: 'select',
    name: 'Status',
    label: '状态',
    placeholder: '请选择',
    options: orderStatus.filter(item => ![2, 3].includes(item.value)),
  },
  {
    type: 'rangePicker',
    name: 'createTime',
    label: '创建日期',
  },
  {
    type: 'input',
    name: 'description',
    label: '订单备注',
  },
];

const columns = [
  {
    title: '采购订单号',
    dataIndex: 'orderNumber',
    width: '200px',
  },
  {
    title: '供应商',
    dataIndex: 'supplierName',
    width: '140px',
  },
  {
    title: '采购员',
    dataIndex: 'buyer',
    width: 120,
  },
  {
    title: '异常情况',
    dataIndex: 'abnormal',
    width: 150,
    render: text => {
      // eslint-disable-next-line no-useless-escape
      const txt = (text || '').replace(/^\,|\,$/, '');
      return txt;
    },
  },
  {
    title: '订单状态',
    dataIndex: 'status',
    width: 120,
    render: (text = -1) => {
      const item = orderStatus.find(items => items.value === text) || orderStatus[0];
      return <StatusText type={item.status} label={item.label} />;
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: '140px',
  },
  {
    title: '订单备注',
    dataIndex: 'description',
    width: 280,
  },
];

const Index = () => {
  const [loading, setLoading] = useState(false);
  const getServer = params => {
    setLoading(true);
    return fetch(
      `https://mock.yonyoucloud.com/mock/15420/qbmi/components/doc/wrapperTable?${stringify(
        params,
      )}`,
      {
        method: 'get',
      },
    ).then(response => {
      setTimeout(setLoading, 500, false);
      return response.json();
    });
  };

  return (
    <TableWrapper
      formOptions={formOptions}
      tableProps={{
        columns,
        loading,
        tableLayout: 'fixed',
        rowKey: 'orderId',
      }}
      listService={getServer}
    />
  );
};

export default Index;
