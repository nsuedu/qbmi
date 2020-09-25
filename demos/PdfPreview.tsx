import React, { useState } from 'react';
import { Button } from 'antd';

import { PdfPreview } from 'qbmi';

const Demo = () => {
  const previewPDF = '';
  const [previewPDFVisible, setPreviewPDFVisible] = useState(false);

  const showPDF = () => {
    setPreviewPDFVisible(true);
  };

  return (
    <>
      <PdfPreview
        path={previewPDF}
        visible={previewPDFVisible}
        onVisibleChange={() => setPreviewPDFVisible(false)}
      />
      <Button type="primary" onClick={showPDF}>
        PDF预览
      </Button>
    </>
  );
};

export default Demo;
