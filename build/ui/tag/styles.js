'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _size = require('../button/modifiers/size');

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = _styledComponents2.default.span.withConfig({
	displayName: 'styles__Tag',
	componentId: 'ikmztq-0'
})(['box-sizing:border-box;outline:none;border-radius:', ';background-color:', ';text-transform:none;text-decoration:none;color:', ';font-family:inherit;font-size:', ';', ''], function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color[props.color];
}, function (props) {
	return props.theme.color.text[props.textColor];
}, function (props) {
	return props.theme.fontSize.medium;
}, _size2.default);

Tag.defaultProps = _defaultProps2.default;

exports.default = Tag;