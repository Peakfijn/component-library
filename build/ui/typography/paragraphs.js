'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Caption = exports.Paragraph = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paragraph = exports.Paragraph = _styledComponents2.default.p.withConfig({
	displayName: 'paragraphs__Paragraph',
	componentId: 'sc-2q90gz-0'
})(['margin-top:', ';margin-bottom:', ';line-height:', ';color:', ';font-size:', ';', ''], function (props) {
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
	var modifier = _ref.modifier,
	    theme = _ref.theme;
	return modifier === 'light' && '\n\t\tcolor: ' + theme.color.text.light + ';\n\t' || '';
});

var Caption = exports.Caption = _styledComponents2.default.p.withConfig({
	displayName: 'paragraphs__Caption',
	componentId: 'sc-2q90gz-1'
})(['margin-top:', ';margin-bottom:', ';line-height:', ';color:', ';font-size:', ';', ' ', ''], function (props) {
	return props.theme.gutter.large;
}, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.fontSize.small;
}, function (props) {
	return props.theme.color.text.light;
}, function (props) {
	return props.theme.fontSize.tiny;
}, function (_ref2) {
	var isUpperCase = _ref2.isUpperCase;
	return isUpperCase && '\n\t\ttext-transform: uppercase;\n\t' || '';
}, function (_ref3) {
	var modifier = _ref3.modifier,
	    theme = _ref3.theme;
	return modifier === 'dark' && '\n\t\tcolor: ' + theme.color.text.normal + ';\n\t' || '';
});