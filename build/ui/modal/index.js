'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
	var children = props.children,
	    isOpen = props.isOpen,
	    toggleModal = props.toggleModal,
	    footerContent = props.footerContent,
	    className = props.className,
	    maxWidthBreakpoint = props.maxWidthBreakpoint;


	var onBackGroundClick = function onBackGroundClick(e) {
		if (e.target === e.currentTarget) {
			toggleModal();
		}
	};

	return isOpen ? _react2.default.createElement(
		_styles.ModalContainer,
		{ className: className },
		_react2.default.createElement(
			_styles.ModalContentContainer,
			{ onClick: onBackGroundClick },
			_react2.default.createElement(
				_styles.ModalContent,
				{ maxWidthBreakpoint: maxWidthBreakpoint },
				children,
				footerContent && _react2.default.createElement(
					_styles.ModalFooter,
					null,
					footerContent
				)
			)
		)
	) : null;
};

Modal.defaultProps = {
	footerContent: null,
	className: null,
	maxWidthBreakpoint: "large"
};

Modal.propTypes = {
	className: _propTypes2.default.string,
	children: _propTypes2.default.node.isRequired,
	footerContent: _propTypes2.default.node,
	isOpen: _propTypes2.default.bool.isRequired,
	toggleModal: _propTypes2.default.func.isRequired,
	maxWidthBreakpoint: _propTypes2.default.string
};

exports.default = Modal;