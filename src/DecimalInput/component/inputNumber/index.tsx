import React from 'react';
import DecimalAmount from './DecimalAmount';
import DecimalAmountUnit from './DecimalAmountUnit';

interface IProps {
  suffix?: string;
  prefix?: string;
  [propName: string]: any;
}

const InputNumber: React.FC<IProps> = props => {
  const { prefix = '', suffix = '', ...rest } = props;

  return (
    <>
      {suffix !== undefined || prefix !== undefined ? (
        <DecimalAmountUnit suffix={suffix} prefix={prefix} {...rest} />
      ) : (
        <DecimalAmount {...rest} />
      )}
    </>
  );
};
export default InputNumber;
