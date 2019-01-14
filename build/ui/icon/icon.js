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

var Icon = function Icon(props) {
	var icon = props.icon,
	    spin = props.spin,
	    modifier = props.modifier;

	if (!icon) {
		return null;
	}

	return _react2.default.createElement(_styles2.default, {
		icon: icon,
		spin: spin,
		modifier: modifier
	});
};
Icon.defaultProps = {
	modifier: null
};

Icon.defaultProps = {
	spin: false,
	modifier: ''
};

Icon.propTypes = {
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.objectOf(_propTypes2.default.any)]).isRequired,
	spin: _propTypes2.default.bool,
	modifier: _propTypes2.default.string
};

exports.default = Icon;