import styled from 'styled-components';

import Wrapper from "../layout/wrapper";

const LoadingContainer = styled(Wrapper)`
	height: ${({ height }) => height};
`;

export default LoadingContainer;
