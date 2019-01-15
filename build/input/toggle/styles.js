'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slider = exports.Switch = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _switchState = require('../styles/switch-state');

var _switchState2 = _interopRequireDefault(_switchState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = exports.Switch = _styledComponents2.default.div.withConfig({
	displayName: 'styles__Switch',
	componentId: 'n1lthu-0'
})(['cursor:pointer;width:calc(', ' + (', ' * 2));height:', ';background-color:', ';border-radius:', ';transition:background-color 100ms ease-out;margin-right:', ';', ' ', ' ', ' ', ''], function (props) {
	return props.theme.componentSize.toggle.width;
}, function (props) {
	return props.theme.gutter.tiny;
}, function (props) {
	return props.theme.componentSize.toggle.height;
}, function (_ref) {
	var theme = _ref.theme;
	return (0, _polished.lighten)(theme.color.adjustColor.tiny, theme.color.grey);
}, function (props) {
	return props.theme.componentSize.toggle.height;
}, function (props) {
	return props.theme.gutter.small;
}, _switchState2.default, function (_ref2) {
	var focussed = _ref2.focussed,
	    theme = _ref2.theme;
	return focussed ? '\n\t\tbackground-color: ' + theme.color.grey + ';\n\t' : '';
}, function (_ref3) {
	var focussed = _ref3.focussed,
	    theme = _ref3.theme;
	return focussed ? '\n\t\tbackground-color: ' + theme.color.grey + ';\n\t' : '';
}, function (_ref4) {
	var focussed = _ref4.focussed,
	    selected = _ref4.selected,
	    theme = _ref4.theme;
	return focussed && selected ? '\n\t\tbackground-color: ' + (0, _polished.darken)(theme.color.adjustColor.tiny, theme.color.brand) + ';\n\t' : '';
});

var Slider = exports.Slider = _styledComponents2.default.div.withConfig({
	displayName: 'styles__Slider',
	componentId: 'n1lthu-1'
})(['cursor:pointer;background-color:', ';border-radius:', ';margin:', ';width:', ';height:', ';position:absolute;transition:left 100ms ease-out;', ''], function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.componentSize.slider;
}, function (props) {
	return props.theme.gutter.tiny;
}, function (props) {
	return props.theme.componentSize.slider;
}, function (props) {
	return props.theme.componentSize.slider;
}, function (_ref5) {
	var selected = _ref5.selected,
	    theme = _ref5.theme;
	return selected && '\n\t\tleft: calc(' + theme.componentSize.toggle.width + ' - ' + theme.componentSize.slider + ');\n\t' || '';
});