import styled from 'styled-components';
import borderRadiusModifier from '../button/modifiers/border-radius';
import defaultProps from '../../default-props';

const InputIcon = styled.img`
	color: inherit;

	/* Size */
	${({ theme, componentHeight }) => componentHeight && `
		height: ${theme.componentSize[componentHeight]};
	` || ''}
	${({ theme, componentWidth }) => componentWidth && `
		width: ${theme.componentSize[componentWidth]};
	` || ''}

	${({ fit }) => fit && `
		object-fit: ${fit};
	` || ''}

	/* Modifiers: borderRadius */
	${borderRadiusModifier}
`;

InputIcon.defaultProps = defaultProps;

export default InputIcon;
