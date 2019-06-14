import React from 'react';
import PropTypes from 'prop-types';
import { SeparatorStyled } from './styles';

const Separator = ({ borderWidth, color }) => (
	<SeparatorStyled
		borderWidth={borderWidth}
		color={color}
	/>
);

Separator.defaultProps = {
	borderWidth: 'small',
	color: 'light',
};

Separator.propTypes = {
	borderWidth: PropTypes.oneOf(['small', 'medium', 'large']),
	color: PropTypes.oneOf(['grey', 'light', 'normal', 'dark', 'inverted']),
};

export default Separator;
