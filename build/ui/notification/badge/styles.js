'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StyledCircle = exports.StyledContainer = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../../tag/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledContainer = exports.StyledContainer = _styledComponents2.default.span.withConfig({
	displayName: 'styles__StyledContainer',
	componentId: 'sc-19n49g2-0'
})(['font-size:', ';margin-bottom:', ';position:relative;'], function (props) {
	return props.theme.fontSize.medium;
}, function (props) {
	return props.theme.gutter.small;
});

var StyledCircle = exports.StyledCircle = (0, _styledComponents2.default)(_styles2.default).withConfig({
	displayName: 'styles__StyledCircle',
	componentId: 'sc-19n49g2-1'
})(['position:absolute;transform:translate(-', ',-50%);z-index:1;border-radius:50px;'], function (props) {
	return props.theme.gutter.large;
});