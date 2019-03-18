import styled from 'styled-components';
import defaultProps from '../../default-props';

const Label = styled.label`
	display: block;
	margin-bottom: ${props => props.theme.gutter.medium};
	color: ${props => props.theme.color.text.normal};
`;

Label.defaultProps = defaultProps;

export default Label;
