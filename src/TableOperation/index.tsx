/*
  author:lilin
*/

import React from 'react';
import { Divider, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { isArray } from 'lodash';
import PropTypes from 'prop-types';

import './index.less';

interface IProps {
  operations: string[] | React.ReactElement[];
}

// 渲染table操作列
// 说明：props接收operations数组，超过三个渲染为Dropdown
const TableOperation: React.FC<IProps> = props => {
  const { operations } = props;

  if (isArray(operations) && operations.length > 0) {
    if (operations.length <= 3) {
      return operations.map((item, index, arr) => {
        if (index < arr.length - 1) {
          return (
            <>
              {item}
              <Divider type="vertical" />
            </>
          );
        }
        return item;
      });
    }
    const renderDrop = () => {
      const drops = [];
      operations.forEach((item, index) => {
        if (index > 0) {
          drops.push(<Menu.Item>{item}</Menu.Item>);
        }
      });
      return drops;
    };
    const menu = <Menu>{renderDrop()}</Menu>;

    return (
      <>
        {operations[0]}
        <Divider type="vertical" />
        <Dropdown trigger="click" overlayClassName="item" overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            更多操作
            <DownOutlined />
          </a>
        </Dropdown>
      </>
    );
  }
  return null;
};

TableOperation.propTypes = {
  operations: PropTypes.array.isRequired,
};

export default TableOperation;
