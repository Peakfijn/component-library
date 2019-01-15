import styled from 'styled-components';

const Label = styled.label`
	display: block;
	margin-bottom: ${props => props.theme.gutter.medium};
	color: ${props => props.theme.color.text.normal};
`;

export default Label;
