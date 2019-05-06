import styled from 'styled-components';
import stateStyles from '../styles/switch-state';
import borderRadiusModifier from '../../ui/button/modifiers/border-radius';
import defaultProps from '../../default-props';

export const Box = styled.div`
	cursor: pointer;
	position: relative;
	display: inline-block;
	padding: 2px;
	width: ${props => props.theme.componentSize.checkbox};
	height: ${props => props.theme.componentSize.checkbox};
	border-radius: ${props => props.theme.borderRadius.medium};
	background-color: ${props => props.theme.color.background.input};
	border: 1px solid ${props => props.theme.color.border.normal};
	margin-right: ${props => props.theme.gutter.small};

	/* States */
	${stateStyles}

	/* Modifiers: borderRadius */
	${borderRadiusModifier}

	/* State: selected */
	${({ selected, theme }) => selected && `
		background-color: ${theme.color.background.inputSelected};
	` || ''}

	/* State: selected & disabled */
	${({ selected, disabled, theme }) => selected && disabled && `
		background-color: ${theme.color.background.inputSelected};
		cursor: not-allowed;
	` || ''}
`;

export const Check = styled.div`
	cursor: pointer;
	color: ${props => props.theme.color.inverseText};
	line-height: initial;

	/* State: disabled */
	${({ disabled }) => disabled && `
		cursor: not-allowed;
	` || ''}
`;

Box.defaultProps = defaultProps;
Check.defaultProps = defaultProps;
