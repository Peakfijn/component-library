"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledBar = _styledComponents2.default.div.withConfig({
	displayName: "styles__StyledBar",
	componentId: "o8qgza-0"
})(["box-sizing:border-box;border-radius:", ";width:100%;text-transform:none;text-decoration:none;display:flex;margin-bottom:", ";font-family:inherit;font-size:", ";font-weight:600;color:", ";text-align:left;", ";", ";", ";", ";& span{flex:1;padding:", " 0;}"], function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.fontSize.medium;
}, function (props) {
	return props.theme.color.inverseText;
}, function (props) {
	return props.type === "success" && "\n\t\tbackground-color: " + props.theme.color.success + ";\n\t\tborder: 1px solid " + props.theme.color.success + ";\n\t";
}, function (props) {
	return props.type === "info" && "\n\t\tbackground-color: " + props.theme.color.info + ";\n\t\tborder: 1px solid " + props.theme.color.info + ";\n\t";
}, function (props) {
	return props.type === "warning" && "\n\t\tbackground-color: " + props.theme.color.warning + ";\n\t\tborder: 1px solid " + props.theme.color.warning + ";\n\t";
}, function (props) {
	return props.type === "danger" && "\n\t\tbackground-color: " + props.theme.color.danger + ";\n\t\tborder: 1px solid " + props.theme.color.danger + ";\n\t";
}, function (props) {
	return props.theme.gutter.medium;
});

exports.default = StyledBar;