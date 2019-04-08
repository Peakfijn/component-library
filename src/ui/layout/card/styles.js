import styled from 'styled-components';
import { Wrapper } from '../index';
import defaultProps from '../../../default-props';

const CardContent = styled(Wrapper)`
	overflow: auto;
	${props => `
		background-color: ${props.theme.color.background.window};
		border: 1px solid ${props.theme.color.border.light};
		border-radius: ${props.theme.borderRadius.large};
	`}
`;

CardContent.defaultProps = defaultProps;

export default CardContent;
