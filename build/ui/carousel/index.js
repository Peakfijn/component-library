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
			this.forceUpdate();
		}
	}, {
		key: 'calculateImageWidth',
		value: function calculateImageWidth() {
			if (!this.totalRef) {
				return 0;
			}
			var totalWidth = this.totalRef.current && this.totalRef.current.clientWidth;
			var contentWidth = this.contentRef.current && this.contentRef.current.clientWidth;
			var sidesWidth = (totalWidth - contentWidth) / 2;
			return sidesWidth + contentWidth;
		}
	}, {
		key: 'calculateItem',
		value: function calculateItem() {
			var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

			if (currentIndex >= 0 && currentIndex < items.length) {
				return items[currentIndex];
			}

			if (currentIndex < 0) {
				return this.calculateItem(items, items.length + currentIndex);
			}

			if (currentIndex > items.length - 1) {
				return this.calculateItem(items, currentIndex - items.length);
			}
			return {};
		}
	}, {
		key: 'handleNext',
		value: function handleNext() {
			var _this2 = this;

			var imageWidth = this.calculateImageWidth();
			var _state = this.state,
			    items = _state.items,
			    speed = _state.speed,
			    currentIndex = _state.currentIndex;

			this.setState({
				isAnimating: true,
				targetLocation: imageWidth * -2
			});

			setTimeout(function () {
				_this2.setState({
					isAnimating: false,
					targetLocation: imageWidth * -1,
					currentIndex: items.length > currentIndex + 1 ? currentIndex + 1 : 0
				});
			}, speed);
		}
	}, {
		key: 'handlePrevious',
		value: function handlePrevious() {
			var _this3 = this;

			var imageWidth = this.calculateImageWidth();
			var _state2 = this.state,
			    items = _state2.items,
			    speed = _state2.speed,
			    currentIndex = _state2.currentIndex;

			this.setState({
				isAnimating: true,
				targetLocation: 0
			});

			setTimeout(function () {
				_this3.setState({
					isAnimating: false,
					targetLocation: imageWidth * -1,
					currentIndex: currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1
				});
			}, speed);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$data = _props.data,
			    data = _props$data === undefined ? {} : _props$data,
			    width = _props.width,
			    maxWidthBreakpoint = _props.maxWidthBreakpoint,
			    renderControl = _props.renderControl;
			var _state3 = this.state,
			    items = _state3.items,
			    isAnimating = _state3.isAnimating,
			    targetLocation = _state3.targetLocation,
			    currentIndex = _state3.currentIndex;


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
						_react2.default.createElement(
							_styles.CarouselText,
							{ modifier: 'only-vertical', vertical: 'carousel' },
							data.subtitle || currentItem.subtitle ? _react2.default.createElement(
								_styles.InvertedSpan,
								null,
								currentItem.subtitle || data.subtitle
							) : _react2.default.createElement(
								_styles.InvertedSpan,
								null,
								'\xA0'
							),
							data.title || currentItem.title ? _react2.default.createElement(
								_styles.InvertedH3,
								null,
								currentItem.title || data.title
							) : _react2.default.createElement(
								_styles.InvertedH3,
								null,
								'\xA0'
							),
							(data.description || currentItem.description) && _react2.default.createElement(
								_styles.InvertedP,
								null,
								currentItem.title || data.title
							),
							(data.link || currentItem.link) && _react2.default.createElement(
								_styles.LinkAnchor,
								{ href: currentItem.link || data.link },
								currentItem.button || data.button
							)
						)
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
				}),
				renderControl ? renderControl(!isAnimating && this.handlePrevious, !isAnimating && this.handleNext) : _react2.default.createElement(
					_styles.CarouselControl,
					null,
					_react2.default.createElement(
						_styles.CarouselLeft,
						{ type: 'button', onClick: !isAnimating && this.handlePrevious },
						'<'
					),
					_react2.default.createElement(
						_styles.CarouselRight,
						{ type: 'button', onClick: !isAnimating && this.handleNext },
						'>'
					)
				)
			);
		}
	}]);

	return Carousel;
}(_react.Component);

Carousel.defaultProps = {
	renderControl: undefined,
	width: undefined,
	maxWidthBreakpoint: undefined
};

Carousel.propTypes = {
	data: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired,
	width: _propTypes2.default.string,
	maxWidthBreakpoint: _propTypes2.default.string,
	renderControl: _propTypes2.default.func
};

exports.default = Carousel;