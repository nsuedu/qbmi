import React from 'react';

import { Select } from 'qbmi';

// 模拟请求获取数据

const listServer = props =>
  new Promise(resolve => {
    const data = [
      {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: 'string1',
        disable: false,
      },
      {
        id: '3fa85234-5717-4562-b3fc-2c963f66afa6',
        name: 'string2',
        disable: false,
      },
      {
        id: '3fa85f64-34717-4562-b3fc-2c963f66afa6',
        name: 'string3',
        disable: false,
      },
      {
        id: '3fa85f64-5717-4662-b3fc-2c963f66afa6',
        name: 'string4',
        disable: false,
      },
      {
        id: '3fa85f64-5717-45562-b3fc-2c963f66afa6',
        name: 'string5',
        disable: false,
      },
    ];
    resolve({ data });
  });

const Demo = props => {
  return (
    <Select
      listServer={listServer}
      // requestParams={}
      // hasAllText
      // customLabel
      labelValue={{ value: 'id', label: 'name' }}
      hasNoneText
    />
  );
};

export default Demo;
