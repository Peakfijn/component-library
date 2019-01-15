import React from 'react'
import PropTypes from 'prop-types';
import WrapperStyle from './styles';

const Wrapper = props => {
	const {
		modifier,
		children,
		align,
		horizontalGutter,
		verticalGutter,
		grow,
		background
	} = props;

	return (
		<WrapperStyle
			horizontalGutter={horizontalGutter}
			verticalGutter={verticalGutter}
			align={align}
			grow={grow}
			background={background}
			modifier={modifier}
		>
			{children}
		</WrapperStyle>
	);
}

Wrapper.defaultProps = {
	modifier: null,
	horizontalGutter: null,
	verticalGutter: null,
	align: null,
	grow: null,
	background: null,
	children: null,
}

Wrapper.propTypes = {
	modifier: PropTypes.oneOf(['flex', 'flex-cell', 'full', 'bottom-right', 'full-right']),
	align: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
	grow: PropTypes.oneOf(['not-grow']),
	background: PropTypes.oneOf(['window']),
	horizontalGutter: PropTypes.string,
	verticalGutter: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
}

export default Wrapper;
