import React from 'react'
import PropTypes from 'prop-types';
import StyledLabel from './styles';

const Label = props => {
	const { color, textColor, children, size } = props;

	return (
		<StyledLabel color={color} textColor={textColor} size={size}>
			{children}
		</StyledLabel>
	);
}

Label.defaultProps = {
	textColor: 'normal',
	size: 'medium',
	children: null,
}

Label.propTypes = {
	color: PropTypes.string.isRequired,
	size: PropTypes.string,
	textColor: PropTypes.string,
	children: PropTypes.string,
}

export default Label;
