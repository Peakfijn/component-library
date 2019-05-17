import React from 'react';
import PropTypes from 'prop-types';
import LoadingContainer from "./styles";

const Loading = ({ children, height }) => (
	<LoadingContainer
		height={height}
		modifier="flex"
		justify="center"
		align="center"
	>
		{children}
	</LoadingContainer>
);

Loading.propTypes = {
	children: PropTypes.node.isRequired,
	height: PropTypes.string,
};

Loading.defaultProps = {
	height: '50vh',
};

export default Loading;
