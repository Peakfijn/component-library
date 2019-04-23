import styled from 'styled-components';
import Tag from '../../tag/styles';

import defaultProps from '../../../default-props';

export const StyledContainer = styled.div`
	font-size: ${props => props.theme.fontSize.medium};
	position: relative;
`;

export const StyledCircle = styled(Tag)`
	position: absolute;
	transform: translate(-50%, -50%);
	z-index: 1;
	border-radius: 50px;

	${({ position }) => position === 'top-right' && `
		top: 0;
		right: 0;
		transform: translate(50%, -50%);
	` || ''}
`;

StyledContainer.defaultProps = defaultProps;
StyledCircle.defaultProps = defaultProps;
