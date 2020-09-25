import React from 'react';

import { StatusText } from 'qbmi';

const Demo = () => {
  const planStatus = [
    // 状态(1-已申请，2-被撤回，3-未开始，4-进行中，5-暂停中， 6-已完成，7-已终止，8-已退回)
    { value: 1, label: '已申请', status: 'processing' },
    { value: 2, label: '被撤回', status: 'warning' },
    { value: 3, label: '已创建', status: 'muted' },
    { value: 4, label: '进行中', status: 'processing' },
    { value: 5, label: '暂停中', status: 'processing' },
    { value: 6, label: '已完成', status: 'success' },
    { value: 7, label: '已终止', status: 'error' },
    { value: 8, label: '已退回', status: 'warning' },
  ];

  return (
    planStatus &&
    planStatus.map(item => <StatusText mode="tag" type={item.status} label={item.label} />)
  );
};

export default Demo;
