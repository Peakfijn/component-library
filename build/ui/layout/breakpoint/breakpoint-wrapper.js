'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreakpointWrapper = function BreakpointWrapper(props) {
	var type = props.type,
	    breakpoint = props.breakpoint,
	    children = props.children;


	return _react2.default.createElement(
		_styles2.default,
		_extends({}, props, {
			type: type,
			breakpoint: breakpoint
		}),
		children
	);
};

BreakpointWrapper.propTypes = {
	type: _propTypes2.default.oneOf(['min', 'max']).isRequired,
	breakpoint: _propTypes2.default.oneOf(['small', 'medium', 'large', 'huge', 'full', 'fullViewport']).isRequired,
	children: _propTypes2.default.node.isRequired
};

exports.default = BreakpointWrapper;