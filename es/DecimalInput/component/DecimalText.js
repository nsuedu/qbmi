import React from 'react';

var DecimalText = function DecimalText(props) {
  var value = props.value,
      _props$decimalType = props.decimalType,
      decimalType = _props$decimalType === void 0 ? 'price' : _props$decimalType,
      special = props.special,
      _props$showUnit = props.showUnit,
      showUnit = _props$showUnit === void 0 ? true : _props$showUnit;
  var text = parseFloat("".concat(value)).toFixed(props[decimalType]); // eslint-disable-next-line no-nested-ternary

  return decimalType === 'price' ? showUnit ? /*#__PURE__*/React.createElement("span", {
    className: "text-moneySign ".concat(special ? ' text-price' : '')
  }, text) : /*#__PURE__*/React.createElement("span", null, text) : /*#__PURE__*/React.createElement("span", null, text);
};

export default DecimalText;