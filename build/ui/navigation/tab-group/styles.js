'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-wrap: wrap;\n\tborder-bottom: 1px solid ', ';\n'], ['\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-wrap: wrap;\n\tborder-bottom: 1px solid ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTabGroup = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.color.border.light;
});

StyledTabGroup.defaultProps = _defaultProps2.default;

exports.default = StyledTabGroup;