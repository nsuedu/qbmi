/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { message, Button, Popover } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CloudUploadOutlined } from '@ant-design/icons';
import moment from 'moment';

import exportBlob from '../utils/exportBlob';
import './index.less';

// 使用示例
/*
  <UploadEle
    // 上传参数
    uploadParams={{
      confirmTitle: '采购清单导入确认', //确认弹窗标题
      uploadUrl: executeimportByFile, // 上传server
      uploadOption: {                 // 上传接口传递的参数
        planId: detailData.id,
        planNumber: detailData.serialNumber,
      },
      exportErrorUrl: `${purchasingPrefix}/inventory/export-errorrows`, // 错误导出接口地址
      confirmService: executeimportInventory, // 确认导入server
      callback: (tableData) => { // 导入回调默认传递后端返回结果
        refreshInventory(tableData);
      },
    }}
    // 下载参数
    downloadParams={{
      downloadUrl: templates.purchasePlan, // 下载地址
      name: '采购需求清单模板', // 下载模板名称
    }}
  />
*/
import BatchImportModal from './modal/batchImport';
import ImportSureModal from './modal/ImportSure';

const generWidth = text => {
  const radio = 110 / 5; // 默认5个字符显示105的宽度
  return Math.max(text.length, 5) * radio;
};

const generTitle = (title: string) => {
  return title.indexOf('*') > -1 ? (
    <span className="ant-form-item-label">
      <label className="ant-form-item-required">{title.replace('*', '')}</label>
    </span>
  ) : (
    title
  );
};

const UploadModal = props => {
  const { downloadParams, uploadParams } = props;
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [cacheId, setCacheId] = useState(null);
  const [canImportAll, setCanImportAll] = useState(false);
  const [canImportCorrect, setCanImportCorrect] = useState(false);
  const [headers, setHeaders] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [files, setFiles] = useState([]);
  // // 开发环境添加租户信息
  // const addr = window.location.origin;
  // let Tenant;
  // if (addr.includes('localhost:')) {
  //   Tenant = '05e8c098-81e6-4ffa-9d37-6918818b699d';
  // }
  const tokenInfo =
    localStorage.tokenInfo &&
    localStorage.tokenInfo !== 'undefined' &&
    localStorage.tokenInfo !== 'null'
      ? JSON.parse(localStorage.tokenInfo)
      : {};
  const onCancel = () => {
    setFiles([]);
    setVisible(false);
  };
  const draggerProps = {
    name: 'file',
    multiple: uploadParams.multiple || false,
    action: uploadParams.uploadUrl,
    method: uploadParams.method || 'POST',
    fileList: files,
    onChange(info) {
      const { status } = info.file;
      const { fileList } = info;
      setFiles(fileList);
      if (status !== 'uploading') {
        //
      }
      if (status === 'done') {
        if (info.file.response) {
          if (info.file.response.success) {
            onCancel();
            setCacheId(info.file.response.data.cacheId);
            setCanImportAll(info.file.response.data.canImportAll);
            setCanImportCorrect(info.file.response.data.canImportCorrect);
            setTableData(info.file.response.data.items);
            setHeaders(info.file.response.data.headers);
            setStatistics(info.file.response.data.statistics);
            setVisible(false);
            setConfirmVisible(true);
            setFiles([]);
          } else {
            const newFileList = fileList.filter(item => item.response.success);
            setFiles(newFileList);
            message.error(info.file.response.msg);
          }
        }
      } else if (status === 'error') {
        const newFileList = fileList.filter(item => item.status !== 'error');
        setFiles(newFileList);
        message.error(`${info.file.name}上传失败`);
      }
    },
    headers: { Authorization: `Bearer ${tokenInfo.accessToken}` },
  };
  const fileName = `${uploadParams.confirmTitle}错误数据-${moment(new Date()).format(
    'YYYY-MM-DD',
  )}`;
  const exportError = () => {
    exportBlob(`${uploadParams.exportErrorUrl}?cacheId=${cacheId}`, fileName);
  };
  const confirmCancel = () => {
    setConfirmVisible(false);
  };
  const onConfirm = () => {
    if (cacheId) {
      if (uploadParams.confirmService) {
        uploadParams
          .confirmService({ cacheId, importAll: true, ...uploadParams.uploadOption })
          .then(res => {
            if (res && res.success) {
              message.success('导入成功！');
              if (uploadParams.callback) {
                uploadParams.callback(tableData);
                setConfirmVisible(false);
              }
            }
          });
      } else {
        if (uploadParams.callback) {
          uploadParams.callback(tableData);
        }
        setConfirmVisible(false);
      }
    }
  };
  const okConfirm = () => {
    if (cacheId) {
      if (uploadParams.confirmService) {
        uploadParams
          .confirmService({ cacheId, importAll: false, ...uploadParams.uploadOption })
          .then(res => {
            if (res && res.success) {
              message.success('导入成功！');
              if (uploadParams.callback) {
                setConfirmVisible(false);
                uploadParams.callback(tableData);
                exportError();
              }
            }
          });
      } else if (uploadParams.callback) {
        setConfirmVisible(false);
        uploadParams.callback(tableData);
        exportError();
      }
    }
  };

  const columns = Object.keys(headers).map(item => {
    return {
      title: generTitle(headers[item]),
      dataIndex: item,
      width: generWidth(headers[item]),
      render: (text, record) => {
        if (!(record && record.rowData)) {
          return null;
        }
        const value = record.rowData[item];
        const errorMessage =
          record.rowError && record.rowError[item] ? record.rowError[item] : null;
        if (errorMessage) {
          return (
            <Popover content={errorMessage}>
              <span className="text-error">{value || '不能为空'}</span>
            </Popover>
          );
        }
        return value;
      },
    };
  });
  const confirmFooter = [
    <Button key="cancel" onClick={confirmCancel}>
      取消
    </Button>,
  ];
  if (canImportCorrect) {
    confirmFooter.push(
      <Button key="okimport" type="primary" onClick={okConfirm}>
        导入并下载错误数据
      </Button>,
    );
  }
  if (canImportAll) {
    confirmFooter.push(
      <Button key="ok" disabled={!canImportAll} type="primary" onClick={onConfirm}>
        导入全部
      </Button>,
    );
  }

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
        disabled={uploadParams.disabled || false}
      >
        <CloudUploadOutlined />
        批量导入
      </Button>

      <BatchImportModal
        title="批量导入"
        visible={visible}
        params={{
          draggerProps,
          downloadParams,
        }}
        onCancel={onCancel}
      />

      <ImportSureModal
        title={uploadParams.confirmTitle || '导入确认'}
        visible={confirmVisible}
        size="lg"
        params={{
          statistics,
          columns,
          tableData,
        }}
        onCancel={confirmCancel}
        footer={confirmFooter}
      />
    </>
  );
};

export default UploadModal;
