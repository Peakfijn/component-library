'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledMessage = _styledComponents2.default.p.withConfig({
	displayName: 'styles__StyledMessage',
	componentId: 'sc-1an3zsa-0'
})(['margin-top:', ';margin-bottom:', ';line-height:6px;font-size:12px;', ''], function (props) {
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