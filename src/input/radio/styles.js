import styled from 'styled-components';
import stateStyles from '../styles/switch-state';

export const Switch = styled.div`
	cursor: pointer;
	position: relative;
	display: inline-block;
	width: ${props => props.theme.componentSize.radio};
	height: ${props => props.theme.componentSize.radio};
	background-color: ${props => props.theme.color.background.input};
	border-radius: ${props => props.theme.componentSize.radio};
	border: 1px solid ${props => props.theme.color.border.normal};
	margin-right: ${props => props.theme.gutter.small};

	/* States */
	${stateStyles}
`;

export const Slider = styled.div`
	cursor: pointer;
	margin: ${props => props.theme.gutter.none};
	border-radius: ${props => props.theme.componentSize.dot};
	width: ${props => props.theme.componentSize.dot};
	height: ${props => props.theme.componentSize.dot};
	position: absolute;

	top: ${props => props.theme.gutter.tiny};
	bottom: ${props => props.theme.gutter.tiny};
	left: ${props => props.theme.gutter.tiny};
	right: ${props => props.theme.gutter.tiny};

	/* State: selected */
	${({ selected, theme }) => selected && `
		background-color: ${theme.color.background.input};
	` || ''}

	/* State: selected & disabled */
	${({ selected, disabled, theme }) => selected && disabled && `
		background-color: ${theme.color.background.input};
		cursor: not-allowed;
	` || ''}
`;
