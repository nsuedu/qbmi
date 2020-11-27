/**
 * @description
 * 供查看信息类型modal窗展示，没有表单（没有footer）
 * @author
 * wangxiong
 */
import React, { Component } from 'react';
import { Modal } from 'antd';
import { modalSize } from '../constants';
import '../index.less';

interface Iprops {
  title?: string;
  visible?: boolean;
  size?: string;
  width?: number;
  params?: {};
  onCancel?: () => void;
}

function InfoModal<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends Component<P & Iprops> {
    constructor(props: Readonly<P & Iprops>) {
      super(props);
      this.state = {};
    }

    render() {
      const { title, visible, size, onCancel, width, params = {}, ...rest } = this.props;
      return (
        <Modal
          wrapClassName="custInfoModal"
          title={title}
          visible={visible}
          width={width || (`${size}` && modalSize[`${size}`]) || modalSize.sm}
          onCancel={onCancel}
          destroyOnClose
          footer={null}
          {...rest}
        >
          <WrappedComponent params={params} onCancel={onCancel} {...(rest as P)} />
        </Modal>
      );
    }
  };
}

export { InfoModal };

export default InfoModal;
