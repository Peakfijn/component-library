import React from 'react';
import PropTypes from 'prop-types';

import StyledTab from './styles';

const Tab = props => {
	const {
		title,
		isActive,
		onClick,
		className,
	} = props;


	return (
		<StyledTab isActive={isActive} onClick={onClick} className={className}>
			{title}
		</StyledTab>
	);
};

Tab.defaultProps = {
	isActive: false,
	className: null,
};

Tab.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

export default Tab;
