import React from 'react';

import { TableOperation } from 'qbmi';

const data = [
  <a onClick={() => {}}> 编辑 </a>,
  <a onClick={() => {}}> 复制 </a>,
  <a onClick={() => {}}> 启用 </a>,
];

const Demo = () => <TableOperation operations={data} />;

export default Demo;
