import styled from 'styled-components';
import defaultProps from '../../defaultProps';

const LabelContent = styled.span`
	display: block;
	margin-bottom: ${props => props.theme.gutter.tiny};
	color: ${props => props.theme.color.text.normal};
`;

LabelContent.defaultProps = defaultProps;

export default LabelContent;
