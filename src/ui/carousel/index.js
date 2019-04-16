import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import {
	CarouselWrapper,
	CarouselTotal,
	CarouselContent,
	CarouselImages,
	CarouselImageWrapper,
	CarouselImage,
} from './styles';

class Carousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: JSON.parse(props.data.items),
			currentIndex: 0,
			isAnimating: false,
			targetLocation: null,
			speed: 1000, // 1s
		};

		this.totalRef = createRef();
		this.contentRef = createRef();

		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleResizing);
		this.forceUpdate();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResizing);
	}

	handleResizing = () => {
		const imageWidth = this.calculateImageWidth();

		this.setState({
			targetLocation: imageWidth * -1,
		});
	}

	calculateImageWidth = () => {
		if (!this.totalRef) {
			return 0;
		}
		const totalWidth = this.totalRef.current &&
			this.totalRef.current.clientWidth;
		const contentWidth = this.contentRef.current &&
			this.contentRef.current.clientWidth;
		const sidesWidth = ((totalWidth - contentWidth) / 2);
		return sidesWidth + contentWidth;
	}

	calculateItem = (items = [], currentIndex = 0) => {
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

	handleNext = () => {
		const imageWidth = this.calculateImageWidth();
		const { items, speed, currentIndex } = this.state;
		this.setState({
			isAnimating: true,
			targetLocation: imageWidth * -2,
		});

		setTimeout(() => {
			this.setState({
				isAnimating: false,
				targetLocation: imageWidth * -1,
				currentIndex: items.length > currentIndex + 1 ? currentIndex + 1 : 0,
			});
		}, speed);
	}

	handlePrevious = () => {
		const imageWidth = this.calculateImageWidth();
		const { items, speed, currentIndex } = this.state;
		this.setState({
			isAnimating: true,
			targetLocation: 0,
		});

		setTimeout(() => {
			this.setState({
				isAnimating: false,
				targetLocation: imageWidth * -1,
				currentIndex: currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1,
			});
		}, speed);
	}

	render() {
		const { width, maxWidthBreakpoint } = this.props;
		const {
			items,
			isAnimating,
			targetLocation,
			currentIndex,
		} = this.state;

		const currentItem = this.calculateItem(items, currentIndex) || {};
		const imageWidth = this.calculateImageWidth();

		return (
			<CarouselWrapper>
				<CarouselTotal ref={this.totalRef}>
					<CarouselContent
						horizontal="none"
						vertical="none"
						width={width}
						maxWidthBreakpoint={maxWidthBreakpoint}
						ref={this.contentRef}
					>
						&nbsp;
					</CarouselContent>
					<CarouselImages>
						<CarouselImageWrapper
							animating={isAnimating}
							style={{
								transform:
								`translateX(${targetLocation !== null ? targetLocation : imageWidth * -1}px)`,
							}}
						>
							<CarouselImage
								alt=""
								style={{
									backgroundImage: `url(${
										this.calculateItem(items, currentIndex - 1) &&
										this.calculateItem(items, currentIndex - 1).url
									})`,
								}}
								width={imageWidth}
							/>

							<CarouselImage
								alt=""
								style={{
									backgroundImage: `url(${
										currentItem && currentItem.url
									})`,
								}}
								width={imageWidth}
							/>

							<CarouselImage
								alt=""
								style={{
									backgroundImage: `url(${
										this.calculateItem(items, currentIndex + 1) &&
										this.calculateItem(items, currentIndex + 1).url
									})`,
								}}
								width={imageWidth}
							/>

							<CarouselImage
								alt=""
								style={{
									backgroundImage: `url(${
										this.calculateItem(items, currentIndex + 2) &&
										this.calculateItem(items, currentIndex + 2).url
									})`,
								}}
								width={imageWidth}
							/>

						</CarouselImageWrapper>
					</CarouselImages>
				</CarouselTotal>

				{items.map(item => (
					<CarouselImage
						key={`caroucel-image-${item.url}`}
						alt=""
						style={{ backgroundImage: `url(${item.url})` }}
						hidden
					/>
				))}
			</CarouselWrapper>
		);
	}
}

Carousel.defaultProps = {
	width: undefined,
	maxWidthBreakpoint: undefined,
};

Carousel.propTypes = {
	data: PropTypes.objectOf(PropTypes.any).isRequired,
	width: PropTypes.string,
	maxWidthBreakpoint: PropTypes.string,
};

export default Carousel;