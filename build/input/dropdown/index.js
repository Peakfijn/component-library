'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _downshift = require('downshift');

var _downshift2 = _interopRequireDefault(_downshift);

var _dropdownList = require('./dropdown-list');

var _dropdownList2 = _interopRequireDefault(_dropdownList);

var _styles = require('./styles');

var _text = require('../text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
	_inherits(Dropdown, _Component);

	function Dropdown() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Dropdown);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			intermittentValue: '',
			isOpen: false
		}, _this.handleChange = function (item) {
			var _this$props = _this.props,
			    field = _this$props.field,
			    form = _this$props.form;

			form.setFieldValue(field.name, item.value);
			field.onBlur();
			_this.setState({ isOpen: false });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Dropdown, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    modifier = _props.modifier,
			    meta = _props.meta,
			    options = _props.options,
			    disabled = _props.disabled,
			    placeholder = _props.placeholder,
			    label = _props.label,
			    size = _props.size,
			    icon = _props.icon,
			    focussed = _props.focussed,
			    iconPosition = _props.iconPosition,
			    id = _props.id,
			    notFound = _props.notFound,
			    className = _props.className,
			    field = _props.field,
			    other = _objectWithoutProperties(_props, ['modifier', 'meta', 'options', 'disabled', 'placeholder', 'label', 'size', 'icon', 'focussed', 'iconPosition', 'id', 'notFound', 'className', 'field']);

			var _state = this.state,
			    intermittentValue = _state.intermittentValue,
			    isOpen = _state.isOpen;

			return _react2.default.createElement(
				_downshift2.default,
				{
					className: className,
					itemToString: function itemToString(i) {
						return !i || i.label == null ? "" : String(i.label);
					},
					selectedItem: field.value,
					onChange: this.handleChange,
					onSelect: function onSelect() {
						_this2.setState({ intermittentValue: '', isOpen: false });
						field.onBlur();
					}
				},
				function (_ref2) {
					var getMenuProps = _ref2.getMenuProps,
					    getItemProps = _ref2.getItemProps,
					    selectedItem = _ref2.selectedItem;
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_styles.Wrapper,
							{ className: className },
							_react2.default.createElement(
								_text2.default,
								{
									id: id,
									fullWidth: true,
									meta: meta,
									name: other.name,
									label: label,
									size: size,
									icon: icon,
									iconPosition: iconPosition,
									disabled: disabled,
									placeholder: field.value ? options.reduce(function (accumulator, option) {
										return option.value === field.value && option.label || accumulator;
									}, '') : placeholder,
									input: {
										value: intermittentValue,
										onChange: function onChange(e) {
											_this2.setState({ intermittentValue: e.target.value });
										},
										onFocus: function onFocus() {
											_this2.setState({ isOpen: true });
										},
										onBlur: function onBlur() {
											field.onBlur();
											_this2.setState({ isOpen: false });
										}
									}
								},
								_react2.default.createElement(_dropdownList2.default, {
									notFound: notFound,
									isOpen: isOpen || meta.active,
									getListProps: getMenuProps,
									getItemProps: getItemProps,
									options: options,
									selectedValue: selectedItem,
									intermittentValue: intermittentValue,
									id: id
								})
							)
						)
					);
				}
			);
		}
	}]);

	return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
	disabled: false,
	focussed: false,
	modifier: 'primary',
	placeholder: 'Select',
	size: 'medium',
	iconPosition: "right",
	input: {},
	field: {},
	form: {},
	label: null,
	notFound: 'No result',
	icon: 'angle-down',
	meta: {},
	className: null
};

Dropdown.propTypes = {
	className: _propTypes2.default.string,
	placeholder: _propTypes2.default.string,
	id: _propTypes2.default.string.isRequired,
	title: _propTypes2.default.string.isRequired,
	disabled: _propTypes2.default.bool,
	focussed: _propTypes2.default.bool,
	modifier: _propTypes2.default.string,
	input: _propTypes2.default.objectOf(_propTypes2.default.any),
	field: _propTypes2.default.objectOf(_propTypes2.default.any),
	form: _propTypes2.default.objectOf(_propTypes2.default.any),
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	notFound: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		value: _propTypes2.default.string,
		label: _propTypes2.default.string
	})).isRequired,
	iconPosition: _propTypes2.default.oneOf(['left', 'right']),
	meta: _propTypes2.default.objectOf(_propTypes2.default.any),
	label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	size: _propTypes2.default.oneOf(['medium'])
};

exports.default = Dropdown;