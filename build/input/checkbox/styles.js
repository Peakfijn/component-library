'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Check = exports.Box = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _switchState = require('../styles/switch-state');

var _switchState2 = _interopRequireDefault(_switchState);

var _borderRadius = require('../../ui/button/modifiers/border-radius');

var _borderRadius2 = _interopRequireDefault(_borderRadius);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = exports.Box = _styledComponents2.default.div.withConfig({
	displayName: 'styles__Box',
	componentId: 'gud8pq-0'
})(['cursor:pointer;position:relative;display:inline-block;padding:2px;width:', ';height:', ';border-radius:', ';background-color:', ';border:1px solid ', ';margin-right:', ';', ' ', ''], function (props) {
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

var Check = exports.Check = _styledComponents2.default.div.withConfig({
	displayName: 'styles__Check',
	componentId: 'gud8pq-1'
})(['cursor:pointer;color:', ';line-height:initial;', ''], function (props) {
	return props.theme.color.inverseText;
}, function (_ref) {
	var disabled = _ref.disabled;
	return disabled && '\n\t\tcursor: not-allowed;\n\t' || '';
});