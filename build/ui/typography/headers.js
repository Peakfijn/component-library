'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.H3 = exports.H2 = exports.H1 = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boldModifier = function boldModifier(_ref) {
	var isBold = _ref.isBold;
	return isBold && ('\n\tfont-weight: bold;\n\t' || '');
};

var H1 = exports.H1 = _styledComponents2.default.h1.withConfig({
	displayName: 'headers__H1',
	componentId: 'sc-19r2wxv-0'
})(['margin-top:0;margin-bottom:', ';', ' color:', ';font-size:', ';font-weight:normal;', ' ', ''], function (props) {
	return props.theme.gutter.huge;
}, function (_ref2) {
	var _ref2$theme = _ref2.theme,
	    fontSize = _ref2$theme.fontSize,
	    lineHeightMultiplier = _ref2$theme.lineHeightMultiplier;
	return '\n\t\tline-height: calc(' + fontSize.huge + ' ' + lineHeightMultiplier.h1 + ');\n\t';
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.fontSize.gigantic;
}, boldModifier, function (_ref3) {
	var modifier = _ref3.modifier;
	return modifier === 'modal-header' && '\n\t\tmargin: 0;\n\t' || '';
});

var H2 = exports.H2 = _styledComponents2.default.h2.withConfig({
	displayName: 'headers__H2',
	componentId: 'sc-19r2wxv-1'
})(['margin-top:0;margin-bottom:', ';', ' color:', ';font-size:', ';font-weight:normal;', ''], function (props) {
	return props.theme.gutter.medium;
}, function (_ref4) {
	var _ref4$theme = _ref4.theme,
	    fontSize = _ref4$theme.fontSize,
	    lineHeightMultiplier = _ref4$theme.lineHeightMultiplier;
	return '\n\t\tline-height: calc(' + fontSize.large + ' ' + lineHeightMultiplier.h2 + ');\n\t';
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.fontSize.huge;
}, boldModifier);

var H3 = exports.H3 = _styledComponents2.default.h3.withConfig({
	displayName: 'headers__H3',
	componentId: 'sc-19r2wxv-2'
})(['margin-top:0;margin-bottom:', ';', ' color:', ';font-size:', ';font-weight:normal;', ''], function (props) {
	return props.theme.gutter.small;
}, function (_ref5) {
	var _ref5$theme = _ref5.theme,
	    fontSize = _ref5$theme.fontSize,
	    lineHeightMultiplier = _ref5$theme.lineHeightMultiplier;
	return '\n\t\tline-height: calc(' + fontSize.large + ' ' + lineHeightMultiplier.h3 + ');\n\t';
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.fontSize.large;
}, boldModifier);