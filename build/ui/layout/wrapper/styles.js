'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n'], ['\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperStyle = _styledComponents2.default.div(_templateObject, function (_ref) {
	var modifier = _ref.modifier,
	    align = _ref.align,
	    justify = _ref.justify,
	    wrap = _ref.wrap,
	    breakpoint = _ref.theme.breakpoint;
	return (modifier === 'flex' || modifier === "flex-column" || modifier === "flex-column-full") && '\n\t\tdisplay: flex;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\twidth: 100%;\n\n\t\t' + (modifier === "flex-column" && '\n\t\t\tflex-direction: column;\n\t\t' || '') + '\n\n\t\t' + (modifier === "flex-column-full" && '\n\t\t\tflex-direction: column;\n\t\t\theight: 100vh;\n\t\t\toverflow: hidden;\n\t\t' || '') + '\n\n\t\t' + (align && '\n\t\t\talign-items: ' + align + ';\n\t\t' || '') + '\n\n\t\t' + (justify && '\n\t\t\tjustify-content: ' + justify + ';\n\t\t' || '') + '\n\n\t\t' + (wrap && '\n\t\t\tflex-wrap: wrap;\n\t\t\t> * {\n\t\t\t\tflex-grow: 0 !important;\n\t\t\t}\n\n\t\t\t' + (Object.keys(wrap).map(function (key) {
		return '\n\t\t\t\t@media (max-width: ' + breakpoint[key] + ') {\n\t\t\t\t\t> * {\n\t\t\t\t\t\tflex-basis: ' + wrap[key] + ' !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t' || '';
	}).reverse().join(' ') || '') + '\n\t\t' || '') + '\n\t';
}, function (_ref2) {
	var modifier = _ref2.modifier,
	    grow = _ref2.grow;
	return modifier === 'flex-cell' && '\n\t\twhite-space: initial;\n\t\tflex: 1;\n\t\ttext-overflow: ellipsis;\n\t\tbox-sizing: border-box;\n\t\tword-wrap: break-word;\n\t\twidth: 100%;\n\n\t\t' + (grow && grow === "not-grow" && '\n\t\t\tflex-grow: 0;\n\t\t\tflex-shrink: 0;\n\t\t' || '') + '\n\t\t' + (grow && grow === "auto" && '\n\t\t\toverflow: auto;\n\t\t\tflex-grow: 1;\n\t\t\tflex-shrink: 1;\n\t\t' || '') + '\n\t\t' + (grow && grow === "auto" && '\n\t\t\tflex-basis: 50%;\n\t\t\tflex-shrink: 0;\n\t\t' || '') + '\n\t' || '';
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
	return background && '\n\t\t\tbackground: ' + theme.color.background[background] + ';\n\t' || '';
}, function (_ref7) {
	var horizontalGutter = _ref7.horizontalGutter,
	    theme = _ref7.theme,
	    grow = _ref7.grow;
	return horizontalGutter && '\n\t\t> * {\n\t\t\tpadding-left: ' + theme.gutter[horizontalGutter] + ';\n\t\t\tpadding-right: ' + theme.gutter[horizontalGutter] + ';\n\t\t}\n\t\t' + (grow === "fluid" && '\n\t\t\t> *:first-child {\n\t\t\t\tpadding-left: 0;\n\t\t\t}\n\t\t\t> *:last-child {\n\t\t\t\tpadding-right: 0;\n\t\t\t}\n\t\t' || '') + '\n\t' || '';
}, function (_ref8) {
	var verticalGutter = _ref8.verticalGutter,
	    theme = _ref8.theme,
	    grow = _ref8.grow;
	return verticalGutter && '\n\t\t> * {\n\t\t\tpadding-top: ' + theme.gutter[verticalGutter] + ';\n\t\t\tpadding-bottom: ' + theme.gutter[verticalGutter] + ';\n\t\t}\n\t\t' + (grow === "fluid" && '\n\t\t\t> *:first-child {\n\t\t\t\tpadding-top: 0;\n\t\t\t}\n\t\t\t> *:last-child {\n\t\t\t\tpadding-bottom: 0;\n\t\t\t}\n\t\t' || '') + '\n\t' || '';
}, function (_ref9) {
	var wrap = _ref9.wrap,
	    breakpoint = _ref9.theme.breakpoint;
	return wrap && '\n\t\t' + (Object.keys(wrap).map(function (key) {
		return '\n\t\t\t@media (max-width: ' + breakpoint[key] + ') {\n\t\t\t\t& {\n\t\t\t\t\tflex-basis: ' + wrap[key] + ' !important;\n\t\t\t\t}\n\t\t\t}\n\t\t' || '';
	}).reverse().join(' ') || '') + '\n\t' || '';
});

WrapperStyle.defaultProps = _defaultProps2.default;

exports.default = WrapperStyle;