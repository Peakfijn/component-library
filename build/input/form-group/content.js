'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormGroupContent = _styledComponents2.default.span.withConfig({
	displayName: 'content__FormGroupContent',
	componentId: 'n76x84-0'
})(['display:block;position:relative;']);

FormGroupContent.defaultProps = _defaultProps2.default;

exports.default = FormGroupContent;