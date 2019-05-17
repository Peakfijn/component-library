'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Typography = exports.Caption = exports.Emphasis = exports.Paragraph = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\t', '\n\tcolor: ', ';\n\t', '\n\t', '\n'], ['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\t', '\n\tcolor: ', ';\n\t', '\n\t', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t', '\n\tcolor: ', ';\n\t', '\n\t', '\n'], ['\n\t', '\n\tcolor: ', ';\n\t', '\n\t', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tmargin-top: 0;\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\t', '\n\t', '\n\t', '\n'], ['\n\tmargin-top: 0;\n\tmargin-bottom: ', ';\n\tline-height: ', ';\n\tcolor: ', ';\n\t', '\n\t', '\n\t', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t', '\n\t', '\n'], ['\n\t', '\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _modifier = require('./modifier');

var _modifier2 = _interopRequireDefault(_modifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Paragraph = exports.Paragraph = _styledComponents2.default.p(_templateObject, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.gutter.medium;
}, function (_ref) {
	var lineHeight = _ref.theme.lineHeight;
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

var Emphasis = exports.Emphasis = _styledComponents2.default.span(_templateObject2, function (_ref4) {
	var theme = _ref4.theme,
	    _ref4$lineHeight = _ref4.lineHeight,
	    lineHeight = _ref4$lineHeight === undefined ? 'paragraph' : _ref4$lineHeight;
	return lineHeight && '\n\t\tline-height: ' + theme.lineHeight[lineHeight] + ';\n\t' || '';
}, function (props) {
	return props.theme.color.text.normal;
}, function (_ref5) {
	var theme = _ref5.theme,
	    _ref5$fontSize = _ref5.fontSize,
	    fontSize = _ref5$fontSize === undefined ? 'medium' : _ref5$fontSize;
	return fontSize && '\n\t\tfont-size: ' + theme.fontSize[fontSize] + ';\n\t' || '';
}, function (_ref6) {
	var theme = _ref6.theme,
	    _ref6$color = _ref6.color,
	    color = _ref6$color === undefined ? 'normal' : _ref6$color;
	return color && '\n\t\tcolor: ' + theme.color.text[color] + ';\n\t' || '';
});

var Caption = exports.Caption = _styledComponents2.default.p(_templateObject3, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.lineHeight.paragraph;
}, function (_ref7) {
	var color = _ref7.color,
	    theme = _ref7.theme;
	return color ? theme.color.text[color] : theme.color.text.light;
}, function (_ref8) {
	var theme = _ref8.theme,
	    _ref8$fontSize = _ref8.fontSize,
	    fontSize = _ref8$fontSize === undefined ? 'small' : _ref8$fontSize;
	return fontSize && '\n\t\tfont-size: ' + theme.fontSize[fontSize] + ';\n\t' || '';
}, function (_ref9) {
	var isUpperCase = _ref9.isUpperCase;
	return isUpperCase && '\n\t\ttext-transform: uppercase;\n\t' || '';
}, function (_ref10) {
	var theme = _ref10.theme,
	    _ref10$color = _ref10.color,
	    color = _ref10$color === undefined ? 'normal' : _ref10$color;
	return color && '\n\t\tcolor: ' + theme.color.text[color] + ';\n\t' || '';
});

var Typography = exports.Typography = _styledComponents2.default.p(_templateObject4, function (_ref11) {
	var type = _ref11.type,
	    color = _ref11.color,
	    theme = _ref11.theme;
	return type && theme.typography && function (typographyThemeConfiguration) {
		return typographyThemeConfiguration && '\n\t\tfont-size: ' + theme.fontSize[typographyThemeConfiguration.size] + ';\n\t\t' + (typographyThemeConfiguration.weight && 'font-weight: ' + typographyThemeConfiguration.weight + ';' || '') + '\n\t\t' + (typographyThemeConfiguration.family && 'font-family: ' + typographyThemeConfiguration.family + ';' || '') + '\n\t\t' + (typographyThemeConfiguration.transform && 'text-transform: ' + typographyThemeConfiguration.transform + ';' || '') + '\n\t\t' + (typographyThemeConfiguration.spacing && 'letter-spacing: ' + typographyThemeConfiguration.spacing + ';' || '') + '\n\t\t' + (typographyThemeConfiguration.lineHeight && 'line-height: ' + typographyThemeConfiguration.lineHeight + ';' || '') + '\n\t\t' + ((color || theme.color.text[typographyThemeConfiguration.color]) && '\n\t\t\tcolor: ' + (color || theme.color.text[typographyThemeConfiguration.color]) + ';\n\t\t' || '') + '\n\t' || '';
	}(theme.typography[type]);
}, _modifier2.default);

Typography.defaultProps = _defaultProps2.default;
Paragraph.defaultProps = _defaultProps2.default;
Caption.defaultProps = _defaultProps2.default;