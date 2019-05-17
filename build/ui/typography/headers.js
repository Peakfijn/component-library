'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.H3 = exports.H2 = exports.H1 = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\ttext-decoration: none;\n\tmargin-top: 0;\n\tmargin-bottom: ', ';\n\t', '\n\tcolor: ', ';\n\tfont-size: ', ';\n\tfont-weight: normal;\n\t', '\n\n\t', '\n'], ['\n\ttext-decoration: none;\n\tmargin-top: 0;\n\tmargin-bottom: ', ';\n\t', '\n\tcolor: ', ';\n\tfont-size: ', ';\n\tfont-weight: normal;\n\t', '\n\n\t', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\ttext-decoration: none;\n\tmargin-top: 0;\n\tmargin-bottom: ', ';\n\t', '\n\tcolor: ', ' !important;\n\tfont-size: ', ';\n\tfont-weight: normal;\n\t', '\n\n\t', '\n'], ['\n\ttext-decoration: none;\n\tmargin-top: 0;\n\tmargin-bottom: ', ';\n\t', '\n\tcolor: ', ' !important;\n\tfont-size: ', ';\n\tfont-weight: normal;\n\t', '\n\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _modifier = require('./modifier');

var _modifier2 = _interopRequireDefault(_modifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject, function (props) {
	return props.theme.gutter.huge;
}, function (_ref) {
	var lineHeight = _ref.theme.lineHeight;
	return '\n\t\tline-height: ' + lineHeight.h1 + ';\n\t';
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.fontSize.gigantic;
}, _modifier2.default, function (_ref2) {
	var modifier = _ref2.modifier;
	return modifier === 'no-margin' && '\n\t\tmargin-bottom: 0;\n\t' || '';
});

var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject2, function (props) {
	return props.theme.gutter.medium;
}, function (_ref3) {
	var lineHeight = _ref3.theme.lineHeight;
	return '\n\t\tline-height: ' + lineHeight.h2 + ';\n\t';
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.fontSize.huge;
}, _modifier2.default, function (_ref4) {
	var modifier = _ref4.modifier;
	return modifier === 'no-margin' && '\n\t\tmargin-bottom: 0;\n\t' || '';
});

var H3 = exports.H3 = _styledComponents2.default.h3(_templateObject, function (props) {
	return props.theme.gutter.small;
}, function (_ref5) {
	var lineHeight = _ref5.theme.lineHeight;
	return '\n\t\tline-height: ' + lineHeight.h3 + ';\n\t';
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.fontSize.large;
}, _modifier2.default, function (_ref6) {
	var modifier = _ref6.modifier;
	return modifier === 'no-margin' && '\n\t\tmargin-bottom: 0;\n\t' || '';
});

H1.defaultProps = _defaultProps2.default;
H2.defaultProps = _defaultProps2.default;
H3.defaultProps = _defaultProps2.default;