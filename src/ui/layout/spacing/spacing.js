import React from 'react'
import PropTypes from 'prop-types';
import SpacingStyle from './styles';

const Spacing = props => {
	const {
		modifier,
		horizontal,
		vertical,
		children,
		maxAtBreakpoint,
		minAtBreakpoint,
		maxWidthBreakpoint,
		isWide,
		isInline,
	} = props;

	return (
		<SpacingStyle
			modifier={modifier}
			isWide={isWide}
			isInline={isInline}
			horizontal={horizontal}
			vertical={vertical}
			minAtBreakpoint={minAtBreakpoint}
			maxAtBreakpoint={maxAtBreakpoint}
			maxWidthBreakpoint={maxWidthBreakpoint}
		>
			{children}
		</SpacingStyle>
	);
}

Spacing.defaultProps = {
	horizontal: 'medium',
	vertical: 'medium',
	maxWidthBreakpoint: 'none',
	minAtBreakpoint: null,
	maxAtBreakpoint: null,
	modifier: null,
	isWide: null,
	isInline: null,
	children: null,
}

Spacing.propTypes = {
	modifier: PropTypes.string,
	horizontal: PropTypes.string,
	vertical: PropTypes.string,
	isWide: PropTypes.bool,
	isInline: PropTypes.bool,
	maxWidthBreakpoint: PropTypes.string,
	minAtBreakpoint: PropTypes.shape({
		small: PropTypes.shape({
			horizontal: PropTypes.string,
			vertical: PropTypes.string,
		}),
		medium: PropTypes.shape({
			horizontal: PropTypes.string,
			vertical: PropTypes.string,
		}),
		large: PropTypes.shape({
			horizontal: PropTypes.string,
			vertical: PropTypes.string,
		}),
		huge: PropTypes.shape({
			horizontal: PropTypes.string,
			vertical: PropTypes.string,
		}),
	}),
	maxAtBreakpoint: PropTypes.shape({
		small: PropTypes.shape({
			horizontal: PropTypes.string,
			vertical: PropTypes.string,
		}),
		medium: PropTypes.shape({
			horizontal: PropTypes.string,
			vertical: PropTypes.string,
		}),
		large: PropTypes.shape({
			horizontal: PropTypes.string,
			vertical: PropTypes.string,
		}),
		huge: PropTypes.shape({
			horizontal: PropTypes.string,
			vertical: PropTypes.string,
		}),
	}),
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
}

export default Spacing;
