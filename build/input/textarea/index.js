'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = require('react-intl');

var _formGroup = require('../form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function TextArea(props) {
	var placeholder = props.placeholder,
	    intl = props.intl,
	    input = props.input,
	    type = props.type,
	    disabled = props.disabled,
	    meta = props.meta,
	    maxLength = props.maxLength,
	    autocomplete = props.autocomplete,
	    min = props.min,
	    max = props.max,
	    initialValue = props.initialValue,
	    id = props.id,
	    label = props.label,
	    size = props.size,
	    icon = props.icon,
	    iconPosition = props.iconPosition,
	    focussed = props.focussed,
	    className = props.className;


	return _react2.default.createElement(
		_formGroup2.default,
		{
			label: label,
			icon: icon,
			id: id,
			iconPosition: iconPosition,
			meta: meta,
			className: className
		},
		_react2.default.createElement(_styles2.default, _extends({
			id: id,
			placeholder: placeholder && placeholder.id ? intl.formatMessage(placeholder) : placeholder
		}, input, {
			size: size,
			name: input.name,
			type: type,
			min: min,
			max: max,
			disabled: disabled,
			focussed: focussed,
			maxLength: maxLength,
			autoComplete: autocomplete,
			value: input.value || initialValue,
			isValidate: meta.valid,
			isSubmitted: meta.submitFailed,
			icon: icon,
			iconPosition: iconPosition
		}))
	);
};

TextArea.defaultProps = {
	input: {},
	label: null,
	type: 'text',
	disabled: false,
	focussed: false,
	meta: {},
	maxLength: null,
	min: null,
	max: null,
	autocomplete: "on",
	size: "medium",
	iconPosition: "right",
	initialValue: '',
	icon: null,
	className: null
};

TextArea.propTypes = {
	className: _propTypes2.default.string,
	placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.number, _propTypes2.default.shape({
		id: _propTypes2.default.string.isRequired,
		defaultMessage: _propTypes2.default.string.isRequired
	})]).isRequired,
	label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	id: _propTypes2.default.string.isRequired,
	meta: _propTypes2.default.objectOf(_propTypes2.default.any),
	input: _propTypes2.default.objectOf(_propTypes2.default.any),
	type: _propTypes2.default.string,
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	iconPosition: _propTypes2.default.oneOf(['left', 'right']),
	size: _propTypes2.default.oneOf(['medium']),
	autocomplete: _propTypes2.default.string,
	initialValue: _propTypes2.default.string,
	maxLength: _propTypes2.default.number,
	intl: _reactIntl.intlShape.isRequired,
	focussed: _propTypes2.default.bool,
	disabled: _propTypes2.default.bool,
	min: _propTypes2.default.number,
	max: _propTypes2.default.number
};

exports.default = (0, _reactIntl.injectIntl)(TextArea);