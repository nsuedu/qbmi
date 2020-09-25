import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import RegExps from '../../../utils/RegExp';

interface IProps {
  decimal?: number;
  priceDecimal?: number;
  precisionType?: string;
  precision?: number;
  value?: number | string;
  min?: number;
  onBlur?: Function;
  onChange?: any;
  suffix?: string;
  [propName: string]: any;
}

const { NUMBER } = RegExps;
const numberMap = {
  amount: 6,
  price: 9,
};

const DecimalAmount: React.FC<IProps> = props => {
  const {
    decimal,
    priceDecimal,
    precisionType = 'amount',
    precision,
    value,
    min = 0,
    onBlur: onBlurProps,
    ...rest
  } = props;
  const [tValue, setTValue] = useState(value);
  const vPrecision =
    precisionType === 'price' ? priceDecimal : precision !== undefined ? precision : decimal;

  const { max } = NUMBER[numberMap[precisionType]];

  useEffect(() => {
    setTValue(value);
  }, [value]);

  const onBlur = (e: any) => {
    const { onChange } = props;
    const v = e.target.value;

    if (v) {
      const transformV = Math.min(Number(v), max).toFixed(vPrecision);
      setTValue(transformV);
      if (onChange) {
        onChange(transformV);
      }
      if (onBlurProps) {
        onBlurProps(e);
      }
    }
  };

  return (
    <>
      <Input
        type="number"
        value={tValue}
        min={min}
        max={max}
        onBlur={onBlur}
        style={{ width: '100%' }}
        {...rest}
        className="searchForm-field"
      />
    </>
  );
};
export default DecimalAmount;
