'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tbox-sizing: border-box;\n\tborder-radius: ', ';\n\twidth: 100%;\n\ttext-transform: none;\n\ttext-decoration: none;\n\tdisplay: flex;\n\tmargin-bottom: ', ';\n\tfont-family: inherit;\n\tfont-size: ', ';\n\tfont-weight: 600;\n\tcolor: ', ';\n\ttext-align: left;\n\n\t/* Type: succes */\n\t', ';\n\n\t/* Type: info */\n\t', ';\n\n\t/* Type: warning */\n\t', ';\n\n\t/* Type: danger */\n\t', ';\n\n\t& span {\n\t\tflex: 1;\n\t\tpadding: ', ' 0;\n\t}\n'], ['\n\tbox-sizing: border-box;\n\tborder-radius: ', ';\n\twidth: 100%;\n\ttext-transform: none;\n\ttext-decoration: none;\n\tdisplay: flex;\n\tmargin-bottom: ', ';\n\tfont-family: inherit;\n\tfont-size: ', ';\n\tfont-weight: 600;\n\tcolor: ', ';\n\ttext-align: left;\n\n\t/* Type: succes */\n\t', ';\n\n\t/* Type: info */\n\t', ';\n\n\t/* Type: warning */\n\t', ';\n\n\t/* Type: danger */\n\t', ';\n\n\t& span {\n\t\tflex: 1;\n\t\tpadding: ', ' 0;\n\t}\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBar = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.fontSize.medium;
}, function (props) {
	return props.theme.color.inverseText;
}, function (props) {
	return props.type === "success" && '\n\t\tbackground-color: ' + props.theme.color.success + ';\n\t\tborder: 1px solid ' + props.theme.color.success + ';\n\t';
}, function (props) {
	return props.type === "info" && '\n\t\tbackground-color: ' + props.theme.color.info + ';\n\t\tborder: 1px solid ' + props.theme.color.info + ';\n\t';
}, function (props) {
	return props.type === "warning" && '\n\t\tbackground-color: ' + props.theme.color.warning + ';\n\t\tborder: 1px solid ' + props.theme.color.warning + ';\n\t';
}, function (props) {
	return props.type === "danger" && '\n\t\tbackground-color: ' + props.theme.color.danger + ';\n\t\tborder: 1px solid ' + props.theme.color.danger + ';\n\t';
}, function (props) {
	return props.theme.gutter.medium;
});

StyledBar.defaultProps = _defaultProps2.default;

exports.default = StyledBar;