import React from 'react';
import { InputNumber } from 'antd';

interface IProps {
  addonAfter: React.ReactNode,
}

const Index: React.FC<IProps> = (props) => {
  const { addonAfter, ...rest } = props;

  if (addonAfter) {
    return (
      <>
        <InputNumber
          style={{
            verticalAlign: 'middle',
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0
          }}
          {...rest}
        />
        <div
          className="ant-input-group-addon"
          style={{
            paddingTop: '2px', verticalAlign: 'middle',
            display: 'inline-table', lineHeight: '24px',
            height: '32px'
          }}>{addonAfter}</div>
      </>
    );
  } else {
    return (
      <InputNumber {...rest} />
    );
  }
}
}

export default Index;


