'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Caption = exports.Paragraph = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\t', '\n\t', '\n'], ['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\t', '\n\t', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tmargin-top: 0;\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\t', '\n\t', '\n\t', '\n'], ['\n\tmargin-top: 0;\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\t', '\n\t', '\n\t', '\n']);

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
}, function (_ref) {
	var theme = _ref.theme,
	    _ref$fontSize = _ref.fontSize,
	    fontSize = _ref$fontSize === undefined ? 'medium' : _ref$fontSize;
	return fontSize && '\n\t\tfont-size: ' + theme.fontSize[fontSize] + ';\n\t' || '';
}, function (_ref2) {
	var theme = _ref2.theme,
	    _ref2$color = _ref2.color,
	    color = _ref2$color === undefined ? 'normal' : _ref2$color;
	return color && '\n\t\tcolor: ' + theme.color.text[color] + ';\n\t' || '';
});

var Caption = exports.Caption = _styledComponents2.default.p(_templateObject2, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.fontSize.small;
}, function (_ref3) {
	var color = _ref3.color,
	    theme = _ref3.theme;
	return color ? theme.color.text[color] : theme.color.text.light;
}, function (_ref4) {
	var theme = _ref4.theme,
	    _ref4$fontSize = _ref4.fontSize,
	    fontSize = _ref4$fontSize === undefined ? 'small' : _ref4$fontSize;
	return fontSize && '\n\t\tfont-size: ' + theme.fontSize[fontSize] + ';\n\t' || '';
}, function (_ref5) {
	var isUpperCase = _ref5.isUpperCase;
	return isUpperCase && '\n\t\ttext-transform: uppercase;\n\t' || '';
}, function (_ref6) {
	var theme = _ref6.theme,
	    _ref6$color = _ref6.color,
	    color = _ref6$color === undefined ? 'normal' : _ref6$color;
	return color && '\n\t\tcolor: ' + theme.color.text[color] + ';\n\t' || '';
});

Paragraph.defaultProps = _defaultProps2.default;
Caption.defaultProps = _defaultProps2.default;