'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var Carousel = function (_Component) {
	_inherits(Carousel, _Component);

	function Carousel(props) {
		_classCallCheck(this, Carousel);

		var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

		_this.handleResizing = function () {
			var imageWidth = _this.calculateImageWidth();

			_this.setState({
				targetLocation: imageWidth * -1
			});
		};

		_this.calculateImageWidth = function () {
			if (!_this.totalRef) {
				return 0;
			}
			var totalWidth = _this.totalRef.current && _this.totalRef.current.clientWidth;
			var contentWidth = _this.contentRef.current && _this.contentRef.current.clientWidth;
			var sidesWidth = (totalWidth - contentWidth) / 2;
			return sidesWidth + contentWidth;
		};

		_this.calculateItem = function () {
			var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

			if (currentIndex >= 0 && currentIndex < items.length) {
				return items[currentIndex];
			}

			if (currentIndex < 0) {
				return _this.calculateItem(items, items.length + currentIndex);
			}

			if (currentIndex > items.length - 1) {
				return _this.calculateItem(items, currentIndex - items.length);
			}
			return {};
		};

		_this.handleNext = function () {
			var imageWidth = _this.calculateImageWidth();
			var _this$state = _this.state,
			    items = _this$state.items,
			    speed = _this$state.speed,
			    currentIndex = _this$state.currentIndex;

			_this.setState({
				isAnimating: true,
				targetLocation: imageWidth * -2
			});

			setTimeout(function () {
				_this.setState({
					isAnimating: false,
					targetLocation: imageWidth * -1,
					currentIndex: items.length > currentIndex + 1 ? currentIndex + 1 : 0
				});
			}, speed);
		};

		_this.handlePrevious = function () {
			var imageWidth = _this.calculateImageWidth();
			var _this$state2 = _this.state,
			    items = _this$state2.items,
			    speed = _this$state2.speed,
			    currentIndex = _this$state2.currentIndex;

			_this.setState({
				isAnimating: true,
				targetLocation: 0
			});

			setTimeout(function () {
				_this.setState({
					isAnimating: false,
					targetLocation: imageWidth * -1,
					currentIndex: currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1
				});
			}, speed);
		};

		_this.state = {
			items: JSON.parse(props.data.items),
			currentIndex: 0,
			isAnimating: false,
			targetLocation: null,
			speed: 1000 // 1s
		};

		_this.totalRef = (0, _react.createRef)();
		_this.contentRef = (0, _react.createRef)();

		_this.handleNext = _this.handleNext.bind(_this);
		_this.handlePrevious = _this.handlePrevious.bind(_this);
		return _this;
	}

	_createClass(Carousel, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener("resize", this.handleResizing);
			this.forceUpdate();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener("resize", this.handleResizing);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    maxWidthBreakpoint = _props.maxWidthBreakpoint;
			var _state = this.state,
			    items = _state.items,
			    isAnimating = _state.isAnimating,
			    targetLocation = _state.targetLocation,
			    currentIndex = _state.currentIndex;


			var currentItem = this.calculateItem(items, currentIndex) || {};
			var imageWidth = this.calculateImageWidth();

			return _react2.default.createElement(
				_styles.CarouselWrapper,
				null,
				_react2.default.createElement(
					_styles.CarouselTotal,
					{ ref: this.totalRef },
					_react2.default.createElement(
						_styles.CarouselContent,
						{
							horizontal: 'none',
							vertical: 'none',
							width: width,
							maxWidthBreakpoint: maxWidthBreakpoint,
							ref: this.contentRef
						},
						'\xA0'
					),
					_react2.default.createElement(
						_styles.CarouselImages,
						null,
						_react2.default.createElement(
							_styles.CarouselImageWrapper,
							{
								animating: isAnimating,
								style: {
									transform: 'translateX(' + (targetLocation !== null ? targetLocation : imageWidth * -1) + 'px)'
								}
							},
							_react2.default.createElement(_styles.CarouselImage, {
								alt: '',
								style: {
									backgroundImage: 'url(' + (this.calculateItem(items, currentIndex - 1) && this.calculateItem(items, currentIndex - 1).url) + ')'
								},
								width: imageWidth
							}),
							_react2.default.createElement(_styles.CarouselImage, {
								alt: '',
								style: {
									backgroundImage: 'url(' + (currentItem && currentItem.url) + ')'
								},
								width: imageWidth
							}),
							_react2.default.createElement(_styles.CarouselImage, {
								alt: '',
								style: {
									backgroundImage: 'url(' + (this.calculateItem(items, currentIndex + 1) && this.calculateItem(items, currentIndex + 1).url) + ')'
								},
								width: imageWidth
							}),
							_react2.default.createElement(_styles.CarouselImage, {
								alt: '',
								style: {
									backgroundImage: 'url(' + (this.calculateItem(items, currentIndex + 2) && this.calculateItem(items, currentIndex + 2).url) + ')'
								},
								width: imageWidth
							})
						)
					)
				),
				items.map(function (item) {
					return _react2.default.createElement(_styles.CarouselImage, {
						key: 'caroucel-image-' + item.url,
						alt: '',
						style: { backgroundImage: 'url(' + item.url + ')' },
						hidden: true
					});
				})
			);
		}
	}]);

	return Carousel;
}(_react.Component);

Carousel.defaultProps = {
	width: undefined,
	maxWidthBreakpoint: undefined
};

Carousel.propTypes = {
	data: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired,
	width: _propTypes2.default.string,
	maxWidthBreakpoint: _propTypes2.default.string
};

exports.default = Carousel;