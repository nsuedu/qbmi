import React, { FC, useState, useEffect } from 'react';
import { Upload, Modal, message, Button } from 'antd';
import { UploadFile, UploadChangeParam } from 'antd/lib/upload/interface';
import { PlusOutlined, LoadingOutlined, UploadOutlined } from '@ant-design/icons';

import PdfPreview from '../PdfPreview';
import { setThumbUrl, getBase64, getFileType } from './utils';
import { KBUploadProps } from './data.d';

import './index.less';

const pdfPreviewImg = require('./pdfPre/pdfPreview.svg');

const uploadPrefix = '/api/v1/web/upload';

const tokenInfo =
  localStorage.tokenInfo &&
  localStorage.tokenInfo !== 'undefined' &&
  localStorage.tokenInfo !== 'null'
    ? JSON.parse(localStorage.tokenInfo)
    : {};

const KBUpload: FC<KBUploadProps> = props => {
  const {
    listType = 'picture-card',
    fileNumberLimit = 5,
    buttonText = '上传',
    action = `${uploadPrefix}/file`,
    name = 'file',
    fileType = ['jpg', 'png', 'bmp', 'pdf'],
    defaultFileList = [],
    onChange,
    showUploadList,
  } = props;

  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [previewPDFUrl, setPreviewPDFUrl] = useState<string>('');
  const [previewPDFVisible, setPreviewPDFVisible] = useState<boolean>(false);

  useEffect(() => {
    setFileList(setThumbUrl(defaultFileList));
  }, []);

  useEffect(() => {
    // 纯展示的上传组件，会根据外部传入的 fileList 渲染 图片列表
    if (!onChange && showUploadList && !showUploadList.showRemoveIcon) {
      setFileList(setThumbUrl(defaultFileList));
    }
  }, [showUploadList, defaultFileList, onChange]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview && file.originFileObj) {
      file.preview = await getBase64(file.originFileObj);
    }
    const url = file.url || file.preview || file.response.data;
    //
    if (
      file.type === 'application/pdf' ||
      getFileType(file.name, 'pdf') ||
      getFileType(file.url, 'pdf')
    ) {
      setPreviewPDFUrl(url || file.response.data);
      setPreviewPDFVisible(true);
    } else {
      setPreviewImage(url);
      setPreviewVisible(true);
    }
  };

  const beforeUpload = (file: UploadFile) => {
    // 文件后缀名
    const typeSuffix = file.name.split('.');

    const isCorrectType = fileType.includes(typeSuffix[typeSuffix.length - 1]);
    if (!isCorrectType) {
      message.error(`支持扩展名: ${fileType.join('、')}最多可上传${fileNumberLimit}个文件`);
      return false;
    }

    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('文件不能大于10M!');
      return false;
    }

    return isCorrectType && isLt10M;
  };

  const handleChange = async (info: UploadChangeParam<UploadFile<any>>) => {
    let newFileList = info.fileList
      .map((item: UploadFile) => {
        const bool = item.type === 'application/pdf';
        if (bool) {
          return {
            ...item,
            url: item.url || (item.response && item.response.data ? item.response.data : null),
            thumbUrl: pdfPreviewImg,
          };
        }
        return item;
      })
      .filter((item: UploadFile) => {
        /*
      beforeUpload 只能验证文件 是否符合要求，但不能限制文件上传，
      因此 还需要在这里  过滤 不符合要求的 文件
      */
        const typeSuffix = item.name.split('.');
        const isCorrectType = fileType.includes(typeSuffix[typeSuffix.length - 1]);
        return isCorrectType;
      });

    if (info.file.status === 'uploading') {
      setLoading(true);
    }
    if (['removed', 'done'].includes(info.file.status)) {
      newFileList = newFileList.map(item => ({
        uid: item.uid,
        name: item.name,
        status: item.status,
        url: item.url || (item.response && item.response.data ? item.response.data : null),
        thumbUrl: item.thumbUrl,
      }));
      setLoading(false);
    }
    if (['error'].includes(info.file.status)) {
      return;
    }

    const fileForString = newFileList
      .map(item => {
        if (item && typeof item === 'string') {
          return item;
        }
        if (item.url) {
          return item.url;
        }
        if (item.response && item.response.data) {
          return item.response.data;
        }
        return null;
      })
      .filter(item => item);

    if (onChange) {
      onChange(fileForString);
    }

    setFileList(newFileList);
  };

  const uploadButton =
    listType === 'picture-card' ? (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">{buttonText}</div>
      </div>
    ) : (
      <Button>
        <UploadOutlined />
        {buttonText}
      </Button>
    );

  return (
    <>
      <Upload
        className={
          showUploadList && !showUploadList.showRemoveIcon
            ? 'uploadContainer'
            : 'uploadContainerNormal'
        }
        name={name}
        action={action}
        listType={listType}
        fileList={fileList}
        headers={{
          Authorization: `Bearer ${tokenInfo.accessToken}`,
        }}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={beforeUpload}
        showUploadList={{
          showPreviewIcon: true,
          showRemoveIcon: true,
          // showDownloadIcon: true,
          // removeIcon?: React.ReactNode,
          // downloadIcon?: React.ReactNode
          ...showUploadList,
        }}
      >
        {fileList.length >= fileNumberLimit || (showUploadList && !showUploadList.showRemoveIcon)
          ? null
          : uploadButton}
      </Upload>
      {showUploadList && !showUploadList.showRemoveIcon ? null : (
        <span className="uploadLimitDesc">{`支持扩展名: ${fileType.join(
          '、',
        )}最多可上传${fileNumberLimit}个文件`}</span>
      )}

      <Modal
        destroyOnClose
        visible={previewVisible}
        footer={null}
        title="附件预览"
        onCancel={() => {
          setPreviewVisible(false);
        }}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>

      <PdfPreview
        path={previewPDFUrl}
        visible={previewPDFVisible}
        onVisibleChange={() => setPreviewPDFVisible(false)}
      />
    </>
  );
};

export default KBUpload;
