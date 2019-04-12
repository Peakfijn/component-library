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

var DropDownList = function DropDownList(props) {
	var isOpen = props.isOpen,
	    options = props.options,
	    getListProps = props.getListProps,
	    getItemProps = props.getItemProps,
	    selectedValue = props.selectedValue,
	    intermittentValue = props.intermittentValue,
	    id = props.id,
	    notFound = props.notFound,
	    isCreatable = props.isCreatable,
	    handleCreate = props.handleCreate,
	    className = props.className;


	var filteredOptions = options.filter(function (option) {
		return Object.values(option).join().toLowerCase().includes(intermittentValue.toLowerCase());
	});

	return _react2.default.createElement(
		_styles.StyledList,
		_extends({ hidden: !isOpen }, getListProps(), { className: className }),
		filteredOptions.length === 0 && _react2.default.createElement(
			_styles.StyledListItem,
			null,
			notFound
		),
		filteredOptions.map(function (item, index) {
			return (typeof selectedValue === 'string' ? selectedValue === item.value : selectedValue && selectedValue.includes(item.value)) ? _react2.default.createElement(
				_styles.StyledSelectedListItem,
				getItemProps({
					item: item,
					index: index,
					key: 'multi-select-item-' + id + '-' + item.value
				}),
				item.icon && _react2.default.createElement(
					_styles.Spacer,
					null,
					item.icon
				),
				item.label
			) : _react2.default.createElement(
				_styles.StyledListItem,
				getItemProps({
					item: item,
					index: index,
					key: 'multi-select-item-' + id + '-' + item.value
				}),
				item.icon && _react2.default.createElement(
					_styles.Spacer,
					null,
					item.icon
				),
				item.label
			);
		}),
		intermittentValue && isCreatable && _react2.default.createElement(
			_styles.StyledListItem,
			{
				onClick: function onClick() {
					return handleCreate(intermittentValue);
				}
			},
			'Create: ',
			intermittentValue
		)
	);
};

DropDownList.defaultProps = {
	isOpen: false,
	isCreatable: false,
	options: [],
	selectedValue: '',
	notFound: 'Nothing found...',
	intermittentValue: null,
	handleCreate: null,
	className: null
};

DropDownList.propTypes = {
	className: _propTypes2.default.string,
	id: _propTypes2.default.string.isRequired,
	notFound: _propTypes2.default.string,
	handleCreate: _propTypes2.default.func,
	isOpen: _propTypes2.default.bool,
	isCreatable: _propTypes2.default.bool,
	options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		value: _propTypes2.default.string,
		label: _propTypes2.default.string
	})),
	getListProps: _propTypes2.default.func.isRequired,
	getItemProps: _propTypes2.default.func.isRequired,
	selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
	intermittentValue: _propTypes2.default.string
};

exports.default = DropDownList;