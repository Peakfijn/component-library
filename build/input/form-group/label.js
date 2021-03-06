'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: block;\n\tmargin-bottom: ', ';\n\tcolor: ', ';\n'], ['\n\tdisplay: block;\n\tmargin-bottom: ', ';\n\tcolor: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents2.default.label(_templateObject, function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.color.text.normal;
});

Label.defaultProps = _defaultProps2.default;

exports.default = Label;