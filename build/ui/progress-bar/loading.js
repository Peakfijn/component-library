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

var Loading = function Loading(_ref) {
	var children = _ref.children,
	    height = _ref.height;
	return _react2.default.createElement(
		_styles.LoadingContainer,
		{
			height: height,
			modifier: 'flex',
			justify: 'center',
			align: 'center'
		},
		children
	);
};

Loading.propTypes = {
	children: _propTypes2.default.node.isRequired,
	height: _propTypes2.default.string
};

Loading.defaultProps = {
	height: '50vh'
};

exports.default = Loading;