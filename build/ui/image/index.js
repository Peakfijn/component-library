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

var Image = function Image(props) {
	var src = props.src,
	    modifier = props.modifier,
	    className = props.className,
	    borderRadius = props.borderRadius,
	    width = props.width,
	    height = props.height,
	    componentWidth = props.componentWidth,
	    componentHeight = props.componentHeight,
	    fit = props.fit;

	if (!src) {
		return null;
	}

	return _react2.default.createElement(_styles2.default, {
		src: src,
		modifier: modifier,
		className: className,
		borderRadius: borderRadius,
		fit: fit,
		width: width,
		height: height,
		componentWidth: componentWidth,
		componentHeight: componentHeight
	});
};

Image.defaultProps = {
	modifier: null,
	className: null,
	borderRadius: null,
	width: null,
	height: null,
	fit: null,
	componentWidth: null,
	componentHeight: null
};

Image.propTypes = {
	className: _propTypes2.default.string,
	src: _propTypes2.default.oneOfType([_propTypes2.default.string]).isRequired,
	modifier: _propTypes2.default.string,
	width: _propTypes2.default.string,
	fit: _propTypes2.default.oneOf(['cover']),
	height: _propTypes2.default.string,
	componentWidth: _propTypes2.default.string,
	componentHeight: _propTypes2.default.string,
	borderRadius: _propTypes2.default.oneOf(['small', 'medium', 'large', 'full'])
};

exports.default = Image;