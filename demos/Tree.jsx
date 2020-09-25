import React, { useState } from 'react';

import { Tree, utils } from 'qbmi';

const { TreeUtil } = utils;
const { dataTransformToTree } = TreeUtil;

const Demo = props => {
  const [maskVisible, setVisible] = useState(false);
  const [params, setParams] = useState({
    parentId: '',
    typeName: '',
    labels: '',
    id: '',
  });

  const depTreeData = [
    {
      id: '38f63253-60fc-4c12-8070-c4d10b1caa6b',
      parentId: null,
      typeName: '肉类',
      labels: '',
      isSystem: false,
      category: 1,
      disabled: false,
      children: [
        {
          id: '6abbe51e-6523-434f-b46e-506ce38b1089',
          parentId: '38f63253-60fc-4c12-8070-c4d10b1caa6b',
          typeName: '肉类冷冻类',
          labels: '',
          isSystem: false,
          category: 1,
          disabled: false,
          children: null,
        },
      ],
    },
    {
      id: '50cbb1df-96c7-4dcb-9280-caf300a45c39',
      parentId: null,
      typeName: '111',
      labels: '',
      isSystem: false,
      category: 1,
      disabled: true,
      children: null,
    },
    {
      id: '13ddc593-6ab3-400b-9818-29993381060d',
      parentId: null,
      typeName: '1',
      labels: '1',
      isSystem: false,
      category: 1,
      disabled: true,
      children: null,
    },
    {
      id: '50558d82-cf27-45d3-98ae-86c89037a560',
      parentId: null,
      typeName: '112',
      labels: '11',
      isSystem: false,
      category: 1,
      disabled: true,
      children: null,
    },
    {
      id: '8aecdb8c-c47b-47d2-a490-bbaaef427861',
      parentId: null,
      typeName: '自产类1',
      labels: '自产类1',
      isSystem: false,
      category: 1,
      disabled: true,
      children: null,
    },
    {
      id: '42b70ac3-f991-4f74-99d5-a0647e1c1df4',
      parentId: null,
      typeName: '自研发',
      labels: '自研发',
      isSystem: false,
      category: 1,
      disabled: false,
      children: [
        {
          id: 'c81813ed-a531-4ec4-a23d-b385b80d21fe',
          parentId: '42b70ac3-f991-4f74-99d5-a0647e1c1df4',
          typeName: '火星成品3',
          labels: '',
          isSystem: false,
          category: 1,
          disabled: false,
          children: [
            {
              id: '451a9bdf-6434-4bae-8154-3153bf603ffc',
              parentId: 'c81813ed-a531-4ec4-a23d-b385b80d21fe',
              typeName: '123123',
              labels: '',
              isSystem: false,
              category: 1,
              disabled: false,
              children: null,
            },
          ],
        },
      ],
    },
    {
      id: '7195c0c6-d734-433e-821a-3dfd62fcda19',
      parentId: null,
      typeName: '自产类',
      labels: '1111',
      isSystem: false,
      category: 1,
      disabled: false,
      children: [
        {
          id: '8c50d465-9143-4690-9d4f-1010239e6d9d',
          parentId: '7195c0c6-d734-433e-821a-3dfd62fcda19',
          typeName: '自产类1',
          labels: '自产类1',
          isSystem: false,
          category: 1,
          disabled: false,
          children: null,
        },
      ],
    },
    {
      id: '84db5bd4-9a90-42cb-bdf6-3693faafa81e',
      parentId: null,
      typeName: '半成品',
      labels: '1',
      isSystem: false,
      category: 1,
      disabled: false,
      children: null,
    },
    {
      id: '0729c0e9-3c9a-4bc1-8cfe-b4490d92cd46',
      parentId: null,
      typeName: '半成品',
      labels: '半成品',
      isSystem: false,
      category: 1,
      disabled: true,
      children: [
        {
          id: 'b5bbbe9b-740a-44cb-891a-6be843d0ab7d',
          parentId: '0729c0e9-3c9a-4bc1-8cfe-b4490d92cd46',
          typeName: '半成品1号',
          labels: null,
          isSystem: false,
          category: 1,
          disabled: false,
          children: null,
        },
      ],
    },
    {
      id: '305332ee-47d5-41f4-b44f-ec02c507c78d',
      parentId: null,
      typeName: '半成品',
      labels: null,
      isSystem: false,
      category: 1,
      disabled: true,
      children: null,
    },
    {
      id: '2e75b7bc-47e1-42b0-bd8a-8a9eb45c104c',
      parentId: null,
      typeName: '原料',
      labels: null,
      isSystem: true,
      category: 2,
      disabled: false,
      children: [
        {
          id: '8b603ad5-14c1-4e00-b077-f53124ce38be',
          parentId: '2e75b7bc-47e1-42b0-bd8a-8a9eb45c104c',
          typeName: '辅料',
          labels: null,
          isSystem: true,
          category: 4,
          disabled: false,
          children: [
            {
              id: '741ccbe9-51fe-4f65-acd6-d1817a311607',
              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',
              typeName: '测试辅料',
              labels: '1123',
              isSystem: false,
              category: 4,
              disabled: false,
              children: null,
            },
            {
              id: 'c80f3fe3-2486-4479-884a-a2d7dc1c9abf',
              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',
              typeName: '辅料5号',
              labels: null,
              isSystem: false,
              category: 4,
              disabled: false,
              children: null,
            },
            {
              id: '36f6ebd6-dda8-45fc-9264-eeafb3f05451',
              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',
              typeName: '火星辅料3',
              labels: null,
              isSystem: false,
              category: 4,
              disabled: false,
              children: null,
            },
            {
              id: 'f550dac1-b0d6-43eb-a223-f297532087db',
              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',
              typeName: '火星辅料2',
              labels: null,
              isSystem: false,
              category: 4,
              disabled: false,
              children: null,
            },
            {
              id: 'c26ee37f-842b-43f2-81e1-a87d41e2969c',
              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',
              typeName: '火星辅料1',
              labels: null,
              isSystem: false,
              category: 4,
              disabled: false,
              children: null,
            },
            {
              id: '3423bb25-6ebf-4622-8441-009cf59c9c14',
              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',
              typeName: '辅料4号',
              labels: null,
              isSystem: false,
              category: 4,
              disabled: false,
              children: null,
            },
            {
              id: 'e27ef065-bdcf-4920-abcc-ee706b3bdbcd',
              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',
              typeName: '辅料3号',
              labels: null,
              isSystem: false,
              category: 4,
              disabled: false,
              children: null,
            },
            {
              id: '75994a2e-86f1-45f6-b155-9ac4984fac9a',
              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',
              typeName: '辅料2号',
              labels: null,
              isSystem: false,
              category: 4,
              disabled: false,
              children: null,
            },
            {
              id: '125d6ab6-4cd3-4c0e-acb4-4a74b0f827ef',
              parentId: '8b603ad5-14c1-4e00-b077-f53124ce38be',
              typeName: '辅料1号',
              labels: null,
              isSystem: false,
              category: 4,
              disabled: false,
              children: null,
            },
          ],
        },
        {
          id: '556aab22-0340-4973-960d-2e50ef3f4b89',
          parentId: '2e75b7bc-47e1-42b0-bd8a-8a9eb45c104c',
          typeName: '主料',
          labels: null,
          isSystem: true,
          category: 3,
          disabled: false,
          children: [
            {
              id: '51aa533f-8e52-46a5-b8f2-7ffce4620d4c',
              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',
              typeName: '火星主料4',
              labels: '',
              isSystem: false,
              category: 3,
              disabled: false,
              children: null,
            },
            {
              id: '631a7d41-8e9d-4586-832f-2fe694237147',
              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',
              typeName: '火星主料3',
              labels: null,
              isSystem: false,
              category: 3,
              disabled: false,
              children: null,
            },
            {
              id: '974486ed-083c-4d5d-b02e-4d1d46312af9',
              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',
              typeName: '火星主料2',
              labels: null,
              isSystem: false,
              category: 3,
              disabled: false,
              children: null,
            },
            {
              id: '41e70b04-11d3-4a50-970b-0b84378e3515',
              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',
              typeName: '火星主料1',
              labels: null,
              isSystem: false,
              category: 3,
              disabled: false,
              children: null,
            },
            {
              id: '0cb721d8-f187-4f67-bf60-46027d72cee5',
              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',
              typeName: '主料4号',
              labels: null,
              isSystem: false,
              category: 3,
              disabled: false,
              children: null,
            },
            {
              id: '0e83a8a7-9e89-427d-8930-d064423b3b47',
              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',
              typeName: '主料3号',
              labels: null,
              isSystem: false,
              category: 3,
              disabled: false,
              children: null,
            },
            {
              id: '3f8914e6-69df-4737-8255-ccb44f21df87',
              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',
              typeName: '主料2号',
              labels: null,
              isSystem: false,
              category: 3,
              disabled: false,
              children: null,
            },
            {
              id: '383e4495-b141-4395-81ea-86e81b6e4a18',
              parentId: '556aab22-0340-4973-960d-2e50ef3f4b89',
              typeName: '主料1号',
              labels: null,
              isSystem: false,
              category: 3,
              disabled: false,
              children: null,
            },
          ],
        },
      ],
    },
  ];

  const paramsData = {
    originData: depTreeData,
    hasAll: false,
    title: 'typeName',
    value: 'id',
  };

  const datas = dataTransformToTree(paramsData);

  // 重写类型树（添加全部）
  const treeReWrite = [
    {
      id: '',
      title: '全部',
      level: 0,
      mark: false,
      key: '0',
      value: '0',
      children: datas,
    },
  ];

  // 树编辑事件
  const onEdit = obj => {
    const voidparams = {
      parentId: obj.origin.parentId,
      typeName: obj.origin.typeName,
      labels: obj.origin.labels,
      id: obj.origin.id,
    };
    setParams(voidparams);
    setVisible(true);
  };

  // 树选中事件
  const onSelect = obj => {
    const value = obj[0] && obj[0] === 0 ? '' : obj[0];
    // typeChange(value);
  };

  // 点击 树的 添加按钮
  const onTreeAdd = obj => {
    const voidparams = {
      parentId: obj.value,
      typeName: '',
      labels: '',
      id: '',
    };
    setParams(voidparams);
    setVisible(true);
  };

  // 点击 树的 删除按钮
  const onDelete = obj => {
    const postData = {
      id: obj.origin.id,
    };
  };

  const treeProps = {
    treeData: datas,
    onSelect,
    onAdd: onTreeAdd,
    onDelete,
    onEdit,
    addText: '新建',
    editText: '编辑',
    deleteText: '删除',
    expandedKeys: ['0'],
    selectedKeys: ['0'],
    noEditAndDelete: 'isSystem',
  };

  return (
    <div style={{ width: 400 }}>
      <Tree
        treeData={[
          {
            id: '',
            title: '全部',
            level: 0,
            mark: false,
            key: '0',
            value: '0',
            children: datas,
          },
        ]}
        editText
        addText
      />
    </div>
  );
};

export default Demo;
