'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Check = exports.Box = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tfont-size: 12px;\n\tcursor: pointer;\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding: 2px;\n\twidth: ', ';\n\theight: ', ';\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\tborder: 1px solid ', ';\n\tmargin-right: ', ';\n\tbox-sizing: border-box;\n\n\t/* States */\n\t', '\n\n\t/* Modifiers: borderRadius */\n\t', '\n\n\t/* State: selected */\n\t', '\n\n\t/* State: selected & disabled */\n\t', '\n'], ['\n\tfont-size: 12px;\n\tcursor: pointer;\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding: 2px;\n\twidth: ', ';\n\theight: ', ';\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\tborder: 1px solid ', ';\n\tmargin-right: ', ';\n\tbox-sizing: border-box;\n\n\t/* States */\n\t', '\n\n\t/* Modifiers: borderRadius */\n\t', '\n\n\t/* State: selected */\n\t', '\n\n\t/* State: selected & disabled */\n\t', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tcursor: pointer;\n\tcolor: ', ';\n\tline-height: initial;\n\n\t/* State: disabled */\n\t', '\n\n\t', '\n'], ['\n\tcursor: pointer;\n\tcolor: ', ';\n\tline-height: initial;\n\n\t/* State: disabled */\n\t', '\n\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _switchState = require('../styles/switch-state');

var _switchState2 = _interopRequireDefault(_switchState);

var _borderRadius = require('../../ui/button/modifiers/border-radius');

var _borderRadius2 = _interopRequireDefault(_borderRadius);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = exports.Box = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.componentSize.checkbox;
}, function (props) {
	return props.theme.componentSize.checkbox;
}, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.gutter.small;
}, _switchState2.default, _borderRadius2.default, function (_ref) {
	var selected = _ref.selected,
	    theme = _ref.theme;
	return selected && '\n\t\tbackground-color: ' + theme.color.background.inputSelected + ';\n\t' || '';
}, function (_ref2) {
	var selected = _ref2.selected,
	    disabled = _ref2.disabled,
	    theme = _ref2.theme;
	return selected && disabled && '\n\t\tbackground-color: ' + theme.color.background.inputSelected + ';\n\t\tcursor: not-allowed;\n\t' || '';
});

var Check = exports.Check = _styledComponents2.default.div(_templateObject2, function (props) {
	return props.theme.color.inverseText;
}, function (_ref3) {
	var disabled = _ref3.disabled;
	return disabled && '\n\t\tcursor: not-allowed;\n\t' || '';
}, function (_ref4) {
	var hidden = _ref4.hidden;
	return hidden && '\n\t\topacity: 0;\n\t' || '';
});

Box.defaultProps = _defaultProps2.default;
Check.defaultProps = _defaultProps2.default;