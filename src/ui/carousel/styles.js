import styled, { css } from 'styled-components';
import defaultProps from '../../default-props';
import Spacing from '../layout/spacing';

const UNoMargin = css`
	margin: 0 !important;
`;

const tInverted = css`
	color: ${props => props.theme.color.text.inverted};
`;

const Button = css`
	flex-direction: row;
	justify-content: center;
	text-transform: uppercase;
	border: none;
	font-style: normal;
	letter-spacing: normal;
	line-height: 2.5rem;
	min-height: 2.5rem;
	text-decoration: none;
	padding: 0 2rem;
	font-weight: 500;
	font-stretch: normal;
	cursor: pointer;
	outline: none;
	display: inline-block;
	white-space: nowrap;

	&:hover,
	&:focus {
		opacity: 0.85;
	}

	&:active {
		opacity: 1;
		text-decoration: none;
	}

	@media ('<=small') {
		padding: 0 0.75rem;
	}
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

const buttonTertiary = css`
	${UNoMargin}
	${tInverted}
`;

export const CarouselLeft = styled.button`
	left: 0;
	font-size: 45px;
	line-height: 30px;
	text-align: center;
	padding: 12px 16px;
	${buttonTertiary};
`;

export const CarouselRight = styled.button`
	right: 0;
	font-size: 45px;
	line-height: 30px;
	text-align: center;
	padding: 12px 16px;
	${buttonTertiary};
`;

export const CarouselContent = styled(Spacing)`
	position: relative;
	z-index: 1;
	min-height: 100%;
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
	overflow: hidden;

	${({ animating }) => animating && `
		transition: transform 1s;
	`};
`;

export const CarouselImage = styled.img`
	max-height: 100%;
	height: 100%;
	background-size: cover;

	${({ width }) => width === 0 && `
		min-width: 80%;
	`};

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

export const LinkAnchor = styled.a`
	${tInverted}
	${UNoMargin}
	${Button}

	background-color: transparent;
	color: ${props => props.theme.color.text.normal};
	box-shadow: 0 0 0 3px ${props => props.theme.color.text.inverted} inset;

	&:active {
		box-shadow: 0 0 0 3px ${props => props.theme.color.text.normal} inset;
		background: ${props => props.theme.color.text.normal};
		color: ${props => props.theme.color.text.inverted};
		fill: ${props => props.theme.color.text.inverted};
		text-decoration: none;
	}
`;

UNoMargin.defaultProps = defaultProps;
tInverted.defaultProps = defaultProps;
Button.defaultProps = defaultProps;
CarouselWrapper.defaultProps = defaultProps;
CarouselTotal.defaultProps = defaultProps;
CarouselControl.defaultProps = defaultProps;
buttonTertiary.defaultProps = defaultProps;
CarouselLeft.defaultProps = defaultProps;
CarouselRight.defaultProps = defaultProps;
CarouselContent.defaultProps = defaultProps;
CarouselImages.defaultProps = defaultProps;
CarouselImageWrapper.defaultProps = defaultProps;
CarouselImage.defaultProps = defaultProps;
CarouselText.defaultProps = defaultProps;
InvertedSpan.defaultProps = defaultProps;
InvertedH3.defaultProps = defaultProps;
InvertedP.defaultProps = defaultProps;
LinkAnchor.defaultProps = defaultProps;
