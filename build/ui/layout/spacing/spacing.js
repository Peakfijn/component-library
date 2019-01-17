'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spacing = function Spacing(props) {
	var modifier = props.modifier,
	    horizontal = props.horizontal,
	    vertical = props.vertical,
	    children = props.children,
	    maxAtBreakpoint = props.maxAtBreakpoint,
	    minAtBreakpoint = props.minAtBreakpoint,
	    maxWidthBreakpoint = props.maxWidthBreakpoint,
	    isWide = props.isWide,
	    isInline = props.isInline,
	    className = props.className;


	return _react2.default.createElement(
		_styles2.default,
		{
			modifier: modifier,
			isWide: isWide,
			isInline: isInline,
			horizontal: horizontal,
			vertical: vertical,
			minAtBreakpoint: minAtBreakpoint,
			maxAtBreakpoint: maxAtBreakpoint,
			maxWidthBreakpoint: maxWidthBreakpoint,
			className: className
		},
		children
	);
};

Spacing.defaultProps = {
	horizontal: 'medium',
	vertical: 'medium',
	maxWidthBreakpoint: 'none',
	minAtBreakpoint: null,
	maxAtBreakpoint: null,
	modifier: null,
	isWide: null,
	isInline: null,
	children: null,
	className: null
};

Spacing.propTypes = {
	className: _propTypes2.default.string,
	modifier: _propTypes2.default.string,
	horizontal: _propTypes2.default.string,
	vertical: _propTypes2.default.string,
	isWide: _propTypes2.default.bool,
	isInline: _propTypes2.default.bool,
	maxWidthBreakpoint: _propTypes2.default.string,
	minAtBreakpoint: _propTypes2.default.shape({
		small: _propTypes2.default.shape({
			horizontal: _propTypes2.default.string,
			vertical: _propTypes2.default.string
		}),
		medium: _propTypes2.default.shape({
			horizontal: _propTypes2.default.string,
			vertical: _propTypes2.default.string
		}),
		large: _propTypes2.default.shape({
			horizontal: _propTypes2.default.string,
			vertical: _propTypes2.default.string
		}),
		huge: _propTypes2.default.shape({
			horizontal: _propTypes2.default.string,
			vertical: _propTypes2.default.string
		})
	}),
	maxAtBreakpoint: _propTypes2.default.shape({
		small: _propTypes2.default.shape({
			horizontal: _propTypes2.default.string,
			vertical: _propTypes2.default.string
		}),
		medium: _propTypes2.default.shape({
			horizontal: _propTypes2.default.string,
			vertical: _propTypes2.default.string
		}),
		large: _propTypes2.default.shape({
			horizontal: _propTypes2.default.string,
			vertical: _propTypes2.default.string
		}),
		huge: _propTypes2.default.shape({
			horizontal: _propTypes2.default.string,
			vertical: _propTypes2.default.string
		})
	}),
	children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
};

exports.default = Spacing;