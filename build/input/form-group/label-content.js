'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelContent = _styledComponents2.default.span.withConfig({
	displayName: 'label-content__LabelContent',
	componentId: 'wqsi0g-0'
})(['display:block;margin-bottom:', ';color:', ';'], function (props) {
	return props.theme.gutter.tiny;
}, function (props) {
	return props.theme.color.text.normal;
});

LabelContent.defaultProps = _defaultProps2.default;

exports.default = LabelContent;