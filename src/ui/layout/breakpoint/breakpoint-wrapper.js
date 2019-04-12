import React from 'react';
import PropTypes from 'prop-types';
import StyledBreakpointWrapper from './styles';

const BreakpointWrapper = (props) => {
	const {
		type,
		breakpoint,
		children
	} = props;

	return (
		<StyledBreakpointWrapper
			{...props}
			type={type}
			breakpoint={breakpoint}
		>
			{children}
		</StyledBreakpointWrapper>
	);
};

BreakpointWrapper.propTypes = {
	type: PropTypes.oneOf(['min', 'max']).isRequired,
	breakpoint: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'full', 'fullViewport']).isRequired,
	children: PropTypes.node.isRequired,
};

export default BreakpointWrapper;
