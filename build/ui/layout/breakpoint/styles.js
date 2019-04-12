'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _wrapper = require('../wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _defaultProps = require('../../../default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledBreakpointWrapper = (0, _styledComponents2.default)(_wrapper2.default).withConfig({
	displayName: 'styles__StyledBreakpointWrapper',
	componentId: 'baljqb-0'
})(['', ''], function (_ref) {
	var type = _ref.type,
	    breakpoint = _ref.breakpoint,
	    theme = _ref.theme;
	return type && breakpoint && '\n\t\t@media (' + type + '-width: ' + theme.breakpoint[breakpoint] + ') {\n\t\t\tdisplay: none;\n\t\t}\n\t';
});

StyledBreakpointWrapper.defaultProps = _defaultProps2.default;

exports.default = StyledBreakpointWrapper;