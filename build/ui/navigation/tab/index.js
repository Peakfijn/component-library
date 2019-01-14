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

var Tab = function Tab(props) {
	var title = props.title,
	    isActive = props.isActive,
	    onClick = props.onClick;


	return _react2.default.createElement(
		_styles2.default,
		{ isActive: isActive, onClick: onClick },
		title
	);
};

Tab.defaultProps = {
	isActive: false
};

Tab.propTypes = {
	title: _propTypes2.default.string.isRequired,
	isActive: _propTypes2.default.bool,
	onClick: _propTypes2.default.func.isRequired
};

exports.default = Tab;