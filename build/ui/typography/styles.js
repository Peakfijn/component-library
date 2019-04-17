'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DividerStyled = exports.HorizontalDividerStyled = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: block;\n\theight: 100%;\n\ttext-align: center;\n'], ['\n\tdisplay: block;\n\theight: 100%;\n\ttext-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\twidth: 1px;\n\tborder-right: ', 'px solid ', ';\n\toverflow: hidden;\n\tdisplay: block;\n\theight: ', ';\n\tmargin: auto;\n'], ['\n\twidth: 1px;\n\tborder-right: ', 'px solid ', ';\n\toverflow: hidden;\n\tdisplay: block;\n\theight: ', ';\n\tmargin: auto;\n']);

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

HorizontalDividerStyled.defaultProps = _defaultProps2.default;
DividerStyled.defaultProps = _defaultProps2.default;