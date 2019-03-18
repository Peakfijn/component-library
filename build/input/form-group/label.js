'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = _styledComponents2.default.label.withConfig({
	displayName: 'label__Label',
	componentId: 'sc-12hdu14-0'
})(['display:block;margin-bottom:', ';color:', ';'], function (props) {
	return props.theme.gutter.medium;
}, function (props) {
	return props.theme.color.text.normal;
});

Label.defaultProps = _defaultProps2.default;

exports.default = Label;