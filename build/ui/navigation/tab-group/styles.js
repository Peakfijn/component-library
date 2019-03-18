'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledTabGroup = _styledComponents2.default.div.withConfig({
	displayName: 'styles__StyledTabGroup',
	componentId: 'pzt09w-0'
})(['display:flex;justify-content:flex-start;border-bottom:1px solid ', ';'], function (props) {
	return props.theme.color.border.light;
});

StyledTabGroup.defaultProps = _defaultProps2.default;

exports.default = StyledTabGroup;