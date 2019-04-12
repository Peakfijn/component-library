'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headers = require('./headers');

Object.defineProperty(exports, 'H1', {
  enumerable: true,
  get: function get() {
    return _headers.H1;
  }
});
Object.defineProperty(exports, 'H2', {
  enumerable: true,
  get: function get() {
    return _headers.H2;
  }
});
Object.defineProperty(exports, 'H3', {
  enumerable: true,
  get: function get() {
    return _headers.H3;
  }
});

var _paragraphs = require('./paragraphs');

Object.defineProperty(exports, 'Paragraph', {
  enumerable: true,
  get: function get() {
    return _paragraphs.Paragraph;
  }
});
Object.defineProperty(exports, 'Caption', {
  enumerable: true,
  get: function get() {
    return _paragraphs.Caption;
  }
});

var _separator = require('./separator');

Object.defineProperty(exports, 'Separator', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_separator).default;
  }
});

var _horizontalDivider = require('./horizontal-divider');

Object.defineProperty(exports, 'HorizontalDivider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_horizontalDivider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }