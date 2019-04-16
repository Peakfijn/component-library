'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Caption = exports.Paragraph = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\tfont-size: ', ';\n\t', '\n'], ['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\tfont-size: ', ';\n\t', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\tfont-size: ', ';\n\t', '\n\t', '\n'], ['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\tfont-size: ', ';\n\t', '\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Paragraph = exports.Paragraph = _styledComponents2.default.p(_templateObject, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.fontSize.medium;
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.fontSize.medium;
}, function (_ref) {
	var theme = _ref.theme,
	    _ref$color = _ref.color,
	    color = _ref$color === undefined ? 'normal' : _ref$color;
	return color && '\n\t\tcolor: ' + theme.color.text[color] + ';\n\t' || '';
});

var Caption = exports.Caption = _styledComponents2.default.p(_templateObject2, function (props) {
	return props.theme.gutter.large;
}, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.fontSize.small;
}, function (_ref2) {
	var color = _ref2.color,
	    theme = _ref2.theme;
	return color ? theme.color.text[color] : theme.color.text.light;
}, function (props) {
	return props.theme.fontSize.tiny;
}, function (_ref3) {
	var isUpperCase = _ref3.isUpperCase;
	return isUpperCase && '\n\t\ttext-transform: uppercase;\n\t' || '';
}, function (_ref4) {
	var theme = _ref4.theme,
	    _ref4$color = _ref4.color,
	    color = _ref4$color === undefined ? 'normal' : _ref4$color;
	return color && '\n\t\tcolor: ' + theme.color.text[color] + ';\n\t' || '';
});

Paragraph.defaultProps = _defaultProps2.default;
Caption.defaultProps = _defaultProps2.default;