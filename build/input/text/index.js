'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formGroup = require('../form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(props) {
	var placeholder = props.placeholder,
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
	    size = props.size,
	    icon = props.icon,
	    iconPosition = props.iconPosition,
	    label = props.label,
	    focussed = props.focussed,
	    children = props.children,
	    className = props.className,
	    field = props.field,
	    onBlur = props.onBlur,
	    onFocus = props.onFocus,
	    onChange = props.onChange,
	    onClick = props.onClick,
	    name = props.name,
	    value = props.value,
	    error = props.error;

	return _react2.default.createElement(
		_formGroup2.default,
		{
			error: error,
			label: label,
			id: id,
			iconPosition: iconPosition,
			icon: icon,
			meta: meta,
			className: className
		},
		_react2.default.createElement(_styles2.default, {
			id: id,
			placeholder: placeholder,
			onBlur: field.onBlur || input.onBlur || onBlur,
			onFocus: field.onFocus || input.onFocus || onFocus,
			onChange: field.onChange || input.onChange || onChange,
			onClick: field.onClick || input.onClick || onClick,
			size: size,
			name: field.name || input.name || name,
			type: type,
			min: min,
			max: max,
			disabled: disabled,
			maxLength: maxLength,
			autoComplete: autocomplete,
			value: field.value || input.value || value || initialValue,
			error: error || !meta.valid && meta.submitFailed,
			icon: icon,
			iconPosition: iconPosition,
			focussed: focussed
		}),
		children
	);
};

Text.defaultProps = {
	input: {},
	field: {},
	label: null,
	type: 'text',
	disabled: false,
	focussed: false,
	meta: {},
	maxLength: null,
	min: null,
	max: null,
	icon: null,
	autocomplete: "on",
	size: "medium",
	iconPosition: "right",
	children: null,
	initialValue: '',
	className: null,
	onBlur: function onBlur() {},
	onFocus: function onFocus() {},
	onChange: function onChange() {},
	onClick: function onClick() {},
	name: null,
	value: null,
	error: null
};

Text.propTypes = {
	className: _propTypes2.default.string,
	placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.number, _propTypes2.default.shape({
		id: _propTypes2.default.string.isRequired,
		defaultMessage: _propTypes2.default.string.isRequired
	})]).isRequired,
	meta: _propTypes2.default.objectOf(_propTypes2.default.any),
	input: _propTypes2.default.objectOf(_propTypes2.default.any),
	field: _propTypes2.default.objectOf(_propTypes2.default.any),
	label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	type: _propTypes2.default.string,
	initialValue: _propTypes2.default.string,
	id: _propTypes2.default.string.isRequired,
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	iconPosition: _propTypes2.default.oneOf(['left', 'right']),
	size: _propTypes2.default.oneOf(['medium']),
	autocomplete: _propTypes2.default.string,
	maxLength: _propTypes2.default.number,
	disabled: _propTypes2.default.bool,
	focussed: _propTypes2.default.bool,
	min: _propTypes2.default.number,
	max: _propTypes2.default.number,
	children: _propTypes2.default.node,
	onBlur: _propTypes2.default.func,
	onFocus: _propTypes2.default.func,
	onChange: _propTypes2.default.func,
	onClick: _propTypes2.default.func,
	name: _propTypes2.default.string,
	value: _propTypes2.default.string,
	error: _propTypes2.default.string
};

exports.default = Text;