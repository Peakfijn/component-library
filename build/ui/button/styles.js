'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\tmargin-bottom: ', ';\n\toutline: none;\n\tborder: 1px solid transparent;\n\tborder-radius: ', ';\n\tcursor: pointer;\n\twidth: ', ';\n\ttext-transform: none;\n\ttext-decoration: none;\n\tfont-family: inherit;\n\n\t/* Modifier: full-width */\n\t', '\n\n\t', '\n\n\t/* Apply color and state styling */\n\t', '\n\n\t/* Modifier: disabled */\n\t', '\n\n\t/* Modifier: invisible */\n\t', ';\n\n\t/* Modifier: ghost */\n\t', '\n\n\t', '\n\n\t/* Modifier: light */\n\t', '\n\n\t/* Modifier: dark */\n\t', '\n\n\t/* Modifiers: size */\n\t', '\n\n\t/* Modifiers: fontSize */\n\t', '\n\n\t/* Modifiers: borderRadius */\n\t', '\n\n\t', '\n'], ['\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\tmargin-bottom: ', ';\n\toutline: none;\n\tborder: 1px solid transparent;\n\tborder-radius: ', ';\n\tcursor: pointer;\n\twidth: ', ';\n\ttext-transform: none;\n\ttext-decoration: none;\n\tfont-family: inherit;\n\n\t/* Modifier: full-width */\n\t', '\n\n\t', '\n\n\t/* Apply color and state styling */\n\t', '\n\n\t/* Modifier: disabled */\n\t', '\n\n\t/* Modifier: invisible */\n\t', ';\n\n\t/* Modifier: ghost */\n\t', '\n\n\t', '\n\n\t/* Modifier: light */\n\t', '\n\n\t/* Modifier: dark */\n\t', '\n\n\t/* Modifiers: size */\n\t', '\n\n\t/* Modifiers: fontSize */\n\t', '\n\n\t/* Modifiers: borderRadius */\n\t', '\n\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _size = require('./modifiers/size');

var _size2 = _interopRequireDefault(_size);

var _fontSize = require('./modifiers/font-size');

var _fontSize2 = _interopRequireDefault(_fontSize);

var _borderRadius = require('./modifiers/border-radius');

var _borderRadius2 = _interopRequireDefault(_borderRadius);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var themeColor = function themeColor(key, theme) {
	return theme.color[key] || theme.color.normal;
};

var applyForState = function applyForState(state, props) {
	return props.state === state ? ', &' : '';
};

/*
 * Returns the proper text color, depending on the background color and whether or not a specific text color has been 
 * specified.
 */
var getTextColor = function getTextColor(color, text, themeColors) {
	if (text) return themeColors.text[text];
	if (themeColors.invertedTextColors && themeColors.invertedTextColors.includes(color)) {
		return themeColors.text.inverted;
	}
	return themeColors.text.normal;
};

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.width;
}, function (props) {
	return (props.modifier === 'full' || props.modifier === 'ghost-full') && '\n\t\twidth: 100%;\n\t';
}, function (_ref) {
	var modifier = _ref.modifier;
	return modifier === 'no-margin' && '\n\t\tmargin-bottom: 0;\n\t' || '';
}, function (_ref2) {
	var modifier = _ref2.modifier,
	    color = _ref2.color,
	    text = _ref2.text,
	    theme = _ref2.theme,
	    state = _ref2.state;
	return modifier !== 'text' && '\n\t\tbackground-color: ' + themeColor(color, theme) + ';\n\t\tcolor: ' + getTextColor(color, text, theme.color) + ';\n\t\tborder: 1px solid ' + (0, _polished.darken)(theme.color.adjustColor.tiny, themeColor(color, theme)) + ';\n\t\t' + ((state === 'hover' || state === 'focus' || state === 'active') && '\n\t\t\tbackground-color: ' + (0, _polished.lighten)(theme.color.adjustColor.tiny, themeColor(color, theme)) + ';\n\t\t' || '') + '\n\t\t' + (state === 'active' && '\n\t\t\tbackground-color: ' + (0, _polished.darken)(theme.color.adjustColor.tiny, themeColor(color, theme)) + ';\n\t\t' || '') + '\n\n\t\t:hover:enabled,\n\t\t:focus:enabled\t{\n\t\t\tbackground-color: ' + (0, _polished.lighten)(theme.color.adjustColor.tiny, themeColor(color, theme)) + ';\n\t\t}\n\t\t:active:enabled\t{\n\t\t\tbackground-color: ' + (0, _polished.darken)(theme.color.adjustColor.tiny, themeColor(color, theme)) + ';\n\t\t}\n\t' || '';
}, function (_ref3) {
	var color = _ref3.theme.color,
	    disabled = _ref3.disabled;
	return disabled && '\n\t\tbackground-color: ' + color.background.inputDisabled + ';\n\t\tcolor: ' + color.text.disabled + ';\n\t\tborder: 1px solid ' + (0, _polished.lighten)(color.adjustColor.tiny, color.background.inputDisabled) + ';\n\t\tcursor: not-allowed;\n\t' || '';
}, function (props) {
	return props.modifier === 'invisible' && '\n\t\tbackground-color: transparent;\n\t\tcolor: inherit;\n\t\tpadding: 0 ' + props.theme.gutter.medium + ';\n\t\tline-height: ' + props.theme.gutter.medium + ';\n\t\tborder: 1px solid transparent;\n\t\tmargin: 0;\n\t\t&:hover:enabled,\n\t\t&:focus:enabled\t{\n\t\t\tbackground-color: transparent;\n\t\t}\n\t\t&:active:enabled {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t' || '';
}, function (_ref4) {
	var modifier = _ref4.modifier,
	    color = _ref4.color,
	    theme = _ref4.theme,
	    state = _ref4.state,
	    width = _ref4.width,
	    height = _ref4.height;
	return (modifier === 'ghost' || modifier === 'ghost-full') && '\n\t\tbackground-color: transparent;\n\t\tcolor: ' + themeColor(color, theme) + ';\n\t\tborder: 1px solid ' + themeColor(color, theme) + ';\n\t\t' + ((state === 'hover' || state === 'focus' || state === 'active') && '\n\t\t\tborder: 1px solid ' + (0, _polished.lighten)(theme.color.adjustColor.tiny, themeColor(color, theme)) + ';\n\t\t' || '') + '\n\t\t' + (state === 'active' && '\n\t\t\tborder: 1px solid ' + (0, _polished.darken)(theme.color.adjustColor.tiny, themeColor(color, theme)) + ';\n\t\t' || '') + '\n\t\twidth: ' + width + ';\n\t\theight: ' + height + ';\n\n\t\t:hover:enabled,\n\t\t:focus:enabled\t{\n\t\t\tborder: 1px solid ' + (0, _polished.lighten)(theme.color.adjustColor.tiny, themeColor(color, theme)) + ';\n\t\t\tbackground-color: transparent;\n\t\t}\n\t\t:active:enabled\t{\n\t\t\tborder: 1px solid ' + (0, _polished.darken)(theme.color.adjustColor.tiny, themeColor(color, theme)) + ';\n\t\t\tbackground-color: transparent;\n\t\t}\n\t' || '';
}, function (_ref5) {
	var modifier = _ref5.modifier,
	    color = _ref5.color,
	    theme = _ref5.theme;
	return modifier === 'text' && '\n\t\tbackground-color: transparent;\n\t\tcolor: ' + themeColor(color, theme) + ';\n\t\tborder: none;\n\t' || '';
}, function (_ref6) {
	var modifier = _ref6.modifier,
	    theme = _ref6.theme,
	    width = _ref6.width,
	    height = _ref6.height;
	return modifier === "light" && '\n\t\tbackground-color: ' + themeColor('inverseText', theme) + ';\n\t\tcolor: ' + themeColor('grey', theme) + ';\n\t\tborder: 1px solid ' + themeColor('inverseText', theme) + ';\n\t\tborder: 1px solid ' + themeColor('grey', theme) + ';\n\t\tborder-radius: 50px;\n\t\twidth: ' + width + ';\n\t\theight: ' + height + ';\n\n\t\t:active:enabled ' + applyForState('active', theme) + '\t{\n\t\t\tbackground-color: ' + (0, _polished.darken)(themeColor('darkenActivePercentage', theme), themeColor('inverseText', theme)) + '\n\t\t}\n\t\t:hover:enabled ' + applyForState('hover', theme) + '\t{\n\t\t\tbackground-color: ' + (0, _polished.lighten)(themeColor('lightenHoverPercentage', theme), themeColor('inverseText', theme)) + '\n\t\t}\n\t\t:focus:enabled ' + applyForState('focus', theme) + ' {\n\t\t\tbackground-color: ' + (0, _polished.darken)(themeColor('darkenFocusPercentage', theme), themeColor('inverseText', theme)) + '\n\t\t}\n\t' || '';
}, function (_ref7) {
	var modifier = _ref7.modifier,
	    theme = _ref7.theme,
	    width = _ref7.width,
	    height = _ref7.height;
	return modifier === "dark" && '\n\t\tbackground-color: ' + themeColor('socialDarkColor', theme) + ';\n\t\tcolor: ' + themeColor('inverseText', theme) + ';\n\t\tborder: 1px solid ' + themeColor('socialDarkColor', theme) + ';\n\t\tborder: none;\n\t\tborder-radius: 50px;\n\t\twidth: ' + width + ';\n\t\theight: ' + height + ';\n\t\tpadding: unset;\n\n\t\t:active:enabled ' + applyForState('active', theme) + '\t{\n\t\t\tbackground-color:\n\t\t\t' + (0, _polished.darken)(themeColor('darkenActivePercentage', theme), themeColor('socialDarkColor', theme)) + '\n\t\t}\n\t\t:hover:enabled ' + applyForState('hover', theme) + '\t{\n\t\t\tbackground-color:\n\t\t\t' + (0, _polished.lighten)(themeColor('lightenHoverPercentage', theme), themeColor('socialDarkColor', theme)) + '\n\t\t}\n\t\t:focus:enabled ' + applyForState('focus', theme) + ' {\n\t\t\tbackground-color:\n\t\t\t' + (0, _polished.darken)(themeColor('darkenFocusPercentage', theme), themeColor('socialDarkColor', theme)) + '\n\t\t}\n\t';
}, _size2.default, _fontSize2.default, _borderRadius2.default, function (props) {
	return props.noPadding && '\n\t\tpadding: 0 !important;\n\t' || '';
});

StyledButton.defaultProps = _defaultProps2.default;

exports.default = StyledButton;