'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelContent = _styledComponents2.default.span.withConfig({
	displayName: 'label-content__LabelContent',
	componentId: 'wqsi0g-0'
})(['display:block;margin-bottom:', ';color:', ';'], function (props) {
	return props.theme.gutter.tiny;
}, function (props) {
	return props.theme.color.text.normal;
});

exports.default = LabelContent;