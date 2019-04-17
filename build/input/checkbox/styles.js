'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Check = exports.Box = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tcursor: pointer;\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding: 2px;\n\twidth: ', ';\n\theight: ', ';\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\tborder: 1px solid ', ';\n\tmargin-right: ', ';\n\n\t/* States */\n\t', '\n\n\t/* Modifiers: borderRadius */\n\t', '\n'], ['\n\tcursor: pointer;\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding: 2px;\n\twidth: ', ';\n\theight: ', ';\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\tborder: 1px solid ', ';\n\tmargin-right: ', ';\n\n\t/* States */\n\t', '\n\n\t/* Modifiers: borderRadius */\n\t', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tcursor: pointer;\n\tcolor: ', ';\n\tline-height: initial;\n\n\t/* State: disabled */\n\t', '\n'], ['\n\tcursor: pointer;\n\tcolor: ', ';\n\tline-height: initial;\n\n\t/* State: disabled */\n\t', '\n']);

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
}, _switchState2.default, _borderRadius2.default);

var Check = exports.Check = _styledComponents2.default.div(_templateObject2, function (props) {
	return props.theme.color.inverseText;
}, function (_ref) {
	var disabled = _ref.disabled;
	return disabled && '\n\t\tcursor: not-allowed;\n\t' || '';
});

Box.defaultProps = _defaultProps2.default;
Check.defaultProps = _defaultProps2.default;