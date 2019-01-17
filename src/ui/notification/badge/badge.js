import React from 'react';
import PropTypes from 'prop-types';
import { StyledCircle, StyledContainer } from './styles';

const Badge = props => {
	const {
		count,
		children,
		color,
		textColor,
		size,
		className,
	} = props;

	return (
		<StyledContainer className={className}>
			{children}
			<StyledCircle color={color} textColor={textColor} size={size}>{count}</StyledCircle>
		</StyledContainer>

	);
};

Badge.defaultProps = {
	textColor: 'inverted',
	size: 'medium',
	color: 'info',
	children: null,
	className: null,
};

Badge.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number.isRequired,
	children: PropTypes.node,
	color: PropTypes.string,
	size: PropTypes.string,
	textColor: PropTypes.string,
};

export default Badge;
