import styled from 'styled-components';
import validationStyles from '../styles/validation';
import stateStyles from '../styles/state';
import sizeStyles from '../styles/size';
import iconAdjustmentStyles from '../styles/icon-adjustment';
import defaultProps from '../../default-props';
import borderRadiusModifier from './modifiers/border-radius';

const Input = styled.input`
	box-sizing: border-box;
	outline: none;
	border: 1px solid ${props => props.theme.color.border.normal};
	background: ${props => props.theme.color.background.input};
	width: 100%;
	color: ${props => props.theme.color.text.normal};
	stroke: ${props => props.theme.color.text.normal};

	/* States */
	${stateStyles}

	/* Modifier: size */
	${sizeStyles}
	${borderRadiusModifier}

	${iconAdjustmentStyles}
	${validationStyles}
`;

Input.defaultProps = defaultProps;

export default Input;
