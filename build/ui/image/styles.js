'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tcolor: inherit;\n\n\t/* Size */\n\t', '\n\t', '\n\n\t', '\n\n\t/* Modifiers: borderRadius */\n\t', '\n'], ['\n\tcolor: inherit;\n\n\t/* Size */\n\t', '\n\t', '\n\n\t', '\n\n\t/* Modifiers: borderRadius */\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _borderRadius = require('../button/modifiers/border-radius');

var _borderRadius2 = _interopRequireDefault(_borderRadius);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputIcon = _styledComponents2.default.img(_templateObject, function (props) {
	return props.height && '\n\t\theight: ' + props.height + ';\n\t' || '';
}, function (props) {
	return props.width && '\n\t\twidth: ' + props.width + ';\n\t' || '';
}, function (_ref) {
	var fit = _ref.fit;
	return fit && '\n\t\t\tobject-fit: ' + fit + ';\n\t' || '';
}, _borderRadius2.default);

InputIcon.defaultProps = _defaultProps2.default;

exports.default = InputIcon;