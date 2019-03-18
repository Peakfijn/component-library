import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultProps from '../../defaultProps';

const InputIcon = styled(FontAwesomeIcon)`
	color: inherit;

	/* Modifier: input */
	${({ modifier, theme }) => modifier === "input-right" && `
		color: ${theme.color.text.light};
		position: absolute;
		right: ${theme.gutter.small};
		top: ${theme.gutter.small};
	` || ''}

	${({ modifier, theme }) => modifier === "input-left" && `
		color: ${theme.color.text.light};
		position: absolute;
		left: ${theme.gutter.small};
		top: ${theme.gutter.small};
	` || ''}

	/* Modifier: error */
	${({ modifier, theme }) => modifier === "error" && `
		color: ${theme.color.danger};
		margin-right: ${theme.gutter.tiny};
	` || ''}

	${({ modifier, theme }) => modifier === "left" && `
		margin-right: ${theme.gutter.tiny};
	` || ''}

	/* Modifier: left */
	${({ modifier, theme }) => modifier === "left" && `
		padding-right: ${theme.gutter.small};
	` || ''}

	/* Size */
	${props => props.height && `
		height: ${props.height};
	` || ''}
	${props => props.width && `
		width: ${props.width};
	` || ''}
`;

InputIcon.defaultProps = defaultProps;

export default InputIcon;
