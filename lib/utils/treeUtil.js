"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dataTransformToTree = exports.transformTree = exports.getParentInfoByKey = exports.getDataByKeyFromTreeData = exports.getLastChildren = exports.arrayToTree = exports.generateList = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 数组扁平化  树形数组转化为一维数组
var generateList = function generateList(data, dataList) {
  data.forEach(function (item) {
    dataList.push(item);

    if (item.children) {
      generateList(item.children, dataList);
    }
  });
  return dataList;
}; // 一维数组转化为 树形数据， 前提:存在parentId , 根节点parentId===0


exports.generateList = generateList;

var arrayToTree = function arrayToTree(datas) {
  var root = datas.filter(function (item) {
    return !item.parentId || "".concat(item.parentId) === '0';
  });

  if (root.length) {
    var obj = _objectSpread({}, root[0]);

    var secondData = datas.filter(function (item) {
      return "".concat(item.parentId) === root[0].value;
    });

    if (secondData.length) {
      obj.children = secondData.map(function (secondItem) {
        var newsecondItem = _objectSpread({}, secondItem);

        var thirdData = datas.filter(function (item) {
          return "".concat(item.parentId) === secondItem.value;
        });

        if (thirdData.length) {
          newsecondItem.children = thirdData.map(function (thirdItem) {
            var newthirdItem = _objectSpread({}, thirdItem);

            var fourData = datas.filter(function (item) {
              return "".concat(item.parentId) === thirdItem.value;
            });

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

exports.arrayToTree = arrayToTree;

var getLastChildren = function getLastChildren(treeData, result) {
  treeData.forEach(function (item) {
    if (!(Array.isArray(item.children) && item.children.length > 0)) {
      result.push({
        value: item.key,
        label: item.title
      });
    } else {
      getLastChildren(item.children, result);
    }
  });
  return result;
};

exports.getLastChildren = getLastChildren;

var getDataByKeyFromTreeData = function getDataByKeyFromTreeData(params) {
  var key = params.key,
      treeData = params.treeData;
  var datas = generateList(treeData, []);

  function isBigEnough(item) {
    return item.key === key;
  }

  var data = datas.filter(isBigEnough);
  return data;
}; // 根据 key获取它的父节点信息


exports.getDataByKeyFromTreeData = getDataByKeyFromTreeData;

var getParentInfoByKey = function getParentInfoByKey(key, tree) {
  var parentInfo;

  for (var i = 0; i < tree.length; i = +1) {
    var node = tree[i];

    if (node.children) {
      if (node.children.some(function (item) {
        return item.key === key;
      })) {
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


exports.getParentInfoByKey = getParentInfoByKey;

var transformTree = function transformTree(obj) {
  var originData = obj.originData,
      _obj$result = obj.result,
      result = _obj$result === void 0 ? [] : _obj$result,
      _obj$lastLeafDisabled = obj.lastLeafDisabled,
      lastLeafDisabled = _obj$lastLeafDisabled === void 0 ? false : _obj$lastLeafDisabled,
      _obj$onlyLastleafNoDi = obj.onlyLastleafNoDisabled,
      onlyLastleafNoDisabled = _obj$onlyLastleafNoDi === void 0 ? false : _obj$onlyLastleafNoDi,
      title = obj.title,
      value = obj.value,
      hideFiled = obj.hideFiled,
      _obj$secondResult = obj.secondResult,
      secondResult = _obj$secondResult === void 0 ? [] : _obj$secondResult,
      _obj$number = obj.number,
      number = _obj$number === void 0 ? 0 : _obj$number,
      unitName = obj.unitName;

  if (!(Array.isArray(originData) && originData.length > 0 && title && value)) {
    return [];
  }

  originData.forEach(function (v) {
    var item = _objectSpread({}, v);

    if (item[value] && item[title]) {
      var key = item[value];

      if (item.childList) {
        item.children = item.childList;
      }

      var bool1 = !(Array.isArray(item.children) && item.children.length > 0) && lastLeafDisabled;
      var bool2 = Array.isArray(item.children) && item.children.length > 0 && onlyLastleafNoDisabled;
      var bool3 = item.disabled;
      var objData = {
        title: "".concat(item[title]),
        key: "".concat(key),
        value: "".concat(key),
        origin: item,
        parentId: item.pid && "".concat(item.pid) || null,
        isChecked: Boolean(item.isChecked !== undefined ? item.isChecked : item.selection === 1),
        disabled: Boolean(bool2 || bool1 || bool3),
        // children: [],
        number: item[number] ? "".concat(item[number]).concat(unitName) : 0
      };

      if (Array.isArray(item.children) && item.children.length > 0) {
        objData.children = [];
        objData.children = transformTree({
          originData: item.children,
          result: [],
          lastLeafDisabled: lastLeafDisabled,
          onlyLastleafNoDisabled: onlyLastleafNoDisabled,
          title: title,
          value: value,
          hideFiled: hideFiled,
          number: number,
          unitName: unitName
        });
      }

      if (hideFiled && item[hideFiled] !== undefined && "".concat(item[hideFiled]) === '0') {
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


exports.transformTree = transformTree;

var dataTransformToTree = function dataTransformToTree(obj) {
  var originData = obj.originData,
      _obj$hasAll = obj.hasAll,
      hasAll = _obj$hasAll === void 0 ? true : _obj$hasAll,
      lastLeafDisabled = obj.lastLeafDisabled,
      onlyLastleafNoDisabled = obj.onlyLastleafNoDisabled,
      title = obj.title,
      value = obj.value,
      hideFiled = obj.hideFiled,
      number = obj.number,
      unitName = obj.unitName;
  var transformTreeParams = {
    originData: originData,
    result: [],
    lastLeafDisabled: lastLeafDisabled,
    onlyLastleafNoDisabled: onlyLastleafNoDisabled,
    title: title,
    value: value,
    hideFiled: hideFiled,
    number: number,
    unitName: unitName
  };
  var treeData = transformTree(transformTreeParams);
  return hasAll ? [{
    value: '',
    title: '全部',
    key: '0',
    children: treeData
  }] : treeData;
};

exports.dataTransformToTree = dataTransformToTree;
var TreeUtil = {
  generateList: generateList,
  arrayToTree: arrayToTree,
  getLastChildren: getLastChildren,
  getDataByKeyFromTreeData: getDataByKeyFromTreeData,
  getParentInfoByKey: getParentInfoByKey,
  dataTransformToTree: dataTransformToTree,
  transformTree: transformTree
};
var _default = TreeUtil;
exports.default = _default;