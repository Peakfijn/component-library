'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HiddenInput = _styledComponents2.default.input.withConfig({
	displayName: 'hidden-input__HiddenInput',
	componentId: 'sc-1i2msn7-0'
})(['width:1px;height:1px;background:transparent;border:0;margin:0;position:absolute;opacity:0;']);

_styledComponents2.default.defaultProps = _defaultProps2.default;

exports.default = HiddenInput;