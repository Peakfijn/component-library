'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _validation = require('../styles/validation');

var _validation2 = _interopRequireDefault(_validation);

var _state = require('../styles/state');

var _state2 = _interopRequireDefault(_state);

var _iconAdjustment = require('../styles/icon-adjustment');

var _iconAdjustment2 = _interopRequireDefault(_iconAdjustment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = _styledComponents2.default.textarea.withConfig({
	displayName: 'styles__Input',
	componentId: 'vngcro-0'
})(['box-sizing:border-box;outline:none;border:1px solid ', ';border-radius:', ';background:', ';width:100%;max-width:100%;color:', ';stroke:', ';', ' ', ' ', ' ', ''], function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.color.text.normal;
}, _state2.default, function (_ref) {
	var size = _ref.size,
	    theme = _ref.theme;
	return size === "medium" && '\n\t\tpadding: ' + theme.gutter.small + ';\n\t\tline-height: 1rem;\n\t\tfont-size: ' + theme.fontSize.medium + ';\n\t' || '';
}, _iconAdjustment2.default, _validation2.default);

exports.default = Input;