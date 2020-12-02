import React from 'react';
import { TreeSelect as TreeSelectAntd } from 'antd';

import { dataTransformToTree } from '../utils/treeUtil';

import { ITree } from './interface.d';

import './index.less';

const { TreeNode } = TreeSelectAntd;

interface IProps {
  callback?: Function;
  dataServer?: (params?: any) => Promise<any>;
  transformOptions?: [];
  onChange?: Function;
  treeData?: ITree[];
  style?: Object;
  [propName: string]: any;
}
interface IState {
  treeData: ITree[];
}

class TreeSelect extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      treeData: props.treeData || [],
    };
  }

  componentDidMount() {
    const { callback } = this.props;
    this.getServerData(callback);
  }

  getServerData = (callback?: Function) => {
    const { dataServer, transformOptions } = this.props;
    if (dataServer) {
      dataServer({ loading: false }).then(res => {
        if (res && res.data) {
          if (transformOptions) {
            const datas = dataTransformToTree({
              originData: res.data,
              ...transformOptions,
            });
            this.setState(
              {
                treeData: datas,
              },
              () => {
                // eslint-disable-next-line no-unused-expressions
                callback && callback();
              },
            );
          } else {
            this.setState(
              {
                treeData: res.data,
              },
              () => {
                // eslint-disable-next-line no-unused-expressions
                callback && callback();
              },
            );
          }
        }
      });
    }
  };

  onFocus = () => {
    this.getServerData();
  };

  renderNode = (list: ITree[]) =>
    list.map(item => {
      const selectable = item.disabled === undefined ? true : !item.disabled;
      return (
        <TreeNode
          key={item.key}
          selectable={selectable}
          className={selectable ? '' : 'custTreeDisableItem'}
          value={`${item.value}`}
          title={item.title}
        >
          {item.children &&
            item.children.length > 0 &&
            this.renderNode(item.children)}
        </TreeNode>
      );
    });

  onChangeHandler = (value: string, label: any, extra: any) => {
    const { onChange } = this.props;
    const { treeData } = this.state;

    if (onChange) {
      onChange(value, label, extra, treeData);
    }
  };

  render() {
    const { onChange, ...props } = this.props;
    const data = JSON.parse(JSON.stringify(this.state.treeData));
    delete props.treeData;
    delete props.transformOptions;
    delete props.dataServer;

    if (data && data.length > 0) {
      return (
        <TreeSelectAntd
          onFocus={this.onFocus}
          dropdownClassName="custDrop"
          onChange={this.onChangeHandler}
          {...props}
        >
          {this.renderNode(data)}
        </TreeSelectAntd>
      );
    }
    return (
      <TreeSelectAntd
        key="null"
        style={props.style ? props.style : { width: '100%' }}
      />
    );
  }
}

export default TreeSelect;
