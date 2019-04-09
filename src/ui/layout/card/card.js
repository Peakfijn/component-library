import React from 'react';
import PropTypes from 'prop-types';
import CardContent from './styles';

const Card = ({
				  children,
				  borderRadius,
				  borderColor,
				  background
}) => (
	<CardContent
		borderRadius={borderRadius}
		borderColor={borderColor}
		background={background}
	>
		{children}
	</CardContent>
);

Card.propTypes = {
	children: PropTypes.node.isRequired,
	borderRadius: PropTypes.string,
	borderColor: PropTypes.string,
	background: PropTypes.string,
};

Card.defaultProps = {
	borderRadius: 'large',
	borderColor: 'light',
	background: 'window',
};

export default Card;
