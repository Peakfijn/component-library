'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var Text = function Text(props) {
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
	    size = props.size,
	    icon = props.icon,
	    iconPosition = props.iconPosition,
	    label = props.label,
	    focussed = props.focussed,
	    children = props.children,
	    className = props.className;


	return _react2.default.createElement(
		_formGroup2.default,
		{
			label: label,
			id: id,
			iconPosition: iconPosition,
			icon: icon,
			meta: meta,
			className: className
		},
		_react2.default.createElement(_styles2.default, {
			id: id,
			placeholder: placeholder && placeholder.id ? intl.formatMessage(placeholder) : placeholder,
			onBlur: input.onBlur,
			onFocus: input.onFocus,
			onChange: input.onChange,
			onClick: input.onClick,
			size: size,
			name: input.name,
			type: type,
			min: min,
			max: max,
			disabled: disabled,
			maxLength: maxLength,
			autoComplete: autocomplete,
			value: input.value || initialValue,
			isValidate: meta.valid,
			isSubmitted: meta.submitFailed,
			icon: icon,
			iconPosition: iconPosition,
			focussed: focussed
		}),
		children
	);
};

Text.defaultProps = {
	input: {},
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
	className: null
};

Text.propTypes = {
	className: _propTypes2.default.string,
	placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.number, _propTypes2.default.shape({
		id: _propTypes2.default.string.isRequired,
		defaultMessage: _propTypes2.default.string.isRequired
	})]).isRequired,
	meta: _propTypes2.default.objectOf(_propTypes2.default.any),
	input: _propTypes2.default.objectOf(_propTypes2.default.any),
	label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	type: _propTypes2.default.string,
	initialValue: _propTypes2.default.string,
	id: _propTypes2.default.string.isRequired,
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	iconPosition: _propTypes2.default.oneOf(['left', 'right']),
	size: _propTypes2.default.oneOf(['medium']),
	autocomplete: _propTypes2.default.string,
	maxLength: _propTypes2.default.number,
	intl: _reactIntl.intlShape.isRequired,
	disabled: _propTypes2.default.bool,
	focussed: _propTypes2.default.bool,
	min: _propTypes2.default.number,
	max: _propTypes2.default.number,
	children: _propTypes2.default.node
};

exports.default = (0, _reactIntl.injectIntl)(Text);