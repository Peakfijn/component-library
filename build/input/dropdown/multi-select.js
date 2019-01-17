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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiSelect = function (_Component) {
	_inherits(MultiSelect, _Component);

	function MultiSelect() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, MultiSelect);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			intermittentValue: '',
			additionalOptions: []
		}, _this.handleFocus = function () {
			var onFocus = _this.props.input.onFocus;

			onFocus();
		}, _this.handleBlur = function (callBack) {
			var _this$props = _this.props,
			    onBlur = _this$props.input.onBlur,
			    isCreatable = _this$props.isCreatable;


			if (!isCreatable) {
				_this.setState({ intermittentValue: '' });
			}
			onBlur();
			setTimeout(callBack, 300);
		}, _this.handleCreate = function (newValue) {
			var additionalOptions = _this.state.additionalOptions;

			_this.handleAddSelectedItem(newValue);
			_this.setState({
				intermittentValue: '',
				additionalOptions: [].concat(_toConsumableArray(additionalOptions), [{
					value: newValue,
					label: newValue,
					name: newValue,
					id: 'dynamic-' + newValue
				}])
			});
		}, _this.handleChange = function (selectedItem) {
			var value = _this.props.input.value;

			if (value.includes(selectedItem.value)) {
				_this.handleRemoveItem(selectedItem.value);
			} else {
				_this.handleAddSelectedItem(selectedItem.value);
			}
		}, _this.handleRemoveItem = function (item) {
			var _this$props$input = _this.props.input,
			    value = _this$props$input.value,
			    onChange = _this$props$input.onChange;

			onChange(value.filter(function (i) {
				return i !== item;
			}));
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(MultiSelect, [{
		key: 'handleAddSelectedItem',
		value: function handleAddSelectedItem(item) {
			var _props$input = this.props.input,
			    value = _props$input.value,
			    onChange = _props$input.onChange;

			onChange([].concat(_toConsumableArray(value), [item]));
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    modifier = _props.modifier,
			    meta = _props.meta,
			    options = _props.options,
			    disabled = _props.disabled,
			    placeholder = _props.placeholder,
			    value = _props.input.value,
			    label = _props.label,
			    size = _props.size,
			    icon = _props.icon,
			    iconPosition = _props.iconPosition,
			    id = _props.id,
			    notFound = _props.notFound,
			    isCreatable = _props.isCreatable,
			    className = _props.className,
			    other = _objectWithoutProperties(_props, ['modifier', 'meta', 'options', 'disabled', 'placeholder', 'input', 'label', 'size', 'icon', 'iconPosition', 'id', 'notFound', 'isCreatable', 'className']);

			var _state = this.state,
			    additionalOptions = _state.additionalOptions,
			    intermittentValue = _state.intermittentValue;

			var allOptions = [].concat(_toConsumableArray(options), _toConsumableArray(additionalOptions));
			return _react2.default.createElement(
				_downshift2.default,
				{
					className: className,
					itemToString: function itemToString(i) {
						return !i || i.label == null ? "" : String(i.label);
					},
					selectedItem: value,
					onChange: this.handleChange
				},
				function (_ref2) {
					var getMenuProps = _ref2.getMenuProps,
					    getItemProps = _ref2.getItemProps,
					    isOpen = _ref2.isOpen,
					    openMenu = _ref2.openMenu,
					    closeMenu = _ref2.closeMenu,
					    selectedItem = _ref2.selectedItem;
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_styles.Wrapper,
							null,
							_react2.default.createElement(
								_styles.StyledText,
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
									placeholder: value && value.length > 0 ? allOptions.reduce(function (accumulator, option) {
										return value.includes(option.value) && [option.label].concat(_toConsumableArray(accumulator)) || accumulator;
									}, []).join(', ') : placeholder,
									input: {
										value: intermittentValue,
										onChange: function onChange(e) {
											openMenu();
											_this2.setState({ intermittentValue: e.target.value });
										},
										onFocus: function onFocus() {
											openMenu();
											_this2.handleFocus();
										},
										onBlur: function onBlur() {
											_this2.handleBlur(closeMenu);
										}
									}
								},
								_react2.default.createElement(_dropdownList2.default, {
									notFound: notFound,
									isOpen: isOpen || meta.active,
									getListProps: getMenuProps,
									getItemProps: getItemProps,
									options: allOptions,
									selectedValue: selectedItem,
									intermittentValue: intermittentValue,
									id: id,
									handleCreate: function handleCreate(newValue) {
										_this2.handleCreate(newValue);
										openMenu();
									},
									isCreatable: isCreatable
								})
							)
						)
					);
				}
			);
		}
	}]);

	return MultiSelect;
}(_react.Component);

MultiSelect.defaultProps = {
	disabled: false,
	focussed: false,
	isCreatable: false,
	modifier: 'primary',
	placeholder: 'Select',
	size: 'medium',
	iconPosition: "right",
	input: {},
	label: null,
	notFound: 'No result',
	icon: 'angle-down',
	meta: {},
	options: [],
	className: null
};

MultiSelect.propTypes = {
	className: _propTypes2.default.string,
	placeholder: _propTypes2.default.string,
	id: _propTypes2.default.string.isRequired,
	title: _propTypes2.default.string.isRequired,
	disabled: _propTypes2.default.bool,
	isCreatable: _propTypes2.default.bool,
	focussed: _propTypes2.default.bool,
	modifier: _propTypes2.default.string,
	input: _propTypes2.default.objectOf(_propTypes2.default.any),
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	notFound: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		value: _propTypes2.default.string,
		label: _propTypes2.default.string,
		id: _propTypes2.default.string
	})),
	iconPosition: _propTypes2.default.oneOf(['left', 'right']),
	meta: _propTypes2.default.objectOf(_propTypes2.default.any),
	label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	size: _propTypes2.default.oneOf(['medium'])
};

exports.default = MultiSelect;