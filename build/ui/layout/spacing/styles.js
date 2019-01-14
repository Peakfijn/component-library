'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpacingStyle = _styledComponents2.default.div.withConfig({
	displayName: 'styles__SpacingStyle',
	componentId: 'sc-1ebimj7-0'
})(['box-sizing:border-box;margin-right:auto;margin-left:auto;line-height:initial;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (_ref) {
	var horizontal = _ref.horizontal,
	    theme = _ref.theme;
	return horizontal && '\n\t\tpadding-left: ' + theme.gutter['' + horizontal] + ';\n\t\tpadding-right: ' + theme.gutter['' + horizontal] + ';\n\t' || '';
}, function (_ref2) {
	var vertical = _ref2.vertical,
	    theme = _ref2.theme;
	return vertical && '\n\t\tpadding-top: ' + theme.gutter['' + vertical] + ';\n\t\tpadding-bottom: ' + theme.gutter['' + vertical] + ';\n\t' || '';
}, function (_ref3) {
	var minAtBreakpoint = _ref3.minAtBreakpoint,
	    _ref3$theme = _ref3.theme,
	    gutter = _ref3$theme.gutter,
	    breakpoint = _ref3$theme.breakpoint;
	return minAtBreakpoint && Object.keys(minAtBreakpoint).map(function (key) {
		return '\n\t\t\t@media (max-width: ' + breakpoint[key] + ') {\n\t\t\t\t' + (minAtBreakpoint[key].horizontal && '\n\t\t\t\t\tpadding-left: ' + gutter['' + minAtBreakpoint[key].horizontal] + ';\n\t\t\t\t\tpadding-right: ' + gutter['' + minAtBreakpoint[key].horizontal] + ';\n\t\t\t\t' || '') + '\n\n\t\t\t\t' + (minAtBreakpoint[key].vertical && '\n\t\t\t\t\tpadding-top: ' + gutter['' + minAtBreakpoint[key].vertical] + ';\n\t\t\t\t\tpadding-bottom: ' + gutter['' + minAtBreakpoint[key].vertical] + ';\n\t\t\t\t' || '') + '\n\t\t\t}\n\t\t' || '';
	}) || '';
}, function (_ref4) {
	var maxAtBreakpoint = _ref4.maxAtBreakpoint,
	    _ref4$theme = _ref4.theme,
	    gutter = _ref4$theme.gutter,
	    breakpoint = _ref4$theme.breakpoint;
	return maxAtBreakpoint && Object.keys(maxAtBreakpoint).map(function (key) {
		return breakpoint[key] && '\n\t\t\t@media (max-width: ' + breakpoint[key] + ') {\n\t\t\t\t' + (maxAtBreakpoint[key].horizontal && '\n\t\t\t\t\tpadding-left: ' + gutter['' + maxAtBreakpoint[key].horizontal] + ';\n\t\t\t\t\tpadding-right: ' + gutter['' + maxAtBreakpoint[key].horizontal] + ';\n\t\t\t\t' || '') + '\n\n\t\t\t\t' + (breakpoint[key].vertical && '\n\t\t\t\t\tpadding-top: ' + gutter['' + maxAtBreakpoint[key].vertical] + ';\n\t\t\t\t\tpadding-bottom: ' + gutter['' + maxAtBreakpoint[key].vertical] + ';\n\t\t\t\t' || '') + '\n\t\t\t}\n\t\t' || '';
	}) || '';
}, function (_ref5) {
	var maxWidthBreakpoint = _ref5.maxWidthBreakpoint,
	    breakpoint = _ref5.theme.breakpoint;
	return Object.keys(breakpoint).map(function (key) {
		return '\n\t\t\t' + (maxWidthBreakpoint === key && '\n\t\t\t\tmax-width: ' + breakpoint[key] + ';\n\t\t\t' || '') + '\n\t\t' || '';
	}) || '';
}, function (_ref6) {
	var modifier = _ref6.modifier;
	return modifier === 'not-bottom' && '\n\t\tpadding-bottom: 0 !important;\n\t' || '';
}, function (_ref7) {
	var modifier = _ref7.modifier;
	return modifier === 'not-right' && '\n\t\tpadding-right: 0 !important;\n\t' || '';
}, function (_ref8) {
	var modifier = _ref8.modifier;
	return modifier === 'not-left' && '\n\t\tpadding-left: 0 !important;\n\t' || '';
}, function (_ref9) {
	var modifier = _ref9.modifier;
	return modifier === 'not-top' && '\n\t\tpadding-top: 0 !important;\n\t' || '';
}, function (_ref10) {
	var isWide = _ref10.isWide;
	return isWide && '\n\t\twidth: 100%;\n\t' || '';
}, function (_ref11) {
	var modifier = _ref11.modifier;
	return modifier === 'only-top' && '\n\t\tpadding-right: 0 !important;\n\t\tpadding-bottom: 0 !important;\n\t\tpadding-left: 0 !important;\n\t' || '';
}, function (_ref12) {
	var modifier = _ref12.modifier;
	return modifier === 'only-right' && '\n\t\tpadding-top: 0 !important;\n\t\tpadding-bottom: 0 !important;\n\t\tpadding-left: 0 !important;\n\t' || '';
}, function (_ref13) {
	var modifier = _ref13.modifier;
	return modifier === 'only-bottom' && '\n\t\tpadding-top: 0 !important;\n\t\tpadding-right: 0 !important;\n\t\tpadding-left: 0 !important;\n\t' || '';
}, function (_ref14) {
	var modifier = _ref14.modifier;
	return modifier === 'only-left' && '\n\t\tpadding-top: 0 !important;\n\t\tpadding-right: 0 !important;\n\t\tpadding-bottom: 0 !important;\n\t' || '';
}, function (_ref15) {
	var modifier = _ref15.modifier,
	    theme = _ref15.theme;
	return modifier === 'modal-header' && '\n\t\tmargin-left: 0;\n\t\tborder-bottom: 1px solid ' + theme.color.border.light + ';\n\t';
}, function (_ref16) {
	var modifier = _ref16.modifier;
	return modifier === 'only-vertical' && '\n\t\tpadding-left: 0 !important;\n\t\tpadding-right: 0 !important;\n\t' || '';
}, function (_ref17) {
	var modifier = _ref17.modifier;
	return modifier === 'only-horizontal' && '\n\t\tpadding-top: 0 !important;\n\t\tpadding-bottom: 0 !important;\n\t' || '';
});

exports.default = SpacingStyle;