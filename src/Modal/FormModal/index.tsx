import React, { PureComponent } from 'react';
import { Modal, Button } from 'antd';
import { modalSize } from '../constants';
import '../index.less';

interface Iprops {
  title?: string;
  visible?: boolean;
  size?: string;
  width?: number;
  okText?: string;
  cancelText?: string;
  otherText?: string;
  otherType?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | undefined;
  params?: {};
  onOk?: any;
  onCancel?: () => void;
  onClose?: any;
  onHandleOther?: () => void;
  rest?: Irest;
  [propName: string]: any;
}

interface Irest {
  footer?: any;
  [propName: string]: any;
}

function FormModal(FormComponent: React.ComponentType<Iprops>) {
  let isUseForm = true;

  /**
   *
   * @params onOk     异步成功后的回调操作
   * @params onCancel 关闭窗口操作
   * @params onClose  窗口关闭后的回调操作，
   * @params ...      其它antd modal 属性
   */
  return class extends PureComponent<Iprops> {
    /**
     * @description 传进窗口内部子组件的表单对象
     */
    form = React.createRef();

    state = {
      loading: false,
    };

    /**
     * @description 额外验证方法
     */
    extraValidate = null;

    /**
     * @description 窗口内部每次关闭时，需要重置的操作函数
     */
    handleClose = null;

    /**
     * @description 禁用表单
     */
    disableFormRef = () => {
      isUseForm = false;
    };

    /**
     * @description 启用表单
     */
    enableFormRef = () => {
      isUseForm = true;
    };

    /**
     * @description 用于表单提交后，根据请求结果，处理内部逻辑
     */
    onOk = (promise: Promise<any>) => {
      const { onOk } = this.props;
      this.setState({
        loading: true,
      });
      promise
        .then(v => {
          if (onOk) {
            onOk(v);
          }
        })
        .finally(() => {
          this.setState({
            loading: false,
          });
        });
    };

    /**
     * @description 右下角 <确定> 按钮点击事件，在这里，只触发表单提交
     */
    handleOk = () => {
      const { onOk } = this.props;
      if (isUseForm) {
        this.form.current.submit();
      } else {
        // eslint-disable-next-line no-lonely-if
        if (this.extraValidate != null && this.extraValidate) {
          this.onOk(this.extraValidate());
        } else if (onOk) {
          onOk();
        }
      }
    };

    /**
     * @description 右下角 <取消> 按钮点击事件，在这里，关闭窗口，
     *
     */
    handleCancel = () => {
      if (isUseForm) {
        this.form.current.resetFields();
      }

      const { onCancel, onClose } = this.props;
      if (onClose) {
        onClose();
      }
      if (onCancel) {
        onCancel();
      }
      if (this.handleClose) {
        this.handleClose();
      }
    };

    handleOther = () => {
      const { onHandleOther } = this.props;
      if (onHandleOther) {
        onHandleOther();
      }
    };

    render() {
      const {
        title,
        visible,
        size,
        width,
        okText = '提交',
        cancelText = '取消',
        otherText,
        otherType = 'default',
        params,
        width: propsWidth,
        ...rest
      } = this.props;
      const { loading } = this.state;
      return (
        <Modal
          wrapClassName="custFormModal"
          title={title}
          visible={visible}
          width={width || (`${size}` && modalSize[`${size}`]) || modalSize.sm}
          // confirmLoading={loading}
          // okText={okText}
          // cancelText={cancelText}

          // onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose
          maskClosable={false}
          {...rest}
          footer={
            rest.footer === undefined ? (
              <>
                <Button type="primary" loading={loading} onClick={this.handleOk}>
                  {okText}
                </Button>
                {otherText && (
                  <Button type={otherType} onClick={this.handleOther}>
                    {otherText}
                  </Button>
                )}
                <Button onClick={this.handleCancel}>{cancelText}</Button>
              </>
            ) : (
              rest.footer
            )
          }
        >
          <FormComponent
            form={this.form}
            params={params}
            onOk={this.onOk}
            onCancel={this.handleCancel}
            onClose={(callback: null) => {
              this.handleClose = callback;
            }}
            handleOther={this.handleOther}
            enableFormRef={this.enableFormRef}
            disableFormRef={this.disableFormRef}
            extraValidate={(validateFunc: null) => {
              this.extraValidate = validateFunc;
            }}
          />
        </Modal>
      );
    }
  };
}

export default FormModal;
