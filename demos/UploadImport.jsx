import React from 'react';
import { UploadImport } from 'qbmi';

import { purchasingPrefix } from '../constants';
import { executeImportPurOrder, batchImportPurOrderByFile } from '../services';
import templates from '../constants/exportTemplates';

const Index = () => {
  return (
    <UploadImport
      uploadParams={{
        confirmTitle: '采购订单导入确认',
        uploadUrl: batchImportPurOrderByFile,
        confirmService: executeImportPurOrder,
        exportErrorUrl: `${purchasingPrefix}/order/export-errorrows`,
        callback: () => {
          console?.log('upload Import');
        },
      }}
      downloadParams={{
        downloadUrl: templates.purchaseOrder,
        name: '采购订单模板',
      }}
    />
  );
};

export default Index;
