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

var _switchWrapper = require('../styles/switch-wrapper');

var _switchWrapper2 = _interopRequireDefault(_switchWrapper);

var _hiddenInput = require('../styles/hidden-input');

var _hiddenInput2 = _interopRequireDefault(_hiddenInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
	var disabled = _ref.disabled,
	    indeterminate = _ref.indeterminate,
	    input = _ref.input,
	    meta = _ref.meta,
	    initialValue = _ref.initialValue,
	    label = _ref.label,
	    id = _ref.id,
	    focussed = _ref.focussed,
	    borderRadius = _ref.borderRadius,
	    className = _ref.className;

	var selected = input ? input.value : initialValue;

	return _react2.default.createElement(
		_formGroup2.default,
		{
			id: id,
			meta: meta,
			disabled: disabled,
			className: className
		},
		_react2.default.createElement(
			_switchWrapper2.default,
			null,
			_react2.default.createElement(
				_styles.Box,
				{
					selected: selected,
					disabled: disabled,
					focussed: meta.active || focussed,
					indeterminate: indeterminate,
					borderRadius: borderRadius
				},
				(selected || indeterminate) && _react2.default.createElement(
					_styles.Check,
					{
						selected: selected,
						disabled: disabled,
						indeterminate: indeterminate
					},
					indeterminate ? '-' : '\u2714 '
				)
			),
			label,
			_react2.default.createElement(_hiddenInput2.default, {
				onClick: !disabled ? function () {
					return input.onChange(!selected);
				} : undefined,
				onFocus: function onFocus() {
					return input.onFocus && input.onFocus();
				},
				onBlur: function onBlur() {
					return input.onBlur && input.onBlur();
				},
				disabled: disabled,
				type: 'checkbox',
				selected: selected,
				id: id
			})
		)
	);
};

Checkbox.defaultProps = {
	label: null,
	className: null,
	disabled: false,
	focussed: false,
	initialValue: false,
	id: null,
	indeterminate: false,
	meta: {},
	borderRadius: null
};

Checkbox.propTypes = {
	className: _propTypes2.default.string,
	id: _propTypes2.default.string,
	label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	disabled: _propTypes2.default.bool,
	initialValue: _propTypes2.default.bool,
	focussed: _propTypes2.default.bool,
	meta: _propTypes2.default.objectOf(_propTypes2.default.any),
	input: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired,
	indeterminate: _propTypes2.default.bool,
	borderRadius: _propTypes2.default.oneOf(['small', 'medium', 'large', 'full'])
};

exports.default = Checkbox;