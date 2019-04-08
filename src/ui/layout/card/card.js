import React from 'react';
import PropTypes from 'prop-types';
import CardContent from './styles';

const Card = ({ children }) => (
	<CardContent>
		{children}
	</CardContent>
);

Card.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Card;
