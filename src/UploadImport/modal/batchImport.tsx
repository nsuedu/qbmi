import React from 'react';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import InfoModal from '../../Modal/InfoModal';

const { Dragger } = Upload;

const batchImportContent = props => {
  const {
    params: { draggerProps, downloadParams },
  } = props;

  return (
    <>
      <div className="draggerContainer">
        <Dragger {...draggerProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或将单个文件拖拽到这里上传</p>
          <p className="ant-upload-hint">支持扩展名：.xlsx 文件大小10M以内</p>
        </Dragger>
      </div>
      {downloadParams && (
        <div style={{ marginTop: 6, marginBottom: 6 }}>
          推荐使用
          <a href={downloadParams && downloadParams.downloadUrl}>
            {downloadParams && downloadParams.name}
          </a>
          整理数据。
        </div>
      )}
    </>
  );
};

export default InfoModal(batchImportContent);
