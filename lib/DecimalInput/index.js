"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inputNumber = _interopRequireDefault(require("./component/inputNumber"));

var _DecimalAmount = _interopRequireDefault(require("./component/inputNumber/DecimalAmount"));

var _DecimalAmountUnit = _interopRequireDefault(require("./component/inputNumber/DecimalAmountUnit"));

var _DecimalPrice = _interopRequireDefault(require("./component/DecimalPrice"));

var _DecimalText = _interopRequireDefault(require("./component/DecimalText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DecimalInput = {
  InputNumber: _inputNumber.default,
  DecimalAmount: _DecimalAmount.default,
  DecimalAmountUnit: _DecimalAmountUnit.default,
  DecimalPrice: _DecimalPrice.default,
  DecimalText: _DecimalText.default
};
var _default = DecimalInput;
exports.default = _default;