import styled from 'styled-components';
import borderRadiusModifier from '../button/modifiers/border-radius';
import defaultProps from '../../defaultProps';

const InputIcon = styled.img`
	color: inherit;

	/* Size */
	${props => props.height && `
		height: ${props.height};
	` || ''}
	${props => props.width && `
		width: ${props.width};
	` || ''}

	${({ fit }) => fit && `
			object-fit: ${fit};
	` || ''}

	/* Modifiers: borderRadius */
	${borderRadiusModifier}
`;

InputIcon.defaultProps = defaultProps;

export default InputIcon;
