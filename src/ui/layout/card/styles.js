import styled from 'styled-components';
import { Wrapper } from '../index';
import defaultProps from '../../../default-props';

const CardContent = styled(Wrapper)`
	overflow: auto;
	${props => `
		background-color: ${props.theme.color.background[props.background]};
		border: 1px solid ${props.theme.color.border[props.borderColor]};
		border-radius: ${props.theme.borderRadius[props.borderRadius]};
	`}
`;

CardContent.defaultProps = defaultProps;

export default CardContent;
