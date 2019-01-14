import React from 'react';
import PropTypes from 'prop-types';

import StyledTab from './styles';

const Tab = props => {
	const {
		title,
		isActive,
		onClick
	} = props;


	return (
		<StyledTab isActive={isActive} onClick={onClick}>
			{title}
		</StyledTab>
	);
};

Tab.defaultProps = {
	isActive: false,
};

Tab.propTypes = {
	title: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

export default Tab;
