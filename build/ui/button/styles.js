'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _size = require('./modifiers/size');

var _size2 = _interopRequireDefault(_size);

var _fontSize = require('./modifiers/font-size');

var _fontSize2 = _interopRequireDefault(_fontSize);

var _borderRadius = require('./modifiers/border-radius');

var _borderRadius2 = _interopRequireDefault(_borderRadius);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themeColor = function themeColor(key, props) {
	return props.theme.color[key];
};

var applyForState = function applyForState(state, props) {
	return props.state === state ? ', &' : '';
};

var StyledButton = _styledComponents2.default.button.withConfig({
	displayName: 'styles__StyledButton',
	componentId: 'sc-1shn4a8-0'
})(['box-sizing:border-box;display:inline-block;margin-bottom:', ';outline:none;border:1px solid transparent;border-radius:', ';cursor:pointer;width:', ';text-transform:none;text-decoration:none;font-family:inherit;', ' ', ' ', ' ', ' ', ' ', ';', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.width;
}, function (props) {
	return props.modifier === 'full' && '\n\t\twidth: 100%;\n\t';
}, function (_ref) {
	var modifier = _ref.modifier;
	return modifier === 'no-margin' && '\n\tmargin-bottom: 0;\n' || '';
}, function (_ref2) {
	var color = _ref2.color,
	    themeColors = _ref2.theme.color,
	    state = _ref2.state;
	return (color === "primary" || color === "success" || color === "danger" || color === "info") && '\n\t\tbackground-color: ' + themeColors[color] + ';\n\t\tcolor: ' + themeColors.text.inverted + ';\n\t\tborder: 1px solid ' + (0, _polished.darken)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\t\t' + ((state === 'hover' || state === 'focus' || state === 'active') && '\n\t\t\tbackground-color: ' + (0, _polished.lighten)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\t\t' || '') + '\n\t\t' + (state === 'active' && '\n\t\t\tbackground-color: ' + (0, _polished.darken)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\t\t' || '') + '\n\n\t\t:hover:enabled,\n\t\t:focus:enabled\t{\n\t\t\tbackground-color: ' + (0, _polished.lighten)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\t\t}\n\t\t:active:enabled\t{\n\t\t\tbackground-color: ' + (0, _polished.darken)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\t\t}\n\t' || '';
}, function (_ref3) {
	var color = _ref3.color,
	    themeColors = _ref3.theme.color,
	    state = _ref3.state;
	return (color === 'secondary' || color === 'normal') && '\n\t\tbackground-color: ' + themeColors[color] + ';\n\t\tcolor: ' + themeColors.text.normal + ';\n\t\tborder: 1px solid ' + (0, _polished.darken)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\n\t\t' + ((state === 'hover' || state === 'focus' || state === 'active') && '\n\t\t\tbackground-color: ' + (0, _polished.lighten)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\t\t' || '') + '\n\t\t' + (state === 'active' && '\n\t\t\tbackground-color: ' + (0, _polished.darken)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\t\t' || '') + '\n\n\t\t:hover:enabled,\n\t\t:focus:enabled\t{\n\t\t\tbackground-color: ' + (0, _polished.lighten)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\t\t}\n\t\t:active:enabled\t{\n\t\t\tbackground-color: ' + (0, _polished.darken)(themeColors.adjustColor.tiny, themeColors[color]) + ';\n\t\t}\n\t' || '';
}, function (props) {
	return props.disabled && '\n\t\tbackground-color: ' + props.theme.color.background.inputDisabled + ';\n\t\tcolor: ' + themeColor('grey', props) + ';\n\t\tborder: 1px solid ' + themeColor('grey', props) + ';\n\t\tcursor: not-allowed;\n\t' || '';
}, function (props) {
	return props.modifier === 'invisible' && '\n\t\tbackground-color: transparent;\n\t\tcolor: inherit;\n\t\tpadding: 0 ' + props.theme.gutter.medium + ';\n\t\tline-height: ' + props.theme.gutter.medium + ';\n\t\tborder: 1px solid transparent;\n\t\tmargin: 0;\n\t\t&:hover:enabled,\n\t\t&:focus:enabled\t{\n\t\t\tbackground-color: transparent;\n\t\t}\n\t\t&:active:enabled\t{\n\t\t\tbackground-color: transparent;\n\t\t}\n\t' || '';
}, function (props) {
	return props.modifier === "light" && '\n\t\tbackground-color: ' + themeColor('inverseText', props) + ';\n\t\tcolor: ' + themeColor('grey', props) + ';\n\t\tborder: 1px solid ' + themeColor('inverseText', props) + ';\n\t\tborder: 1px solid ' + themeColor('grey', props) + ';\n\t\tborder-radius: 50px;\n\t\twidth: ' + props.width + ';\n\t\theight: ' + props.height + ';\n\n\t\t:active:enabled ' + applyForState('active', props) + '\t{\n\t\t\tbackground-color: ' + (0, _polished.darken)(themeColor('darkenActivePercentage', props), themeColor('inverseText', props)) + '\n\t\t}\n\t\t:hover:enabled ' + applyForState('hover', props) + '\t{\n\t\t\tbackground-color: ' + (0, _polished.lighten)(themeColor('lightenHoverPercentage', props), themeColor('inverseText', props)) + '\n\t\t}\n\t\t:focus:enabled ' + applyForState('focus', props) + ' {\n\t\t\tbackground-color: ' + (0, _polished.darken)(themeColor('darkenFocusPercentage', props), themeColor('inverseText', props)) + '\n\t\t}\n\t' || '';
}, function (props) {
	return props.modifier === "dark" && '\n\t\tbackground-color: ' + themeColor('socialDarkColor', props) + ';\n\t\tcolor: ' + themeColor('inverseText', props) + ';\n\t\tborder: 1px solid ' + themeColor('socialDarkColor', props) + ';\n\t\tborder: none;\n\t\tborder-radius: 50px;\n\t\twidth: ' + props.width + ';\n\t\theight: ' + props.height + ';\n\t\tpadding: unset;\n\n\t\t:active:enabled ' + applyForState('active', props) + '\t{\n\t\t\tbackground-color:\n\t\t\t' + (0, _polished.darken)(themeColor('darkenActivePercentage', props), themeColor('socialDarkColor', props)) + '\n\t\t}\n\t\t:hover:enabled ' + applyForState('hover', props) + '\t{\n\t\t\tbackground-color:\n\t\t\t' + (0, _polished.lighten)(themeColor('lightenHoverPercentage', props), themeColor('socialDarkColor', props)) + '\n\t\t}\n\t\t:focus:enabled ' + applyForState('focus', props) + ' {\n\t\t\tbackground-color:\n\t\t\t' + (0, _polished.darken)(themeColor('darkenFocusPercentage', props), themeColor('socialDarkColor', props)) + '\n\t\t}\n\t';
}, _size2.default, _fontSize2.default, _borderRadius2.default, function (props) {
	return props.noPadding && '\n\t\tpadding: 0 !important;\n\t' || '';
});

exports.default = StyledButton;