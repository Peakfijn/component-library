'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputIcon = (0, _styledComponents2.default)(_reactFontawesome.FontAwesomeIcon).withConfig({
	displayName: 'styles1__InputIcon',
	componentId: 'sc-1b1fr6x-0'
})(['color:inherit;', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (_ref) {
	var modifier = _ref.modifier,
	    theme = _ref.theme;
	return modifier === "input-right" && '\n\t\tcolor: ' + theme.color.text.light + ';\n\t\tposition: absolute;\n\t\tright: ' + theme.gutter.small + ';\n\t\ttop: ' + theme.gutter.small + ';\n\t' || '';
}, function (_ref2) {
	var modifier = _ref2.modifier,
	    theme = _ref2.theme;
	return modifier === "input-left" && '\n\t\tcolor: ' + theme.color.text.light + ';\n\t\tposition: absolute;\n\t\tleft: ' + theme.gutter.small + ';\n\t\ttop: ' + theme.gutter.small + ';\n\t' || '';
}, function (_ref3) {
	var modifier = _ref3.modifier,
	    theme = _ref3.theme;
	return modifier === "error" && '\n\t\tcolor: ' + theme.color.danger + ';\n\t\tmargin-right: ' + theme.gutter.tiny + ';\n\t' || '';
}, function (_ref4) {
	var modifier = _ref4.modifier,
	    theme = _ref4.theme;
	return modifier === "left" && '\n\t\tmargin-right: ' + theme.gutter.tiny + ';\n\t' || '';
}, function (_ref5) {
	var modifier = _ref5.modifier,
	    theme = _ref5.theme;
	return modifier === "left" && '\n\t\tpadding-right: ' + theme.gutter.small + ';\n\t' || '';
}, function (props) {
	return props.height && '\n\t\theight: ' + props.height + ';\n\t' || '';
}, function (props) {
	return props.width && '\n\t\twidth: ' + props.width + ';\n\t' || '';
});

exports.default = InputIcon;