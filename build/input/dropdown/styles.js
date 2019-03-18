'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StyledSelectedListItem = exports.StyledListItem = exports.StyledList = exports.StyledSelect = exports.StyledItemContainer = exports.Wrapper = exports.Spacer = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spacer = exports.Spacer = _styledComponents2.default.div.withConfig({
	displayName: 'styles__Spacer',
	componentId: 'sc-1s7jcgb-0'
})(['padding-right:', ';'], function (props) {
	return props.theme.gutter.medium;
});

var Wrapper = exports.Wrapper = _styledComponents2.default.div.withConfig({
	displayName: 'styles__Wrapper',
	componentId: 'sc-1s7jcgb-1'
})(['position:relative;outline:none;']);

var StyledItemContainer = exports.StyledItemContainer = _styledComponents2.default.div.withConfig({
	displayName: 'styles__StyledItemContainer',
	componentId: 'sc-1s7jcgb-2'
})(['width:100%;padding:0;margin:0;border:1px solid #d4d7db;margin-top:', ';border-radius:', ';background-color:', ';position:absolute;z-index:999;'], function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.borderRadius.small;
}, function (props) {
	return props.theme.background.input;
});

var StyledSelect = exports.StyledSelect = _styledComponents2.default.button.withConfig({
	displayName: 'styles__StyledSelect',
	componentId: 'sc-1s7jcgb-3'
})(['padding:12px;border:1px solid ', ';border-radius:', ';background:', ';width:100%;color:', ';stroke:', ';'], function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.color.text.normal;
}, function (props) {
	return props.theme.color.text.normal;
});

var StyledList = exports.StyledList = _styledComponents2.default.ul.withConfig({
	displayName: 'styles__StyledList',
	componentId: 'sc-1s7jcgb-4'
})(['width:calc(100% - 2px);padding:0;margin:0;border:1px solid ', ';margin-top:', ';border-radius:', ';background:', ';position:absolute;overflow:auto;z-index:999;'], function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color.background.input;
});

var StyledListItem = exports.StyledListItem = _styledComponents2.default.li.withConfig({
	displayName: 'styles__StyledListItem',
	componentId: 'sc-1s7jcgb-5'
})(['width:100%;padding:', ' 12px;line-height:', ';font-size:', ';text-align:left;display:inline-flex;white-space:nowrap;text-overflow:ellipsis;background:', ';border-bottom:1px solid ', ';box-sizing:border-box;cursor:pointer;&:hover{color:', ';background-color:', ';}&:last-child{border-bottom:0;}'], function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.fontSize.medium;
}, function (props) {
	return props.theme.color.background.input;
}, function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.color.inverseText;
}, function (props) {
	return props.theme.color.brand;
});

var StyledSelectedListItem = exports.StyledSelectedListItem = (0, _styledComponents2.default)(StyledListItem).withConfig({
	displayName: 'styles__StyledSelectedListItem',
	componentId: 'sc-1s7jcgb-6'
})(['color:', ';background-color:', ';'], function (props) {
	return props.theme.color.inverseText;
}, function (props) {
	return props.theme.color.brand;
});

Spacer.defaultProps = _defaultProps2.default;
Wrapper.defaultProps = _defaultProps2.default;
StyledItemContainer.defaultProps = _defaultProps2.default;
StyledSelect.defaultProps = _defaultProps2.default;
StyledList.defaultProps = _defaultProps2.default;
StyledListItem.defaultProps = _defaultProps2.default;
StyledSelectedListItem.defaultProps = _defaultProps2.default;