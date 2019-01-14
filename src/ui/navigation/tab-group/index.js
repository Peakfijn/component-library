import React from 'react';
import PropTypes from 'prop-types';

import StyledTabGroup from './styles';

const TabGroup = props => {
	const {
		children
	} = props;

	return (
		<StyledTabGroup>
			{ children }
		</StyledTabGroup>
	);
};

TabGroup.defaultProps = {
	children: null,
};

TabGroup.propTypes = {
	children: PropTypes.node,
};

export default TabGroup;