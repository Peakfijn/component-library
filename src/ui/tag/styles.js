import styled from 'styled-components';
import defaultProps from '../../defaultProps';

import buttonSizeModifier from '../button/modifiers/size';

const Tag = styled.span`
	box-sizing: border-box;
	outline: none;
	border-radius: ${props => props.theme.borderRadius.medium};
	background-color: ${props => props.theme.color[props.color]};
	text-transform: none;
	text-decoration: none;
	color: ${props => props.theme.color.text[props.textColor]};
	font-family: inherit;
	font-size: ${props => props.theme.fontSize.medium};

	/* Modifiers: size */
	${buttonSizeModifier}
`;

Tag.defaultProps = defaultProps;

export default Tag;
