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

var Wrapper = function Wrapper(props) {
	var modifier = props.modifier,
	    children = props.children,
	    align = props.align,
	    horizontalGutter = props.horizontalGutter,
	    verticalGutter = props.verticalGutter,
	    grow = props.grow,
	    background = props.background;


	return _react2.default.createElement(
		_styles2.default,
		{
			horizontalGutter: horizontalGutter,
			verticalGutter: verticalGutter,
			align: align,
			grow: grow,
			background: background,
			modifier: modifier
		},
		children
	);
};

Wrapper.defaultProps = {
	modifier: null,
	horizontalGutter: null,
	verticalGutter: null,
	align: null,
	grow: null,
	background: null,
	children: null
};

Wrapper.propTypes = {
	modifier: _propTypes2.default.oneOf(['flex', 'flex-cell', 'full', 'bottom-right', 'full-right']),
	align: _propTypes2.default.oneOf(['flex-start', 'flex-end', 'center']),
	grow: _propTypes2.default.oneOf(['not-grow']),
	background: _propTypes2.default.oneOf(['window']),
	horizontalGutter: _propTypes2.default.string,
	verticalGutter: _propTypes2.default.string,
	children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
};

exports.default = Wrapper;