'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slider = exports.Switch = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _switchState = require('../styles/switch-state');

var _switchState2 = _interopRequireDefault(_switchState);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = exports.Switch = _styledComponents2.default.div.withConfig({
	displayName: 'styles__Switch',
	componentId: 'sc-1p91ebh-0'
})(['cursor:pointer;position:relative;display:inline-block;width:', ';height:', ';background-color:', ';border-radius:', ';border:1px solid ', ';margin-right:', ';', ''], function (props) {
	return props.theme.componentSize.radio;
}, function (props) {
	return props.theme.componentSize.radio;
}, function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.componentSize.radio;
}, function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.gutter.small;
}, _switchState2.default);

var Slider = exports.Slider = _styledComponents2.default.div.withConfig({
	displayName: 'styles__Slider',
	componentId: 'sc-1p91ebh-1'
})(['cursor:pointer;margin:', ';border-radius:', ';width:', ';height:', ';position:absolute;top:', ';bottom:', ';left:', ';right:', ';', ' ', ''], function (props) {
	return props.theme.gutter.none;
}, function (props) {
	return props.theme.componentSize.dot;
}, function (props) {
	return props.theme.componentSize.dot;
}, function (props) {
	return props.theme.componentSize.dot;
}, function (props) {
	return props.theme.gutter.tiny;
}, function (props) {
	return props.theme.gutter.tiny;
}, function (props) {
	return props.theme.gutter.tiny;
}, function (props) {
	return props.theme.gutter.tiny;
}, function (_ref) {
	var selected = _ref.selected,
	    theme = _ref.theme;
	return selected && '\n\t\tbackground-color: ' + theme.color.background.input + ';\n\t' || '';
}, function (_ref2) {
	var selected = _ref2.selected,
	    disabled = _ref2.disabled,
	    theme = _ref2.theme;
	return selected && disabled && '\n\t\tbackground-color: ' + theme.color.background.input + ';\n\t\tcursor: not-allowed;\n\t' || '';
});

Switch.defaultProps = _defaultProps2.default;
Slider.defaultProps = _defaultProps2.default;