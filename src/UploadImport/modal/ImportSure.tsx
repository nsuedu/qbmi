import React from 'react';
import { Alert } from 'antd';

import FormModal from '../../Modal/FormModal';
import StandardTable from '../../TableWrapper/StandardTable';

const ImportSureContent = props => {
  const {
    disableFormRef,
    params: { statistics, columns, tableData },
  } = props;
  disableFormRef();

  return (
    <>
      <Alert
        message={
          <span>
            共{' '}
            <span className={statistics.errorRowCount ? 'errorNum' : 'successNum'}>
              {statistics.total}
            </span>{' '}
            条，有
            <span className={statistics.errorRowCount ? 'errorNum' : 'successNum'}>
              {' '}
              {statistics.errorRowCount}
            </span>{' '}
            条无法导入
          </span>
        }
        type={statistics.errorRowCount ? 'warning' : 'success'}
        showIcon
      />
      <StandardTable
        rowKey={() => Math.random().toFixed(20)}
        tableLayout="fixed"
        scroll={{ x: false }}
        columns={columns}
        data={{ list: tableData, pagination: false }}
      />
    </>
  );
};

export default FormModal(ImportSureContent);
