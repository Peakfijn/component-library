'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\tline-height: 6px;\n\tfont-size: 12px;\n\n\t', '\n'], ['\n\tmargin-top: ', ';\n\tmargin-bottom: ', ';\n\tline-height: 6px;\n\tfont-size: 12px;\n\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMessage = _styledComponents2.default.p(_templateObject, function (props) {
	return props.theme.gutter.small;
}, function (props) {
	return props.theme.gutter.small;
}, function (_ref) {
	var isValidate = _ref.isValidate,
	    theme = _ref.theme;
	return !isValidate && '\n\t\tcolor: ' + theme.color.danger + ';\n\t' || '';
});

StyledMessage.defaultProps = _defaultProps2.default;

exports.default = StyledMessage;