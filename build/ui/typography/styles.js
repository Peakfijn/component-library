'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SeparatorStyled = exports.DividerStyled = exports.HorizontalDividerStyled = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: block;\n\theight: 100%;\n\ttext-align: center;\n'], ['\n\tdisplay: block;\n\theight: 100%;\n\ttext-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\twidth: 1px;\n\tborder-right: ', 'px solid ', ';\n\toverflow: hidden;\n\tdisplay: block;\n\theight: ', ';\n\tmargin: auto;\n'], ['\n\twidth: 1px;\n\tborder-right: ', 'px solid ', ';\n\toverflow: hidden;\n\tdisplay: block;\n\theight: ', ';\n\tmargin: auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tmargin: 0;\n\tborder: none;\n\tborder-top:\n\t\t', '\n\t\tsolid\n\t\t', ';\n\twidth: inherit;\n\tmin-width: ', ';\n'], ['\n\tmargin: 0;\n\tborder: none;\n\tborder-top:\n\t\t', '\n\t\tsolid\n\t\t', ';\n\twidth: inherit;\n\tmin-width: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HorizontalDividerStyled = exports.HorizontalDividerStyled = _styledComponents2.default.span(_templateObject);
var DividerStyled = exports.DividerStyled = _styledComponents2.default.span(_templateObject2, function (_ref) {
	var borderSize = _ref.borderSize;
	return borderSize;
}, function (_ref2) {
	var theme = _ref2.theme,
	    colour = _ref2.colour;
	return theme.color.text[colour];
}, function (_ref3) {
	var theme = _ref3.theme,
	    fontSize = _ref3.fontSize;
	return theme.fontSize[fontSize];
});
var SeparatorStyled = exports.SeparatorStyled = _styledComponents2.default.hr(_templateObject3, function (_ref4) {
	var borderWidth = _ref4.borderWidth,
	    theme = _ref4.theme;
	return theme.borderWidth[borderWidth];
}, function (_ref5) {
	var color = _ref5.color,
	    theme = _ref5.theme;
	return theme.color.border[color];
}, function (props) {
	return props.theme.gutter.humongous;
});

HorizontalDividerStyled.defaultProps = _defaultProps2.default;
DividerStyled.defaultProps = _defaultProps2.default;
SeparatorStyled.defaultProps = _defaultProps2.default;