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

var _formGroup = require('../form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
	var focussed = _ref.focussed,
	    options = _ref.options,
	    disabled = _ref.disabled,
	    placeholder = _ref.placeholder,
	    input = _ref.input,
	    initialValue = _ref.initialValue,
	    size = _ref.size,
	    iconPosition = _ref.iconPosition,
	    label = _ref.label,
	    id = _ref.id,
	    icon = _ref.icon,
	    meta = _ref.meta,
	    className = _ref.className;
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
		_react2.default.createElement(
			_styles.StyledSelect,
			_extends({
				disabled: disabled,
				focussed: focussed,
				value: input ? input.value : initialValue,
				size: size,
				icon: icon,
				iconPosition: iconPosition
			}, input),
			placeholder && _react2.default.createElement(
				'option',
				{ value: '', disabled: true },
				placeholder
			),
			options.map(function (item) {
				return _react2.default.createElement(
					'option',
					{
						key: 'select-option-' + id + '-' + item.value,
						value: item.value
					},
					item.label
				);
			})
		)
	);
};

Select.defaultProps = {
	disabled: false,
	focussed: false,
	placeholder: 'Select',
	size: "medium",
	iconPosition: "right",
	icon: 'angle-down',
	label: null,
	input: {},
	initialValue: '',
	meta: {},
	className: null
};

Select.propTypes = {
	className: _propTypes2.default.string,
	input: _propTypes2.default.objectOf(_propTypes2.default.any),
	initialValue: _propTypes2.default.string,
	meta: _propTypes2.default.objectOf(_propTypes2.default.any),
	id: _propTypes2.default.string.isRequired,
	placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.number, _propTypes2.default.shape({
		id: _propTypes2.default.string.isRequired,
		defaultMessage: _propTypes2.default.string.isRequired
	})]),
	disabled: _propTypes2.default.bool,
	focussed: _propTypes2.default.bool,
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	size: _propTypes2.default.oneOf(['medium']),
	iconPosition: _propTypes2.default.oneOf(['left', 'right']),
	label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		value: _propTypes2.default.string,
		label: _propTypes2.default.string
	})).isRequired
};

exports.default = Select;