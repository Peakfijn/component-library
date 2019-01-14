import styled from 'styled-components';

const LabelContent = styled.span`
	display: block;
	margin-bottom: ${props => props.theme.gutter.tiny};
	color: ${props => props.theme.color.text.normal};
`;

export default LabelContent;
