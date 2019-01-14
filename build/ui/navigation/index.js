'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = require('./tab');

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tab).default;
  }
});

var _tabGroup = require('./tab-group');

Object.defineProperty(exports, 'TabGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabGroup).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }