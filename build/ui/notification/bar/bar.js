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

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notificationIcon = {
	'success': { icon: 'check-circle' },
	'info': { icon: 'info-circle' },
	'warning': { icon: 'info-circle' },
	'danger': { icon: 'times-circle' }
};

var Bar = function Bar(props) {
	var type = props.type,
	    children = props.children,
	    onLeftClick = props.onLeftClick,
	    onRightClick = props.onRightClick;


	return _react2.default.createElement(
		_styles2.default,
		_extends({
			type: type
		}, props),
		_react2.default.createElement(
			_.Button,
			{ modifier: 'invisible', onClick: onLeftClick },
			_react2.default.createElement(_.Icon, { icon: notificationIcon[type].icon })
		),
		_react2.default.createElement(
			'span',
			null,
			children
		),
		_react2.default.createElement(
			_.Button,
			{ modifier: 'invisible', onClick: onRightClick },
			_react2.default.createElement(_.Icon, { icon: 'times' })
		)
	);
};

Bar.defaultProps = {
	onLeftClick: null,
	onRightClick: null
};

Bar.propTypes = {
	onLeftClick: _propTypes2.default.func,
	onRightClick: _propTypes2.default.func,
	type: _propTypes2.default.string.isRequired,
	children: _propTypes2.default.string.isRequired
};

exports.default = Bar;