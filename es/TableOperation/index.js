import "antd/es/dropdown/style";
import _Dropdown from "antd/es/dropdown";
import "antd/es/menu/style";
import _Menu from "antd/es/menu";
import "antd/es/divider/style";
import _Divider from "antd/es/divider";

/*
  author:lilin
*/
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { isArray } from 'lodash';
import PropTypes from 'prop-types';
import './index.less';

// 渲染table操作列
// 说明：props接收operations数组，超过三个渲染为Dropdown
var TableOperation = function TableOperation(props) {
  var operations = props.operations;

  if (isArray(operations) && operations.length > 0) {
    if (operations.length <= 3) {
      return operations.map(function (item, index, arr) {
        if (index < arr.length - 1) {
          return /*#__PURE__*/React.createElement(React.Fragment, null, item, /*#__PURE__*/React.createElement(_Divider, {
            type: "vertical"
          }));
        }

        return item;
      });
    }

    var renderDrop = function renderDrop() {
      var drops = [];
      operations.forEach(function (item, index) {
        if (index > 0) {
          drops.push( /*#__PURE__*/React.createElement(_Menu.Item, null, item));
        }
      });
      return drops;
    };

    var menu = /*#__PURE__*/React.createElement(_Menu, null, renderDrop());
    return /*#__PURE__*/React.createElement(React.Fragment, null, operations[0], /*#__PURE__*/React.createElement(_Divider, {
      type: "vertical"
    }), /*#__PURE__*/React.createElement(_Dropdown, {
      trigger: "click",
      overlayClassName: "item",
      overlay: menu
    }, /*#__PURE__*/React.createElement("a", {
      className: "ant-dropdown-link",
      onClick: function onClick(e) {
        return e.preventDefault();
      }
    }, "\u66F4\u591A\u64CD\u4F5C", /*#__PURE__*/React.createElement(DownOutlined, null))));
  }

  return null;
};

TableOperation.propTypes = {
  operations: PropTypes.array.isRequired
};
export default TableOperation;