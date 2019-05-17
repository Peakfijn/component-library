'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AlertContextProvider = exports.AlertContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertContext = exports.AlertContext = (0, _react.createContext)({});

var AlertContextProvider = exports.AlertContextProvider = function (_Component) {
	_inherits(AlertContextProvider, _Component);

	function AlertContextProvider(props) {
		_classCallCheck(this, AlertContextProvider);

		var _this = _possibleConstructorReturn(this, (AlertContextProvider.__proto__ || Object.getPrototypeOf(AlertContextProvider)).call(this, props));

		_initialiseProps.call(_this);

		var _this$props = _this.props,
		    horizontal = _this$props.horizontal,
		    vertical = _this$props.vertical,
		    stretch = _this$props.stretch;


		_this.state = {
			closeTask: null,
			open: false,
			text: null,
			type: 'info',
			horizontal: horizontal,
			vertical: vertical,
			stretch: stretch
		};
		return _this;
	}

	/**
  * Sets the default position of the alert.
  *
  * @param {string} horizontal Where to place the alert horizontally. Valid values are 'flex-start', 'center'
  *  and 'flex-end'.
  * @param {string} vertical Where to place the alert vertically. Valid values are 'flex-start', 'center'
  *  and 'flex-end'.
  * @param {boolean} stretch Whether or not the alert should be stretched. Valid values are true and false.
  * @return {void}
  */


	/**
  * Displays an alert with the given text, color for a specified amount of time.
  *
  * @param {string} text The text to display.
  * @param {string} type The color to use. Must be specified in base-theme.js. Default is 'info'.
  * @param {number} duration The amount of milliseconds the alert should stay. Null means it will not disappear by
  *  itself.
  * @return {void}
  */


	/**
  * Closes the currently active alert. If there is no active alert, nothing happens.
  *
  * @return {void}
  */


	_createClass(AlertContextProvider, [{
		key: 'render',
		value: function render() {
			var _state = this.state,
			    open = _state.open,
			    text = _state.text,
			    type = _state.type,
			    horizontal = _state.horizontal,
			    vertical = _state.vertical,
			    stretch = _state.stretch;
			var children = this.props.children;


			return _react2.default.createElement(
				AlertContext.Provider,
				{
					value: {
						showAlert: this.show,
						positionAlert: this.position,
						closeAlert: this.close
					}
				},
				children,
				open ? _react2.default.createElement(
					_styles.AlertContainer,
					{
						horizontal: horizontal,
						vertical: vertical
					},
					_react2.default.createElement(
						_styles.AlertDialog,
						{
							stretch: stretch,
							type: type,
							onClick: this.close
						},
						text
					)
				) : null
			);
		}
	}]);

	return AlertContextProvider;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.position = function (horizontal, vertical, stretch) {
		_this2.setState({ horizontal: horizontal, vertical: vertical, stretch: stretch });
	};

	this.show = function (text) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
		var duration = arguments[2];
		var closeTask = _this2.state.closeTask;

		if (closeTask) {
			clearTimeout(closeTask);
		}

		var taskId = duration && setTimeout(_this2.close, duration);
		_this2.setState({
			text: text,
			type: type,
			open: true,
			closeTask: duration ? taskId : null
		});
	};

	this.close = function () {
		_this2.setState({ open: false, closeTask: null });
	};
};

AlertContextProvider.propTypes = {
	children: _propTypes2.default.node.isRequired,
	horizontal: _propTypes2.default.oneOf(['flex-start', 'center', 'flex-end']),
	vertical: _propTypes2.default.oneOf(['flex-start', 'center', 'flex-end']),
	stretch: _propTypes2.default.bool
};

AlertContextProvider.defaultProps = {
	horizontal: 'flex-end',
	vertical: 'flex-start',
	stretch: false
};