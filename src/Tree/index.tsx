import React from 'react';
import { Tree as TreeAntd, Popconfirm, Popover } from 'antd';
import { isEqual } from 'lodash';

import IconFont from '../IconFont';

import './index.less';

const { TreeNode } = TreeAntd;

interface IProps {
  expandedKeys?: (string | number)[];
  selectedKeys?: (string | number)[];
  limit?: number;
  onSelect?: Function;
  onAdd?: Function;
  onDelete?: Function;
  onEdit?: Function;
  deleteText?: string;
  addText?: string;
  editText?: string;
  noEditAndDelete?: any;
  [propName: string]: any;
}
interface IState {
  expandedKeys: (string | number)[];
  selectedKeys: (string | number)[];
  autoExpandParent: boolean;
  limit: number;
}
class Tree extends React.Component<IProps, IState> {
  static getDerivedStateFromProps(nextProp: any, preState: any) {
    const { selectedKeys } = nextProp;
    if (selectedKeys && !isEqual(selectedKeys, preState.selectedKeys)) {
      return {
        selectedKeys,
      };
    }
    return null;
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      expandedKeys: props.expandedKeys || ['0'],
      autoExpandParent: true,
      selectedKeys: props.selectedKeys || ['0'],
      limit: props.limit || 3,
    };
  }

  onExpand = (expandedKeys: (string | number)[]) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onSelect = (selectedKeys: (string | number)[], info: any) => {
    const { onSelect } = this.props;
    const { selectedKeys: oldselectedKeys, expandedKeys: oldexpandedKeys } = this.state;

    let newselectedKeys = [...selectedKeys];

    if (newselectedKeys.length === 0 && info && info.node && info.node.props) {
      const key = info.node.props?.value;

      newselectedKeys = [key];
    }

    if (isEqual(newselectedKeys, oldselectedKeys)) {
      let newkeys: (string | number)[] = [];

      if (oldexpandedKeys.includes(newselectedKeys[0])) {
        newkeys = oldexpandedKeys.filter(item => !newselectedKeys.includes(item));
      } else {
        newkeys = [...oldexpandedKeys, newselectedKeys[0]];
      }
      if (!newkeys.includes('0')) {
        newkeys = [];
      }

      this.setState({
        expandedKeys: newkeys,
        autoExpandParent: false,
      });

      return false;
    }

    let newkeys = [];

    if (oldexpandedKeys.includes(newselectedKeys[0])) {
      newkeys = oldexpandedKeys.filter(item => !newselectedKeys.includes(item));
    } else {
      newkeys = [...oldexpandedKeys, newselectedKeys[0]];
    }

    this.setState({
      expandedKeys: newkeys,
      autoExpandParent: false,
    });

    if (onSelect) {
      onSelect(newselectedKeys, info);
    }

    if (!this.props.selectedKeys) {
      this.setState({
        selectedKeys: newselectedKeys,
      });
    }
  };

  renderTitle = (obj: any, i: any) => {
    const { onAdd, onDelete, onEdit, deleteText, addText, editText, noEditAndDelete } = this.props;
    const { limit } = this.state;
    const noEditAndDeleteItem = obj.origin && obj.origin[noEditAndDelete];
    return (
      <div className="titleStyle">
        <div className="titleTextStyle">
          <span style={{ display: 'inline-block', marginRight: 2 }}> {obj.title}</span>
          {obj.number && <span> {`(${obj.number})`}</span>}
        </div>
        {obj.value !== '0' || obj.title !== '全部' ? (
          <div
            className="titleDescStyle"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            {addText && i <= limit && (
              <span
                style={{ display: 'inline-block' }}
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onAdd) {
                    onAdd(obj);
                  }
                }}
              >
                <Popover content={addText}>
                  <IconFont type="iconadd" style={{ marginRight: 6, color: '#40a9ff' }} />
                </Popover>
              </span>
            )}

            {editText && !noEditAndDeleteItem && (
              <span
                style={{ marginLeft: 15, marginRight: 15 }}
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onEdit) {
                    onEdit(obj);
                  }
                }}
              >
                <Popover content={editText}>
                  <IconFont type="iconbianji" />
                </Popover>
              </span>
            )}

            {deleteText && !noEditAndDeleteItem && (
              <Popconfirm
                title="确定删除吗?"
                onConfirm={() => {
                  if (onDelete) {
                    onDelete(obj);
                  }
                }}
                okText="确定"
                cancelText="取消"
              >
                <Popover content={deleteText}>
                  <span>
                    <IconFont type="iconicon-delete" />
                  </span>
                </Popover>
              </Popconfirm>
            )}
          </div>
        ) : null}
      </div>
    );
  };

  renderTreeNodes = (data: any[], i: any) => {
    const { limit } = this.state;

    return data.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <TreeNode
            title={this.renderTitle(item, i)}
            key={item.key}
            // dataRef={item}
            switcherIcon={node => {
              // 未展开
              if (!node.expanded) {
                return (
                  <IconFont
                    type="iconfile-open"
                    style={{
                      color: '#1D8EF5',
                      fontSize: 18,
                      lineHeight: '47px',
                    }}
                  />
                );
              }
              if (node.expanded) {
                return (
                  <IconFont
                    type="iconfile-open-result"
                    style={{
                      color: '#1D8EF5',
                      fontSize: 18,
                      lineHeight: '47px',
                    }}
                  />
                );
              }

              return null;
            }}
          >
            {i <= limit && this.renderTreeNodes(item.children, i + 1)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} {...item} title={this.renderTitle(item, i)} />;
    });
  };

  render() {
    const { treeData, defaultSelectedKeys } = this.props;
    const { expandedKeys, autoExpandParent, selectedKeys } = this.state;

    return (
      <div className="treeWrap">
        {treeData?.length ? (
          <TreeAntd
            defaultSelectedKeys={defaultSelectedKeys || []}
            onExpand={this.onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onSelect={this.onSelect}
            selectedKeys={selectedKeys}
          >
            {this.renderTreeNodes(treeData, 1)}
          </TreeAntd>
        ) : null}
      </div>
    );
  }
}

export default Tree;
