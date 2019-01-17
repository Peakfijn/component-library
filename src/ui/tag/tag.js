import React from 'react'
import PropTypes from 'prop-types';
import StyledLabel from './styles';

const Label = props => {
	const { color, textColor, children, size, className } = props;

	return (
		<StyledLabel color={color} textColor={textColor} size={size} className={className}>
			{children}
		</StyledLabel>
	);
}

Label.defaultProps = {
	textColor: 'normal',
	size: 'medium',
	children: null,
	className: null,
}

Label.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string.isRequired,
	size: PropTypes.string,
	textColor: PropTypes.string,
	children: PropTypes.string,
}

export default Label;
