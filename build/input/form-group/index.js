'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _labelContent = require('./label-content');

var _labelContent2 = _interopRequireDefault(_labelContent);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _ui = require('../../ui');

var _errorMessage = require('./error-message');

var _errorMessage2 = _interopRequireDefault(_errorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormGroup = function FormGroup(props) {
	var label = props.label,
	    _props$meta = props.meta,
	    meta = _props$meta === undefined ? {} : _props$meta,
	    children = props.children,
	    id = props.id,
	    icon = props.icon,
	    iconPosition = props.iconPosition,
	    className = props.className;


	var errorMessage = meta.submitFailed && _react2.default.createElement(_errorMessage2.default, {
		message: meta.error,
		isValid: !meta.valid
	});

	return _react2.default.createElement(
		_label2.default,
		{ htmlFor: id, className: className },
		label && _react2.default.createElement(
			_labelContent2.default,
			null,
			label
		),
		_react2.default.createElement(
			_content2.default,
			null,
			children,
			icon && _react2.default.createElement(_ui.Icon, { icon: icon, modifier: iconPosition && 'input-' + iconPosition })
		),
		errorMessage
	);
};

FormGroup.defaultProps = {
	label: null,
	children: null,
	iconPosition: null,
	icon: null,
	className: null
};

FormGroup.propTypes = {
	className: _propTypes2.default.string,
	children: _propTypes2.default.node,
	id: _propTypes2.default.string.isRequired,
	iconPosition: _propTypes2.default.string,
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
	meta: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

exports.default = FormGroup;