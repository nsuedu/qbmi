"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _treeUtil = _interopRequireDefault(require("./treeUtil"));

var _resize = _interopRequireDefault(require("./resize"));

var _numberTransform = _interopRequireDefault(require("./numberTransform"));

var _RegExp = _interopRequireDefault(require("./RegExp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = {
  TreeUtil: _treeUtil.default,
  RegExps: _RegExp.default,
  eleResize: _resize.default,
  NumTransform: _numberTransform.default
};
var _default = utils;
exports.default = _default;