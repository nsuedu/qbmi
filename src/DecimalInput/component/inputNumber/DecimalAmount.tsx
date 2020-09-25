import React, { useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import RegExps from '../../../utils/RegExp';

const { NUMBER } = RegExps;

interface IProps {
  decimal?: number;
  dispatch?: Function;
  value?: number;
  onChange?: Function;
  [propName: string]: any;
}

const DecimalAmount: React.FC<IProps> = props => {
  const { decimal = 2, dispatch, value, onChange, ...rest } = props;
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

  const formatter = (val?: number | string) => {
    if (!val && val !== 0) {
      return '';
    }
    let v = String(val);
    if (Number(v) < 1) {
      // 判断一下有没有减号
      if (v.indexOf('-') >= 0 && v.indexOf('e') > -1) {
        v = `0${String(Number(v) + 1).substr(1)}`;
      }
    }
    // return Number(value);
    return v;
  };

  const changeHandler = (v?: number | string) => {
    // 转换科学计数法
    if (onChange) {
      onChange(formatter(v));
    }
  };

  return (
    <>
      <InputNumber
        value={value}
        min={0}
        max={NUMBER['6'].max}
        step={fixed}
        precision={decimal}
        formatter={formatter}
        onChange={changeHandler}
        style={{ width: '100%' }}
        {...rest}
        className="searchForm-field"
      />
    </>
  );
};
export default DecimalAmount;
