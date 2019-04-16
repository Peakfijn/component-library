import React from 'react';
import PropTypes from 'prop-types';

import StyledTab from './styles';

const Tab = props => {
	const {
		title,
		isActive,
		onClick,
		className,
		horizontal,
	} = props;


	return (
		<StyledTab isActive={isActive} onClick={onClick} className={className} horizontal={horizontal}>
			{title}
		</StyledTab>
	);
};

Tab.defaultProps = {
	horizontal: 'small',
	isActive: false,
	className: null,
};

Tab.propTypes = {
	horizontal: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

export default Tab;
