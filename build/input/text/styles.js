'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tbox-sizing: border-box;\n\toutline: none;\n\tborder: 1px solid ', ';\n\tbackground: ', ';\n\twidth: 100%;\n\tcolor: ', ';\n\tstroke: ', ';\n\n\t/* States */\n\t', '\n\n\t/* Modifier: size */\n\t', '\n\t', '\n\n\t', '\n\t', '\n'], ['\n\tbox-sizing: border-box;\n\toutline: none;\n\tborder: 1px solid ', ';\n\tbackground: ', ';\n\twidth: 100%;\n\tcolor: ', ';\n\tstroke: ', ';\n\n\t/* States */\n\t', '\n\n\t/* Modifier: size */\n\t', '\n\t', '\n\n\t', '\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _validation = require('../styles/validation');

var _validation2 = _interopRequireDefault(_validation);

var _state = require('../styles/state');

var _state2 = _interopRequireDefault(_state);

var _size = require('../styles/size');

var _size2 = _interopRequireDefault(_size);

var _iconAdjustment = require('../styles/icon-adjustment');

var _iconAdjustment2 = _interopRequireDefault(_iconAdjustment);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _borderRadius = require('./modifiers/border-radius');

var _borderRadius2 = _interopRequireDefault(_borderRadius);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents2.default.input(_templateObject, function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.color.text.normal;
}, _state2.default, _size2.default, _borderRadius2.default, _iconAdjustment2.default, _validation2.default);

Input.defaultProps = _defaultProps2.default;

exports.default = Input;