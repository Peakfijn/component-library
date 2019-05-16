import React from 'react';
import PropTypes from 'prop-types';
import { LoadingContainer } from "./styles";
import Spacing from "../layout/spacing";

const Loading = ({ children, height, ...rest }) => (
	<Spacing vertical="large" {...rest}>
		<LoadingContainer
			height={height}
			modifier="flex"
			justify="center"
			align="center"
		>
			{children}
		</LoadingContainer>
	</Spacing>
);

Loading.propTypes = {
	children: PropTypes.node.isRequired,
	height: PropTypes.string,
};

Loading.defaultProps = {
	height: '50vh',
};

export default Loading;
