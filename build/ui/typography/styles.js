'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DividerStyled = exports.HorizontalDividerStyled = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HorizontalDividerStyled = exports.HorizontalDividerStyled = _styledComponents2.default.span.withConfig({
	displayName: 'styles__HorizontalDividerStyled',
	componentId: 'sc-13xzxxd-0'
})(['display:block;height:100%;text-align:center;']);
var DividerStyled = exports.DividerStyled = _styledComponents2.default.span.withConfig({
	displayName: 'styles__DividerStyled',
	componentId: 'sc-13xzxxd-1'
})(['width:1px;border-right:', 'px solid ', ';overflow:hidden;display:block;height:', ';margin:auto;'], function (_ref) {
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
// font-size: ${({ theme, fontSize }) => theme.color.fontSize[fontSize]};
// color: ${({ theme, colour }) => theme.color.text[colour]};

HorizontalDividerStyled.defaultProps = _defaultProps2.default;
DividerStyled.defaultProps = _defaultProps2.default;