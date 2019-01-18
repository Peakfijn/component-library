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
	    background = props.background,
	    wrap = props.wrap,
	    className = props.className;


	return _react2.default.createElement(
		_styles2.default,
		{
			horizontalGutter: horizontalGutter,
			verticalGutter: verticalGutter,
			align: align,
			grow: grow,
			background: background,
			wrap: wrap,
			modifier: modifier,
			className: className
		},
		children
	);
};

Wrapper.defaultProps = {
	modifier: null,
	horizontalGutter: null,
	verticalGutter: null,
	align: 'start',
	grow: null,
	background: null,
	wrap: null,
	children: null,
	className: null
};

Wrapper.propTypes = {
	className: _propTypes2.default.string,
	modifier: _propTypes2.default.oneOf(['flex', 'flex-column', 'flex-cell', 'full', 'bottom-right', 'full-right']),
	align: _propTypes2.default.oneOf(['start', 'flex-start', 'flex-end', 'center']),
	grow: _propTypes2.default.oneOf(['not-grow', 'fluid']),
	background: _propTypes2.default.oneOf(['window']),
	wrap: _propTypes2.default.shape({
		small: _propTypes2.default.string,
		medium: _propTypes2.default.string,
		large: _propTypes2.default.string,
		huge: _propTypes2.default.string
	}),
	horizontalGutter: _propTypes2.default.string,
	verticalGutter: _propTypes2.default.string,
	children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
};

exports.default = Wrapper;