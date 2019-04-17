'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tmargin: 0;\n\tborder: none;\n\tborder-top: 1px solid ', ';\n\twidth: inherit;\n\tmin-width: ', ';\n'], ['\n\tmargin: 0;\n\tborder: none;\n\tborder-top: 1px solid ', ';\n\twidth: inherit;\n\tmin-width: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Separator = _styledComponents2.default.hr(_templateObject, function (props) {
	return props.theme.color.border.light;
}, function (props) {
	return props.theme.gutter.humongous;
});

Separator.defaultProps = _defaultProps2.default;

exports.default = Separator;