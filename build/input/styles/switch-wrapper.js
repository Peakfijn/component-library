'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwitchWrapper = _styledComponents2.default.div.withConfig({
	displayName: 'switch-wrapper__SwitchWrapper',
	componentId: 'sc-1ihsfv0-0'
})(['display:flex;align-items:center;line-height:2rem;']);

SwitchWrapper.defaultProps = _defaultProps2.default;

exports.default = SwitchWrapper;