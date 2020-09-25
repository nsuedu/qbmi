import React, { useState } from 'react';
import { Button, Form, DatePicker } from 'antd';

import { FormModal, InfoModal } from 'qbmi';

// 信息展示
const InfoModalCom = () => <div>空空</div>;
const Demoa = InfoModal(InfoModalCom);

// 表单弹框
const FormModalCom = props => {
  const onFinish = () => {
    const { onCancel } = props;

    if (onCancel) {
      onCancel();
    }
  };

  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  const { form } = props;

  return (
    <Form
      ref={form}
      {...formItemLayout}
      onFinish={values => onFinish(values)}
      initialValues={{ payType: 1 }}
    >
      <Form.Item label="时间" name="payTime" rules={[{ required: true, message: '请选择时间' }]}>
        <DatePicker className="input-width" style={{ width: '100%' }} />
      </Form.Item>
    </Form>
  );
};

const Demob = FormModal(FormModalCom);

const Demo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const onCancel = () => {
    setModalVisible(false);
    setInfoVisible(false);
  };

  // 展示信息弹框
  const showInfoModal = () => {
    setInfoVisible(true);
  };
  const infoModalProps = {
    title: '展示信息弹框',
    visible: infoVisible,
    onCancel,
  };

  // 含表单弹框
  const showModal = () => {
    setModalVisible(true);
  };
  const modalProps = {
    title: '表单弹框',
    visible: modalVisible,
    onCancel,
  };

  return (
    <>
      <Demob {...modalProps} />
      <Button type="primary" onClick={showModal} style={{ marginRight: 100 }}>
        FormModal
      </Button>

      <Demoa {...infoModalProps} />
      <Button type="primary" onClick={showInfoModal}>
        InfoModal
      </Button>
    </>
  );
};

export default Demo;
