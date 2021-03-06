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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
	var type = props.type,
	    disabled = props.disabled,
	    modifier = props.modifier,
	    loading = props.loading,
	    state = props.state,
	    size = props.size,
	    children = props.children,
	    color = props.color,
	    text = props.text,
	    onClick = props.onClick,
	    width = props.width,
	    height = props.height,
	    noPadding = props.noPadding,
	    fontSize = props.fontSize,
	    borderRadius = props.borderRadius,
	    className = props.className,
	    noMargin = props.noMargin;


	return _react2.default.createElement(
		_styles2.default,
		{
			type: type,
			noMargin: noMargin,
			modifier: modifier,
			disabled: disabled,
			loading: loading,
			state: state,
			size: size,
			color: color,
			text: text,
			onClick: onClick,
			width: width,
			height: height,
			noPadding: noPadding,
			fontSize: fontSize,
			borderRadius: borderRadius,
			className: className
		},
		loading ? _react2.default.createElement(_icon2.default, { icon: 'spinner', size: 'button', spin: true }) : children
	);
};

Button.defaultProps = {
	type: 'button',
	disabled: false,
	loading: false,
	noPadding: false,
	noMargin: false,
	state: null,
	children: null,
	width: null,
	height: null,
	fontSize: null,
	borderRadius: null,
	color: 'normal',
	text: null,
	modifier: 'primary',
	size: 'medium',
	onClick: function onClick() {},
	className: null
};

Button.propTypes = {
	className: _propTypes2.default.string,
	type: _propTypes2.default.string,
	disabled: _propTypes2.default.bool,
	loading: _propTypes2.default.bool,
	noPadding: _propTypes2.default.bool,
	noMargin: _propTypes2.default.bool,
	modifier: _propTypes2.default.string,
	color: _propTypes2.default.string,
	text: _propTypes2.default.string,
	state: _propTypes2.default.string,
	size: _propTypes2.default.string,
	width: _propTypes2.default.string,
	height: _propTypes2.default.string,
	children: _propTypes2.default.node,
	onClick: _propTypes2.default.func,
	fontSize: _propTypes2.default.oneOf(['medium']),
	borderRadius: _propTypes2.default.oneOf(['small', 'medium', 'large', 'full'])
};

exports.default = Button;