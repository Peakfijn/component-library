'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ui = require('../../../ui');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(props) {
	var message = props.message,
	    isValid = props.isValid,
	    className = props.className;


	if (!message || message === '') {
		return null;
	}

	return _react2.default.createElement(
		_styles2.default,
		{ isValid: isValid, className: className },
		_react2.default.createElement(_ui.Icon, { icon: 'times-circle', modifier: 'error' }),
		message
	);
};

ErrorMessage.defaultProps = {
	isValid: false,
	className: null
};

ErrorMessage.propTypes = {
	className: _propTypes2.default.string,
	isValid: _propTypes2.default.bool,
	message: _propTypes2.default.string.isRequired
};

exports.default = ErrorMessage;