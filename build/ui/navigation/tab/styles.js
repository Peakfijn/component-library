'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledTab = _styledComponents2.default.div.withConfig({
	displayName: 'styles__StyledTab',
	componentId: 'btmnbh-0'
})(['margin:0 ', ';cursor:pointer;padding:', ' 0;color:', ';', ' &:first-child{margin-left:0;}&:last-child{margin-right:0;}&:hover{color:', ';}'], function (props) {
	return props.theme.gutter.large;
}, function (props) {
	return props.theme.gutter.large;
}, function (props) {
	return props.theme.color.text.light;
}, function (_ref) {
	var isActive = _ref.isActive,
	    theme = _ref.theme;
	return isActive && '\n\t\tbox-shadow: 0 1px 0 0 ' + theme.color.brand + ';\n\t\tcolor: ' + theme.color.text.normal + ';\n\t' || '';
}, function (props) {
	return props.theme.color.text.normal;
});

StyledTab.defaultProps = _defaultProps2.default;

exports.default = StyledTab;