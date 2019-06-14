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

var Separator = function Separator(_ref) {
	var borderWidth = _ref.borderWidth,
	    color = _ref.color;
	return _react2.default.createElement(_styles.SeparatorStyled, {
		borderWidth: borderWidth,
		color: color
	});
};

Separator.defaultProps = {
	borderWidth: 'small',
	color: 'light'
};

Separator.propTypes = {
	borderWidth: _propTypes2.default.oneOf(['small', 'medium', 'large']),
	color: _propTypes2.default.oneOf(['grey', 'light', 'normal', 'dark', 'inverted'])
};

exports.default = Separator;