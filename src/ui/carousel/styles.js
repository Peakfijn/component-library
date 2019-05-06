import styled from 'styled-components';
import defaultProps from '../../default-props';

export const CarouselWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const CarouselContent = styled.div`
	position: relative;
	z-index: 1;
	min-height: 100%;

	${({ maxWidth }) => maxWidth && `
		max-width: ${maxWidth};
	` || ''}

	/* Modifiers: set max-width at breakpoint */
	${({ maxWidthBreakpoint, theme: { breakpoint } }) => Object.keys(breakpoint).map(
		key => `
			${maxWidthBreakpoint === key && `
				width: 100%;
				max-width: ${breakpoint[key]};
			` || ''}
		` || ''
	) || ''}
`;

export const CarouselImages = styled.div`
	position: absolute;
	overflow: hidden;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 0;
`;

export const CarouselImageWrapper = styled.div`
	display: flex;

	${({ animating }) => animating && `
		transition: transform 1s;
	`};
`;

export const CarouselImage = styled.img`
	background-size: cover;
	background-position: center;
	flex-shrink: 0;
	flex-grow: 0;
	height: 100%;

	${({ hidden }) => hidden && `
		display: block;
		height: 1px;
		width: 1px;
	`};
`;

CarouselWrapper.defaultProps = defaultProps;
CarouselContent.defaultProps = defaultProps;
CarouselImages.defaultProps = defaultProps;
CarouselImageWrapper.defaultProps = defaultProps;
CarouselImage.defaultProps = defaultProps;
