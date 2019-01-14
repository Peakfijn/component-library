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

var Label = function Label(props) {
	var color = props.color,
	    textColor = props.textColor,
	    children = props.children,
	    size = props.size;


	return _react2.default.createElement(
		_styles2.default,
		{ color: color, textColor: textColor, size: size },
		children
	);
};

Label.defaultProps = {
	textColor: 'normal',
	size: 'medium',
	children: null
};

Label.propTypes = {
	color: _propTypes2.default.string.isRequired,
	size: _propTypes2.default.string,
	textColor: _propTypes2.default.string,
	children: _propTypes2.default.string
};

exports.default = Label;