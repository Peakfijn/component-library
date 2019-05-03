'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slider = exports.Switch = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tcursor: pointer;\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: ', ';\n\theight: ', ';\n\tbackground-color: ', ';\n\tborder-radius: ', ';\n\tborder: 1px solid ', ';\n\tmargin-right: ', ';\n\n\t/* States */\n\t', '\n'], ['\n\tcursor: pointer;\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: ', ';\n\theight: ', ';\n\tbackground-color: ', ';\n\tborder-radius: ', ';\n\tborder: 1px solid ', ';\n\tmargin-right: ', ';\n\n\t/* States */\n\t', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tcursor: pointer;\n\tmargin: ', ';\n\tborder-radius: ', ';\n\twidth: ', ';\n\theight: ', ';\n\tposition: absolute;\n\n\ttop: ', ';\n\tbottom: ', ';\n\tleft: ', ';\n\tright: ', ';\n\n\t/* State: selected */\n\t', '\n\n\t/* State: selected & disabled */\n\t', '\n'], ['\n\tcursor: pointer;\n\tmargin: ', ';\n\tborder-radius: ', ';\n\twidth: ', ';\n\theight: ', ';\n\tposition: absolute;\n\n\ttop: ', ';\n\tbottom: ', ';\n\tleft: ', ';\n\tright: ', ';\n\n\t/* State: selected */\n\t', '\n\n\t/* State: selected & disabled */\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _switchState = require('../styles/switch-state');

var _switchState2 = _interopRequireDefault(_switchState);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Switch = exports.Switch = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.componentSize.radio;
}, function (props) {
	return props.theme.componentSize.radio;
}, function (_ref) {
	var theme = _ref.theme,
	    backgroundColor = _ref.backgroundColor;
	return theme.color.background[backgroundColor];
}, function (props) {
	return props.theme.componentSize.radio;
}, function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.gutter.small;
}, _switchState2.default);

var Slider = exports.Slider = _styledComponents2.default.div(_templateObject2, function (props) {
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
}, function (_ref2) {
	var selected = _ref2.selected,
	    theme = _ref2.theme;
	return selected && '\n\t\tbackground-color: ' + theme.color.background.input + ';\n\t' || '';
}, function (_ref3) {
	var selected = _ref3.selected,
	    disabled = _ref3.disabled,
	    theme = _ref3.theme;
	return selected && disabled && '\n\t\tbackground-color: ' + theme.color.background.input + ';\n\t\tcursor: not-allowed;\n\t' || '';
});

Switch.defaultProps = _defaultProps2.default;
Slider.defaultProps = _defaultProps2.default;