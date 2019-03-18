import styled from 'styled-components';
import Tag from '../../tag/styles';

import defaultProps from '../../../defaultProps';

export const StyledContainer = styled.span`
	font-size: ${props => props.theme.fontSize.medium};
	margin-bottom: ${props => props.theme.gutter.small};
	position: relative;
`;

export const StyledCircle = styled(Tag)`
	position: absolute;
	transform: translate(-${props => props.theme.gutter.large}, -50%);
	z-index: 1;
	border-radius: 50px;
`;

StyledContainer.defaultProps = defaultProps;
StyledCircle.defaultProps = defaultProps;
