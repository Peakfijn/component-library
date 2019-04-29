'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Caption = exports.Paragraph = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\t', '\n\tcolor: ', ';\n\t', '\n\t', '\n'], ['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\t', '\n\tcolor: ', ';\n\t', '\n\t', '\n']),
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
}, function (_ref) {
	var _ref$theme = _ref.theme,
	    fontSize = _ref$theme.fontSize,
	    lineHeight = _ref$theme.lineHeight;
	return '\n\t\tline-height: ' + lineHeight.paragraph + ';\n\t';
}, function (props) {
	return props.theme.color.text.normal;
}, function (_ref2) {
	var theme = _ref2.theme,
	    _ref2$fontSize = _ref2.fontSize,
	    fontSize = _ref2$fontSize === undefined ? 'medium' : _ref2$fontSize;
	return fontSize && '\n\t\tfont-size: ' + theme.fontSize[fontSize] + ';\n\t' || '';
}, function (_ref3) {
	var theme = _ref3.theme,
	    _ref3$color = _ref3.color,
	    color = _ref3$color === undefined ? 'normal' : _ref3$color;
	return color && '\n\t\tcolor: ' + theme.color.text[color] + ';\n\t' || '';
});

var Caption = exports.Caption = _styledComponents2.default.p(_templateObject2, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.lineHeight.paragraph;
}, function (_ref4) {
	var color = _ref4.color,
	    theme = _ref4.theme;
	return color ? theme.color.text[color] : theme.color.text.light;
}, function (_ref5) {
	var theme = _ref5.theme,
	    _ref5$fontSize = _ref5.fontSize,
	    fontSize = _ref5$fontSize === undefined ? 'small' : _ref5$fontSize;
	return fontSize && '\n\t\tfont-size: ' + theme.fontSize[fontSize] + ';\n\t' || '';
}, function (_ref6) {
	var isUpperCase = _ref6.isUpperCase;
	return isUpperCase && '\n\t\ttext-transform: uppercase;\n\t' || '';
}, function (_ref7) {
	var theme = _ref7.theme,
	    _ref7$color = _ref7.color,
	    color = _ref7$color === undefined ? 'normal' : _ref7$color;
	return color && '\n\t\tcolor: ' + theme.color.text[color] + ';\n\t' || '';
});

Paragraph.defaultProps = _defaultProps2.default;
Caption.defaultProps = _defaultProps2.default;