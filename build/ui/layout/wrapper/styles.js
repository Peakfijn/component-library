'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrapperStyle = _styledComponents2.default.div.withConfig({
	displayName: 'styles__WrapperStyle',
	componentId: 'sc-1cdz4ht-0'
})(['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (_ref) {
	var modifier = _ref.modifier,
	    align = _ref.align,
	    wrap = _ref.wrap,
	    breakpoint = _ref.theme.breakpoint;
	return modifier === 'flex' && '\n\t\tdisplay: flex;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\n\t\t' + (align && '\n\t\t\talign-items: ' + align + ';\n\t\t' || '') + '\n\n\t\t' + (wrap && '\n\t\t\tflex-wrap: wrap;\n\t\t\t> * {\n\t\t\t\tflex-grow: 0;\n\t\t\t}\n\n\t\t\t' + (Object.keys(wrap).map(function (key) {
		return '\n\t\t\t\t@media (max-width: ' + breakpoint[key] + ') {\n\t\t\t\t\t> * {\n\t\t\t\t\t\tflex-basis: ' + wrap[key] + ';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t' || '';
	}).reverse().join(' ') || '') + '\n\t\t' || '') + '\n\t';
}, function (_ref2) {
	var modifier = _ref2.modifier,
	    grow = _ref2.grow;
	return modifier === 'flex-cell' && '\n\t\twhite-space: initial;\n\t\tflex: 1;\n\t\ttext-overflow: ellipsis;\n\t\tbox-sizing: border-box;\n\t\tword-wrap: break-word;\n\n\t\t' + (grow && grow === "not-grow" && '\n\t\t\tflex-grow: 0;\n\t\t' || '') + '\n\t' || '';
}, function (_ref3) {
	var modifier = _ref3.modifier;
	return modifier === 'full' && '\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tposition: fixed;\n\t\toverflow: auto;\n\t' || '';
}, function (_ref4) {
	var modifier = _ref4.modifier,
	    gutter = _ref4.theme.gutter;
	return modifier === 'full-right' && '\n\t\theight: 100%;\n\t\tmax-width: calc(100% - ' + gutter.medium + ');\n\t\tposition: fixed;\n\t\toverflow: auto;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tright: 0;\n\t' || '';
}, function (_ref5) {
	var modifier = _ref5.modifier;
	return modifier === 'bottom-right' && '\n\t\tposition: fixed;\n\t\tright: 0;\n\t\tbottom: 0;\n\t' || '';
}, function (_ref6) {
	var background = _ref6.background,
	    theme = _ref6.theme;
	return background && '\n\t\t\tbackground: ' + theme.color.background['' + background] + ';\n\t' || '';
}, function (_ref7) {
	var horizontalGutter = _ref7.horizontalGutter,
	    theme = _ref7.theme;
	return horizontalGutter && '\n\t\t> * {\n\t\t\tpadding-left: ' + theme.gutter['' + horizontalGutter] + ';\n\t\t\tpadding-right: ' + theme.gutter['' + horizontalGutter] + ';\n\t\t}\n\t' || '';
}, function (_ref8) {
	var verticalGutter = _ref8.verticalGutter,
	    theme = _ref8.theme;
	return verticalGutter && '\n\t\t> * {\n\t\t\tpadding-top: ' + theme.gutter['' + verticalGutter] + ';\n\t\t\tpadding-bottom: ' + theme.gutter['' + verticalGutter] + ';\n\t\t}\n\t' || '';
});

exports.default = WrapperStyle;