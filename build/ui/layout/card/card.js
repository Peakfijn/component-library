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

var Card = function Card(_ref) {
	var children = _ref.children;
	return _react2.default.createElement(
		_styles2.default,
		null,
		children
	);
};

Card.propTypes = {
	children: _propTypes2.default.node.isRequired
};

exports.default = Card;