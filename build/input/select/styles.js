'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StyledSelect = exports.StyledHeader = undefined;

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

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledHeader = exports.StyledHeader = _styledComponents2.default.h4.withConfig({
	displayName: 'styles__StyledHeader',
	componentId: 'sc-19aao7l-0'
})(['margin-bottom:', ';color:', ';'], function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.color.text.normal;
});

var StyledSelect = exports.StyledSelect = _styledComponents2.default.select.withConfig({
	displayName: 'styles__StyledSelect',
	componentId: 'sc-19aao7l-1'
})(['box-sizing:border-box;outline:none;border:1px solid ', ';border-radius:', ';background:', ';width:100%;color:', ';stroke:', ';appearance:none;', ' ', ' ', ' ', ''], function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.color.text.normal;
}, _state2.default, _size2.default, _iconAdjustment2.default, _validation2.default);

StyledHeader.defaultProps = _defaultProps2.default;
StyledSelect.defaultProps = _defaultProps2.default;