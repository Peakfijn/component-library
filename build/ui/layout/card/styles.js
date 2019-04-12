'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../index');

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardContent = (0, _styledComponents2.default)(_index.Wrapper).withConfig({
	displayName: 'styles__CardContent',
	componentId: 'upoqsr-0'
})(['overflow:auto;', ''], function (props) {
	return '\n\t\tbackground-color: ' + props.theme.color.background[props.background] + ';\n\t\tborder: 1px solid ' + props.theme.color.border[props.borderColor] + ';\n\t\tborder-radius: ' + props.theme.borderRadius[props.borderRadius] + ';\n\t';
});

CardContent.defaultProps = _defaultProps2.default;

exports.default = CardContent;