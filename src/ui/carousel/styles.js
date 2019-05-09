import styled from 'styled-components';
import defaultProps from '../../default-props';
import { Wrapper } from '../layout';

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

export const CarouselInnerWrapper = styled.div`
	position: relative;
`;

export const CarouselImage = styled.img`
	background-size: cover;
	background-position: center;
	flex-shrink: 0;
	flex-grow: 0;
	height: 100%;

	${({ showThumbnails, active, theme }) => showThumbnails ? `
		height: auto;
		height: -webkit-fill-available;
		max-width: 100%;
		position: relative;
		max-height: 100%;
		${active && `
			outline: 1px solid ${theme.color.border.dark};
		` || ''}
	` : `
		display: block;
	`};
`;

export const ThumbnailWrapper = styled(Wrapper)`
	max-height: 120px;
	text-align: right;
`;

ThumbnailWrapper.defaultProps = defaultProps;
CarouselWrapper.defaultProps = defaultProps;
CarouselContent.defaultProps = defaultProps;
CarouselImages.defaultProps = defaultProps;
CarouselImageWrapper.defaultProps = defaultProps;
CarouselImage.defaultProps = defaultProps;
