import styled, { css } from 'styled-components';
import defaultProps from '../../default-props';
import Spacing from '../layout/spacing';

const UNoMargin = css`
	margin: 0 !important;
`;

const tInverted = css`
	color: ${props => props.theme.color.text.inverted};
`;


export const CarouselWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const CarouselTotal = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 99;
	width: 100%;
`;

export const CarouselControl = styled.span`
	position: absolute;
	right: 0;
	top: 100%;
	transform: translateY(-100%) translateX(0%);

	&:active {
		text-decoration: none;
	}
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
	height: 100%;
	display: flex;

	${({ animating }) => animating && `
		transition: transform 1s;
	`};
`;

export const CarouselImage = styled.img`
	background-size: cover;
	flex-shrink: 0;
	flex-grow: 0;

	${({ hidden }) => hidden && `
		display: block;
		height: 1px;
		width: 1px;
	`};
`;

export const CarouselText = styled(Spacing)`
	transform: translateX(-85%) translateY(10%);

	h3 {
		white-space: initial;
		word-break: normal;
	}
`;

export const InvertedSpan = styled.span`
	${tInverted}
	text-transform: uppercase;

	margin-top: 1.66rem;
	margin-bottom: 1.66rem;
	word-break: break-all;
	word-break: break-word;
	word-break: normal;
	font-size: ${props => props.theme.fontSize.huge};
	line-height: ${props => props.theme.fontSize.huge};
`;

export const InvertedH3 = styled.h3`
	${tInverted}
`;

export const InvertedP = styled.p`
	${tInverted}
`;


UNoMargin.defaultProps = defaultProps;
tInverted.defaultProps = defaultProps;
CarouselWrapper.defaultProps = defaultProps;
CarouselTotal.defaultProps = defaultProps;
CarouselControl.defaultProps = defaultProps;
CarouselContent.defaultProps = defaultProps;
CarouselImages.defaultProps = defaultProps;
CarouselImageWrapper.defaultProps = defaultProps;
CarouselImage.defaultProps = defaultProps;
CarouselText.defaultProps = defaultProps;
InvertedSpan.defaultProps = defaultProps;
InvertedH3.defaultProps = defaultProps;
InvertedP.defaultProps = defaultProps;
