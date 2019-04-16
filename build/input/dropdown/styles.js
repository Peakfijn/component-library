'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StyledSelectedListItem = exports.StyledListItem = exports.StyledList = exports.StyledSelect = exports.StyledItemContainer = exports.Wrapper = exports.Spacer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tpadding-right: ', ';\n'], ['\n\tpadding-right: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: relative;\n\toutline: none;\n'], ['\n\tposition: relative;\n\toutline: none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\twidth: 100%;\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 1px solid #d4d7db;\n\tmargin-top: ', ';\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\tposition: absolute;\n\tz-index: 999;\n'], ['\n\twidth: 100%;\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 1px solid #d4d7db;\n\tmargin-top: ', ';\n\tborder-radius: ', ';\n\tbackground-color: ', ';\n\tposition: absolute;\n\tz-index: 999;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tpadding: 12px;\n\tborder: 1px solid ', ';\n\tborder-radius: ', ';\n\tbackground: ', ';\n\twidth: 100%;\n\tcolor: ', ';\n\tstroke: ', ';\n'], ['\n\tpadding: 12px;\n\tborder: 1px solid ', ';\n\tborder-radius: ', ';\n\tbackground: ', ';\n\twidth: 100%;\n\tcolor: ', ';\n\tstroke: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\twidth: calc(100% - 2px);\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 1px solid ', ';\n\tmargin-top: ', ';\n\tborder-radius: ', ';\n\tbackground: ', ';\n\tposition: absolute;\n\toverflow: auto;\n\tz-index: 999;\n'], ['\n\twidth: calc(100% - 2px);\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 1px solid ', ';\n\tmargin-top: ', ';\n\tborder-radius: ', ';\n\tbackground: ', ';\n\tposition: absolute;\n\toverflow: auto;\n\tz-index: 999;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\twidth: 100%;\n\tpadding: ', ' 12px;\n\tline-height: ', ';\n\tfont-size: ', ';\n\ttext-align: left;\n\tdisplay: inline-flex;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: ', ';\n\tborder-bottom: 1px solid ', ';\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t}\n\n\t&:last-child {\n\t\tborder-bottom: 0;\n\t}\n'], ['\n\twidth: 100%;\n\tpadding: ', ' 12px;\n\tline-height: ', ';\n\tfont-size: ', ';\n\ttext-align: left;\n\tdisplay: inline-flex;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbackground: ', ';\n\tborder-bottom: 1px solid ', ';\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t}\n\n\t&:last-child {\n\t\tborder-bottom: 0;\n\t}\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\tcolor: ', ';\n\tbackground-color: ', ';\n'], ['\n\tcolor: ', ';\n\tbackground-color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Spacer = exports.Spacer = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.gutter.medium;
});

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject2);

var StyledItemContainer = exports.StyledItemContainer = _styledComponents2.default.div(_templateObject3, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.borderRadius.small;
}, function (props) {
	return props.theme.background.input;
});

var StyledSelect = exports.StyledSelect = _styledComponents2.default.button(_templateObject4, function (props) {
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

var StyledList = exports.StyledList = _styledComponents2.default.ul(_templateObject5, function (props) {
	return props.theme.color.border.normal;
}, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.borderRadius.medium;
}, function (props) {
	return props.theme.color.background.input;
});

var StyledListItem = exports.StyledListItem = _styledComponents2.default.li(_templateObject6, function (props) {
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

var StyledSelectedListItem = exports.StyledSelectedListItem = (0, _styledComponents2.default)(StyledListItem)(_templateObject7, function (props) {
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