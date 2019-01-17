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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bar = function Bar(props) {
	var progress = props.progress,
	    modifier = props.modifier,
	    color = props.color,
	    title = props.title,
	    className = props.className;


	return _react2.default.createElement(
		'div',
		_extends({}, props, { className: className }),
		(modifier === 'header' || modifier === "verbose") && _react2.default.createElement(
			_styles.StyledHeader,
			null,
			_react2.default.createElement(
				'span',
				null,
				title
			),
			modifier === "verbose" && _react2.default.createElement(
				'span',
				null,
				progress + ' %'
			)
		),
		_react2.default.createElement(
			_styles.StyledBar,
			null,
			_react2.default.createElement(_styles.StyledProgress, { progress: progress + '%', color: color }),
			modifier === "slider" && _react2.default.createElement(_styles.Slider, { progress: progress + '%' })
		)
	);
};

Bar.defaultProps = {
	progress: 0,
	type: 'button',
	disabled: false,
	modifier: 'primary',
	size: null,
	color: null,
	title: '',
	className: null
};

Bar.propTypes = {
	className: _propTypes2.default.string,
	progress: _propTypes2.default.number,
	type: _propTypes2.default.string,
	title: _propTypes2.default.string,
	disabled: _propTypes2.default.bool,
	modifier: _propTypes2.default.string,
	size: _propTypes2.default.string,
	color: _propTypes2.default.string
};

exports.default = Bar;