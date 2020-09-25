import React from 'react';

interface IProps {
  value: number;
  amount?: number;
  price?: number;
  special?: boolean;
  [propName: string]: any;
}

const DecimalText: React.FC<IProps> = props => {
  const { value, decimalType = 'price', special, showUnit = true } = props;
  const text = parseFloat(`${value}`).toFixed(props[decimalType]);
  // eslint-disable-next-line no-nested-ternary
  return decimalType === 'price' ? (
    showUnit ? (
      <span className={`text-moneySign ${special ? ' text-price' : ''}`}>{text}</span>
    ) : (
      <span>{text}</span>
    )
  ) : (
    <span>{text}</span>
  );
};
export default DecimalText;
