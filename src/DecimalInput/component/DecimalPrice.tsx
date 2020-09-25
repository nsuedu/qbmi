import React, { useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import { NUMBER } from '../constants';

interface IProps {
  decimal?: number;
  value?: number;
  [propName: string]: any;
}

const DecimalPrice: React.FC<IProps> = props => {
  const { decimal = 2, value, ...rest } = props;
  const [fixed, setFixed] = useState(0.1);
  const initFixed = () => {
    let num = '0.';
    if (decimal === 0) {
      setFixed(0);
    } else {
      for (let i = 1; i < decimal; i += 1) {
        num += '0';
      }
      num += '1';
      setFixed(parseFloat(num));
    }
  };

  useEffect(() => {
    initFixed();
  }, []);

  return (
    <InputNumber
      value={value}
      min={0}
      max={NUMBER['9'].max}
      step={fixed}
      precision={decimal}
      style={{ width: '100%' }}
      {...rest}
      className="searchForm-field"
    />
  );
};
export default DecimalPrice;
