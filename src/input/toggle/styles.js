import styled from 'styled-components';
import { lighten, darken } from 'polished';

import stateStyles from '../styles/switch-state';

export const Switch = styled.div`
	cursor: pointer;
	width: calc(${props => props.theme.componentSize.toggle.width} + (${props => props.theme.gutter.tiny} * 2));
	height: ${props => props.theme.componentSize.toggle.height};
	background-color: ${({ theme }) => lighten(theme.color.adjustColor.tiny, theme.color.grey)};
	border-radius: ${props => props.theme.componentSize.toggle.height};
	transition: background-color 100ms ease-out;
	margin-right: ${props => props.theme.gutter.small};

	/* States */
	${stateStyles}

	${({ focussed, theme }) => focussed ? `
		background-color: ${theme.color.grey};
	` : ''}

	${({ focussed, theme }) => focussed ? `
		background-color: ${theme.color.grey};
	` : ''}

	${({ focussed, selected, theme }) => focussed && selected ? `
		background-color: ${darken(theme.color.adjustColor.tiny, theme.color.brand)};
	` : ''}
`;

export const Slider = styled.div`
	cursor: pointer;
	background-color: ${props => props.theme.color.background.input};
	border-radius: ${props => props.theme.componentSize.slider};
	margin: ${props => props.theme.gutter.tiny};
	width: ${props => props.theme.componentSize.slider};
	height: ${props => props.theme.componentSize.slider};
	position: absolute;
	transition: left 100ms ease-out;

	/* State: selected */
	${({ selected, theme }) => selected && `
		left: calc(${theme.componentSize.toggle.width} - ${theme.componentSize.slider});
	` || ''}
`;
