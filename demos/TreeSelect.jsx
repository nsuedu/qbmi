import React from 'react';

import { TreeSelect } from 'qbmi';

const getTreeForm = () =>
  new Promise(resolve => {
    const data = [
      {
        parentId: null,
        id: '6e132030-eafa-4933-9460-561de0ff4cad',
        stationName: '布艺',
        description: null,
        level: 0,
        status: 1,
        disabled: false,
        children: [
          {
            parentId: '6e132030-eafa-4933-9460-561de0ff4cad',
            id: '2748040f-14f9-4036-8236-4f5d20b51467',
            stationName: 'A区',
            description: null,
            level: 1,
            status: 1,
            disabled: false,
            children: [
              {
                parentId: '2748040f-14f9-4036-8236-4f5d20b51467',
                id: '64375d76-9134-4a78-857a-078c82caf505',
                stationName: 'A区2号',
                description: null,
                level: 2,
                status: 1,
                disabled: false,
                children: [],
              },
              {
                parentId: '2748040f-14f9-4036-8236-4f5d20b51467',
                id: '4c7b44b8-3a8a-4c37-b154-d2047967ba60',
                stationName: 'A区3号',
                description: null,
                level: 2,
                status: 1,
                disabled: false,
                children: [],
              },
            ],
          },
        ],
      },
    ];
    resolve({ data });
  });

const Demo = () => (
  <TreeSelect
    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
    treeDefaultExpandAll
    dataServer={getTreeForm}
    transformOptions={{
      hasAll: false,
      title: 'stationName',
      value: 'id',
      onlyLastleafNoDisabled: true,
    }}
    placeholder="请选择工位"
    style={{ width: 300 }}
  />
);

export default Demo;
