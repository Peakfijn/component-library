'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tcolor: inherit;\n\n\t/* Modifier: input */\n\t', '\n\n\t', '\n\n\t/* Modifier: error */\n\t', '\n\n\t', '\n\n\t/* Modifier: left */\n\t', '\n\n\t/* Size */\n\t', '\n\t', '\n'], ['\n\tcolor: inherit;\n\n\t/* Modifier: input */\n\t', '\n\n\t', '\n\n\t/* Modifier: error */\n\t', '\n\n\t', '\n\n\t/* Modifier: left */\n\t', '\n\n\t/* Size */\n\t', '\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputIcon = (0, _styledComponents2.default)(_reactFontawesome.FontAwesomeIcon)(_templateObject, function (_ref) {
	var modifier = _ref.modifier,
	    theme = _ref.theme;
	return modifier === "input-right" && '\n\t\tcolor: ' + theme.color.text.light + ';\n\t\tposition: absolute;\n\t\tright: ' + theme.gutter.small + ';\n\t\ttop: ' + theme.gutter.small + ';\n\t' || '';
}, function (_ref2) {
	var modifier = _ref2.modifier,
	    theme = _ref2.theme;
	return modifier === "input-left" && '\n\t\tcolor: ' + theme.color.text.light + ';\n\t\tposition: absolute;\n\t\tleft: ' + theme.gutter.small + ';\n\t\ttop: ' + theme.gutter.small + ';\n\t' || '';
}, function (_ref3) {
	var modifier = _ref3.modifier,
	    theme = _ref3.theme;
	return modifier === "error" && '\n\t\tcolor: ' + theme.color.danger + ';\n\t\tmargin-right: ' + theme.gutter.tiny + ';\n\t' || '';
}, function (_ref4) {
	var modifier = _ref4.modifier,
	    theme = _ref4.theme;
	return modifier === "left" && '\n\t\tmargin-right: ' + theme.gutter.tiny + ';\n\t' || '';
}, function (_ref5) {
	var modifier = _ref5.modifier,
	    theme = _ref5.theme;
	return modifier === "left" && '\n\t\tpadding-right: ' + theme.gutter.small + ';\n\t' || '';
}, function (props) {
	return props.height && '\n\t\theight: ' + props.height + ';\n\t' || '';
}, function (props) {
	return props.width && '\n\t\twidth: ' + props.width + ';\n\t' || '';
});

InputIcon.defaultProps = _defaultProps2.default;

exports.default = InputIcon;