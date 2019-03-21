import React from 'react'
import PropTypes from 'prop-types';
import WrapperStyle from './styles';

const Wrapper = props => {
	const {
		modifier,
		children,
		align,
		justify,
		horizontalGutter,
		verticalGutter,
		grow,
		background,
		wrap,
		className,
	} = props;

	return (
		<WrapperStyle
			horizontalGutter={horizontalGutter}
			verticalGutter={verticalGutter}
			align={align}
			justify={justify}
			grow={grow}
			background={background}
			wrap={wrap}
			modifier={modifier}
			className={className}
		>
			{children}
		</WrapperStyle>
	);
}

Wrapper.defaultProps = {
	modifier: null,
	horizontalGutter: null,
	verticalGutter: null,
	align: 'start',
	justify: 'normal',
	grow: null,
	background: null,
	wrap: null,
	children: null,
	className: null,
}

Wrapper.propTypes = {
	className: PropTypes.string,
	modifier: PropTypes.oneOf(['flex', 'flex-column', 'flex-column-full',
		'flex-cell', 'full', 'bottom-right', 'full-right']),
	align: PropTypes.oneOf(['start', 'flex-start', 'flex-end', 'center']),
	justify: PropTypes.oneOf(['center', 'start', 'end', 'flex-start', 'flex-end',
		'left', 'right', 'baseline', 'first baseline', 'last baseline',
		'normal', 'space-between', 'space-around', 'space-evenly',
		'stretch', 'inherit', 'initial', 'unset']),
	grow: PropTypes.oneOf(['not-grow', 'fluid']),
	background: PropTypes.oneOf(['window']),
	wrap: PropTypes.shape({
		small: PropTypes.string,
		medium: PropTypes.string,
		large: PropTypes.string,
		huge: PropTypes.string,
	}),
	horizontalGutter: PropTypes.string,
	verticalGutter: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
}

export default Wrapper;
