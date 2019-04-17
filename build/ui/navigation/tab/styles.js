'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\t', '\n\tcursor: pointer;\n\tpadding: ', ' 0;\n\tcolor: ', ';\n\n\t', '\n\n\t&:first-child {\n\t\tmargin-left: 0;\n\t}\n\n\t&:last-child {\n\t\tmargin-right: 0;\n\t}\n\n\t&:hover {\n\t\tcolor: ', ';\n\t}\n'], ['\n\t', '\n\tcursor: pointer;\n\tpadding: ', ' 0;\n\tcolor: ', ';\n\n\t', '\n\n\t&:first-child {\n\t\tmargin-left: 0;\n\t}\n\n\t&:last-child {\n\t\tmargin-right: 0;\n\t}\n\n\t&:hover {\n\t\tcolor: ', ';\n\t}\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTab = _styledComponents2.default.div(_templateObject, function (_ref) {
	var horizontal = _ref.horizontal,
	    gutter = _ref.theme.gutter;
	return horizontal && '\n\t\tmargin-left: ' + gutter['' + horizontal] + ';\n\t\tmargin-right: ' + gutter['' + horizontal] + ';\n\t' || '';
}, function (props) {
	return props.theme.gutter.large;
}, function (props) {
	return props.theme.color.text.light;
}, function (_ref2) {
	var isActive = _ref2.isActive,
	    theme = _ref2.theme;
	return isActive && '\n\t\tbox-shadow: 0 1px 0 0 ' + theme.color.brand + ';\n\t\tcolor: ' + theme.color.text.normal + ';\n\t' || '';
}, function (props) {
	return props.theme.color.text.normal;
});

StyledTab.defaultProps = _defaultProps2.default;

exports.default = StyledTab;