import "antd/es/alert/style";
import _Alert from "antd/es/alert";
import React from 'react';
import FormModal from '../../Modal/FormModal';
import StandardTable from '../../TableWrapper/StandardTable';

var ImportSureContent = function ImportSureContent(props) {
  var disableFormRef = props.disableFormRef,
      _props$params = props.params,
      statistics = _props$params.statistics,
      columns = _props$params.columns,
      tableData = _props$params.tableData;
  disableFormRef();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Alert, {
    message: /*#__PURE__*/React.createElement("span", null, "\u5171", ' ', /*#__PURE__*/React.createElement("span", {
      className: statistics.errorRowCount ? 'errorNum' : 'successNum'
    }, statistics.total), ' ', "\u6761\uFF0C\u6709", /*#__PURE__*/React.createElement("span", {
      className: statistics.errorRowCount ? 'errorNum' : 'successNum'
    }, ' ', statistics.errorRowCount), ' ', "\u6761\u65E0\u6CD5\u5BFC\u5165"),
    type: statistics.errorRowCount ? 'warning' : 'success',
    showIcon: true
  }), /*#__PURE__*/React.createElement(StandardTable, {
    rowKey: function rowKey() {
      return Math.random().toFixed(20);
    },
    tableLayout: "fixed",
    scroll: {
      x: false
    },
    columns: columns,
    data: {
      list: tableData,
      pagination: false
    }
  }));
};

export default FormModal(ImportSureContent);