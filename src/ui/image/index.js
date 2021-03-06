import React from 'react'
import PropTypes from 'prop-types';
import StyledImage from './styles';

const Image = props => {
	const {
		src,
		modifier,
		className,
		borderRadius,
		width,
		height,
		componentWidth,
		componentHeight,
		fit,
	} = props;
	if (!src) {
		return null;
	}

	return (
		<StyledImage
			src={src}
			modifier={modifier}
			className={className}
			borderRadius={borderRadius}
			fit={fit}
			width={width}
			height={height}
			componentWidth={componentWidth}
			componentHeight={componentHeight}
		/>
	);
}

Image.defaultProps = {
	modifier: null,
	className: null,
	borderRadius: null,
	width: null,
	height: null,
	fit: null,
	componentWidth: null,
	componentHeight: null,
}

Image.propTypes = {
	className: PropTypes.string,
	src: PropTypes.oneOfType([
		PropTypes.string
	]).isRequired,
	modifier: PropTypes.string,
	width: PropTypes.string,
	fit: PropTypes.oneOf(['cover']),
	height: PropTypes.string,
	componentWidth: PropTypes.string,
	componentHeight: PropTypes.string,
	borderRadius: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
}

export default Image;
