'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tbox-sizing: border-box;\n\toutline: none;\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\ttext-transform: none;\n\ttext-decoration: none;\n\tcolor: ', ';\n\tfont-family: inherit;\n\tfont-size: ', ';\n\n\t/* Modifiers: size */\n\t', '\n'], ['\n\tbox-sizing: border-box;\n\toutline: none;\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\ttext-transform: none;\n\ttext-decoration: none;\n\tcolor: ', ';\n\tfont-family: inherit;\n\tfont-size: ', ';\n\n\t/* Modifiers: size */\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _size = require('../button/modifiers/size');

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tag = _styledComponents2.default.span(_templateObject, function (props) {
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