'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = _styledComponents2.default.label.withConfig({
	displayName: 'label__Label',
	componentId: 'sc-12hdu14-0'
})(['display:block;margin-bottom:', ';'], function (props) {
	return props.theme.gutter.medium;
});

exports.default = Label;