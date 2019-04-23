'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = function Badge(props) {
	var count = props.count,
	    children = props.children,
	    color = props.color,
	    textColor = props.textColor,
	    size = props.size,
	    className = props.className,
	    position = props.position;


	return _react2.default.createElement(
		_styles.StyledContainer,
		{ className: className },
		children,
		_react2.default.createElement(
			_styles.StyledCircle,
			{ position: position, color: color, textColor: textColor, size: size },
			count
		)
	);
};

Badge.defaultProps = {
	textColor: 'inverted',
	size: 'medium',
	color: 'info',
	children: null,
	className: null,
	position: null
};

Badge.propTypes = {
	className: _propTypes2.default.string,
	count: _propTypes2.default.number.isRequired,
	children: _propTypes2.default.node,
	color: _propTypes2.default.string,
	size: _propTypes2.default.string,
	textColor: _propTypes2.default.string,
	position: _propTypes2.default.oneOf(['top-right'])
};

exports.default = Badge;