'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Separator = _styledComponents2.default.hr.withConfig({
	displayName: 'separator__Separator',
	componentId: 'sc-17d8s54-0'
})(['margin:0;border:none;border-top:1px solid ', ';width:inherit;width:0;min-width:', ';'], function (props) {
	return props.theme.color.border.light;
}, function (props) {
	return props.theme.gutter.humongous;
});

Separator.defaultProps = _defaultProps2.default;

exports.default = Separator;