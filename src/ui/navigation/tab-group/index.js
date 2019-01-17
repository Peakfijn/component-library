import React from 'react';
import PropTypes from 'prop-types';

import StyledTabGroup from './styles';

const TabGroup = props => {
	const {
		children,
		className,
	} = props;

	return (
		<StyledTabGroup className={className}>
			{ children }
		</StyledTabGroup>
	);
};

TabGroup.defaultProps = {
	children: null,
	className: null,
};

TabGroup.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default TabGroup;
