'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\twidth: 1px;\n\theight: 1px;\n\tbackground: transparent;\n\tborder: 0;\n\tmargin: 0;\n\tposition: absolute;\n\topacity: 0;\n'], ['\n\twidth: 1px;\n\theight: 1px;\n\tbackground: transparent;\n\tborder: 0;\n\tmargin: 0;\n\tposition: absolute;\n\topacity: 0;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HiddenInput = _styledComponents2.default.input(_templateObject);

_styledComponents2.default.defaultProps = _defaultProps2.default;

exports.default = HiddenInput;