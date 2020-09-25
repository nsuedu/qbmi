"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bar = _interopRequireDefault(require("./components/bar"));

var _barLine = _interopRequireDefault(require("./components/barLine"));

var _chartCard = _interopRequireDefault(require("./components/chartCard"));

var _line = _interopRequireDefault(require("./components/line"));

var _pie = _interopRequireDefault(require("./components/pie"));

var _rank = _interopRequireDefault(require("./components/rank"));

var _scrollBoard = _interopRequireDefault(require("./components/scrollBoard"));

var _totalText = _interopRequireDefault(require("./components/totalText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Charts = {
  Bar: _bar.default,
  BarLine: _barLine.default,
  ChartCard: _chartCard.default,
  Line: _line.default,
  Pie: _pie.default,
  Rank: _rank.default,
  ScrollBoard: _scrollBoard.default,
  TotalText: _totalText.default
};
var _default = Charts;
exports.default = _default;