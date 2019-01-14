'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDeviceDetect = require('react-device-detect');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _formGroup = require('../form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Datepicker = function (_Component) {
	_inherits(Datepicker, _Component);

	function Datepicker() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Datepicker);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyPress = function (ev) {
			if (ev.key === 'Enter') {
				ev.preventDefault();
				_this.durationRef.blur();
			}
		}, _this.handleChange = function (event) {
			var _this$props = _this.props,
			    onChange = _this$props.input.onChange,
			    notation = _this$props.notation;


			if (event && (0, _moment2.default)(event, notation).isValid) {
				onChange((0, _moment2.default)(event, notation));
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Datepicker, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    value = _props.input.value,
			    _props$notation = _props.notation,
			    notation = _props$notation === undefined ? "YYYY-MM-DD" : _props$notation,
			    size = _props.size,
			    meta = _props.meta,
			    label = _props.label,
			    id = _props.id,
			    iconPosition = _props.iconPosition,
			    icon = _props.icon,
			    placeholder = _props.placeholder;

			if (!_reactDeviceDetect.isMobile && !_reactDeviceDetect.isTablet && !(_reactDeviceDetect.isIE && _reactDeviceDetect.browserVersion <= 11)) {
				return _react2.default.createElement(
					_formGroup2.default,
					{
						label: label,
						id: id,
						iconPosition: iconPosition,
						icon: icon,
						meta: meta
					},
					_react2.default.createElement(
						_styles2.default,
						null,
						_react2.default.createElement(_styles.StyledReactDatePicker, {
							selected: value,
							dateFormat: notation,
							placeholderText: placeholder || notation,
							size: size,
							type: 'date',
							onChangeRaw: function onChangeRaw(event) {
								return _this2.handleChange(event);
							},
							onChange: function onChange(event) {
								return _this2.handleChange(event);
							},
							isValidate: meta.valid,
							isSubmitted: meta.submitFailed,
							onKeyPress: this.onKeyPress,
							icon: icon,
							iconPosition: iconPosition
						})
					)
				);
			}
			return _react2.default.createElement(_.Text, _extends({
				type: 'date',
				onChange: function onChange(event) {
					return _this2.handleChange(event.target.value);
				},
				value: value && value.format(notation),
				placeholder: notation
			}, this.props));
		}
	}]);

	return Datepicker;
}(_react.Component);

Datepicker.defaultProps = {
	input: {},
	meta: {},
	icon: null,
	iconPosition: null,
	label: null,
	size: "medium",
	notation: 'DD-MM-YYYY'
};

Datepicker.propTypes = {
	meta: _propTypes2.default.objectOf(_propTypes2.default.any),
	input: _propTypes2.default.objectOf(_propTypes2.default.any),
	id: _propTypes2.default.string.isRequired,
	notation: _propTypes2.default.string,
	size: _propTypes2.default.string,
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.number, _propTypes2.default.shape({
		id: _propTypes2.default.string.isRequired,
		defaultMessage: _propTypes2.default.string.isRequired
	})]).isRequired,
	label: _propTypes2.default.objectOf(_propTypes2.default.any),
	iconPosition: _propTypes2.default.oneOf(['left', 'right'])
};

exports.default = Datepicker;