'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _borderRadius = require('../button/modifiers/border-radius');

var _borderRadius2 = _interopRequireDefault(_borderRadius);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputIcon = _styledComponents2.default.img.withConfig({
	displayName: 'styles__InputIcon',
	componentId: 'sc-1o19ff2-0'
})(['color:inherit;', ' ', ' ', ' ', ''], function (props) {
	return props.height && '\n\t\theight: ' + props.height + ';\n\t' || '';
}, function (props) {
	return props.width && '\n\t\twidth: ' + props.width + ';\n\t' || '';
}, function (_ref) {
	var fit = _ref.fit;
	return fit && '\n\t\t\tobject-fit: ' + fit + ';\n\t' || '';
}, _borderRadius2.default);

InputIcon.defaultProps = _defaultProps2.default;

exports.default = InputIcon;