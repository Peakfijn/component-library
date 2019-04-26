import styled from 'styled-components';
import borderRadiusModifier from '../button/modifiers/border-radius';
import defaultProps from '../../default-props';

const InputIcon = styled.img`
	color: inherit;

	/* Size */
	${({ theme, componentHeight, height }) => (componentHeight || height) && `
		height: ${theme.componentSize[componentHeight] || height};
	` || ''}
	${({ theme, componentWidth, width }) => (componentWidth || width) && `
		height: ${theme.componentSize[componentWidth] || width};
	` || ''}

	${({ fit }) => fit && `
		object-fit: ${fit};
	` || ''}

	/* Modifiers: borderRadius */
	${borderRadiusModifier}
`;

InputIcon.defaultProps = defaultProps;

export default InputIcon;
