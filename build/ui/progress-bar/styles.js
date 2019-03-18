'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slider = exports.StyledProgress = exports.StyledBar = exports.StyledHeader = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledHeader = exports.StyledHeader = _styledComponents2.default.div.withConfig({
	displayName: 'styles__StyledHeader',
	componentId: 'sc-10aagex-0'
})(['text-transform:none;text-decoration:none;font-family:inherit;font-size:', ';display:inline-flex;flex-direction:row;justify-content:space-between;width:100%;margin-bottom:', ';'], function (props) {
	return props.theme.fontSize.medium;
}, function (props) {
	return props.theme.gutter.small;
});

var StyledBar = exports.StyledBar = _styledComponents2.default.div.withConfig({
	displayName: 'styles__StyledBar',
	componentId: 'sc-10aagex-1'
})(['border-radius:', ';background-color:', ';height:8px;width:100%;position:relative;'], function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color.background.progressBar;
});

var StyledProgress = exports.StyledProgress = _styledComponents2.default.div.withConfig({
	displayName: 'styles__StyledProgress',
	componentId: 'sc-10aagex-2'
})(['border-radius:', ';background-color:', ';height:8px;width:', ';'], function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.color;
}, function (props) {
	return props.progress;
});

var Slider = exports.Slider = _styledComponents2.default.div.withConfig({
	displayName: 'styles__Slider',
	componentId: 'sc-10aagex-3'
})(['cursor:pointer;margin:0;background-color:', ';border:1px solid ', ';border-radius:16px;width:16px;height:16px;position:absolute;left:calc(', ' - 10px);top:-5px;'], function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.color.grey;
}, function (props) {
	return props.progress;
});

StyledHeader.defaultProps = _defaultProps2.default;
StyledBar.defaultProps = _defaultProps2.default;
StyledProgress.defaultProps = _defaultProps2.default;
Slider.defaultProps = _defaultProps2.default;