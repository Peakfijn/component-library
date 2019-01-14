'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _styledComponents2.default.hr.withConfig({
	displayName: 'separator',
	componentId: 'sc-17d8s54-0'
})(['margin:0;border:none;border-top:1px solid ', ';width:inherit;width:0;min-width:', ';'], function (props) {
	return props.theme.color.border.light;
}, function (props) {
	return props.theme.gutter.humongous;
});