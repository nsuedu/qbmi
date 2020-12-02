interface ITree {
  key?: string;
  value?: string;
  title?: string;
  label?: string;
  children?: ITree[];
  parentId?: string | null;
  disabled?: boolean;

  origin?: any;
  isChecked?: boolean;

  number?: string | number;
}

// 数组扁平化  树形数组转化为一维数组
export const generateList = (data: ITree[], dataList: ITree[]) => {
  data.forEach(item => {
    dataList.push(item);
    if (item.children) {
      generateList(item.children, dataList);
    }
  });
  return dataList;
};

// 一维数组转化为 树形数据， 前提:存在parentId , 根节点parentId===0
export const arrayToTree = (datas: ITree[]) => {
  const root = datas.filter(
    item => !item.parentId || `${item.parentId}` === '0',
  );
  if (root.length) {
    const obj = { ...root[0] };

    const secondData = datas.filter(
      item => `${item.parentId}` === root[0].value,
    );
    if (secondData.length) {
      obj.children = secondData.map(secondItem => {
        const newsecondItem = { ...secondItem };

        const thirdData = datas.filter(
          item => `${item.parentId}` === secondItem.value,
        );
        if (thirdData.length) {
          newsecondItem.children = thirdData.map(thirdItem => {
            const newthirdItem = { ...thirdItem };
            const fourData = datas.filter(
              item => `${item.parentId}` === thirdItem.value,
            );
            if (fourData.length) {
              newthirdItem.children = fourData;
            }
            return newthirdItem;
          });
        }
        return newsecondItem;
      });
    }
    return obj;
  }
  return {};
};

export const getLastChildren = (treeData: ITree[], result: ITree[]) => {
  treeData.forEach(item => {
    if (!(Array.isArray(item.children) && item.children.length > 0)) {
      result.push({ value: item.key, label: item.title });
    } else {
      getLastChildren(item.children, result);
    }
  });
  return result;
};

interface IGetDataByKeyFromTreeData {
  key: string;
  treeData: ITree[];
}
export const getDataByKeyFromTreeData = (params: IGetDataByKeyFromTreeData) => {
  const { key, treeData } = params;

  const datas = generateList(treeData, []);

  function isBigEnough(item: ITree) {
    return item.key === key;
  }

  const data = datas.filter(isBigEnough);

  return data;
};

// 根据 key获取它的父节点信息
export const getParentInfoByKey = (
  key: string,
  tree: ITree[],
): ITree | undefined => {
  let parentInfo;
  for (let i = 0; i < tree.length; i = +1) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentInfo = node;
      } else if (getParentInfoByKey(key, node.children)) {
        parentInfo = getParentInfoByKey(key, node.children);
      }
    }
  }
  return parentInfo;
};

/**
 *
 * @param {后端原始数据} originData
 * @param {需要返回的数据，默认为[]} result
 * @param {树形树数据最后一级是否可点击,默认false} lastLeafDisabled
 * @param {除了最后一级节点可点外， 其他节点不可点击，默认false} onlyLastleafNoDisabled
 * @param {需要转换的文案，} title
 * @param {需要转换的key键值} value
 * @param {需要隐藏的item的字段名，若 `${hideFiled}`===1则隐藏} hideFiled
 */
interface ITransformTree {
  originData: any;
  title?: string;
  value?: string;

  result?: ITree[];
  lastLeafDisabled?: boolean;
  onlyLastleafNoDisabled?: boolean;

  hideFiled?: string;
  secondResult?: ITree[];
  number?: number;
  unitName?: string;
  hasAll?: boolean;
  [propName: string]: any;
}

export const transformTree = (obj: ITransformTree) => {
  const {
    originData,
    result = [],
    lastLeafDisabled = false,
    onlyLastleafNoDisabled = false,
    title,
    value,
    hideFiled,
    secondResult = [],
    number = 0,
    unitName,
  } = obj;
  if (!(Array.isArray(originData) && originData.length > 0 && title && value)) {
    return [];
  }

  originData.forEach(v => {
    const item = { ...v };
    if (item[value] && item[title]) {
      const key = item[value];
      if (item.childList) {
        item.children = item.childList;
      }
      const bool1 =
        !(Array.isArray(item.children) && item.children.length > 0) &&
        lastLeafDisabled;
      const bool2 =
        Array.isArray(item.children) &&
        item.children.length > 0 &&
        onlyLastleafNoDisabled;
      const bool3 = item.disabled;

      const objData: ITree = {
        title: `${item[title]}`,
        key: `${key}`,
        value: `${key}`,
        origin: item,
        parentId: (item.pid && `${item.pid}`) || null,
        isChecked: Boolean(
          item.isChecked !== undefined ? item.isChecked : item.selection === 1,
        ),
        disabled: Boolean(bool2 || bool1 || bool3),
        // children: [],
        number: item[number] ? `${item[number]}${unitName}` : 0,
      };
      if (Array.isArray(item.children) && item.children.length > 0) {
        objData.children = [];

        objData.children = transformTree({
          originData: item.children,
          result: [],
          lastLeafDisabled,
          onlyLastleafNoDisabled,
          title,
          value,
          hideFiled,
          number,
          unitName,
        });
      }
      if (
        hideFiled &&
        item[hideFiled] !== undefined &&
        `${item[hideFiled]}` === '0'
      ) {
        secondResult.push(objData);
      } else {
        result.push(objData);
      }
    }
  });

  return hideFiled ? secondResult : result;
};
/**
 *
 * @param {后端原始数据} originData
 * @param {是否展示'所有/全部'} hasAll
 * @param {树形树数据最后一级是否可点击,默认false} lastLeafDisabled
 * @param {除了最后一级节点可点外， 其他节点不可点击，默认false} onlyLastleafNoDisabled
 * @param {需要转换的文案，} title
 * @param {需要转换的key键值} value
 * @param {需要隐藏的item的字段名，若 `${hideFiled}`===1则隐藏} hideFiled
 */
export const dataTransformToTree = (obj: ITransformTree) => {
  const {
    originData,
    hasAll = true,
    lastLeafDisabled,
    onlyLastleafNoDisabled,
    title,
    value,
    hideFiled,
    number,
    unitName,
  } = obj;

  const transformTreeParams = {
    originData,
    result: [],
    lastLeafDisabled,
    onlyLastleafNoDisabled,
    title,
    value,
    hideFiled,
    number,
    unitName,
  };
  const treeData = transformTree(transformTreeParams);

  return hasAll
    ? [
        {
          value: '',
          title: '全部',
          key: '0',
          children: treeData,
        },
      ]
    : treeData;
};

const TreeUtil = {
  generateList,
  arrayToTree,
  getLastChildren,
  getDataByKeyFromTreeData,
  getParentInfoByKey,
  dataTransformToTree,
  transformTree,
};

export default TreeUtil;
