import styled from 'styled-components';
import { darken, lighten } from 'polished';
import buttonSizeModifier from './modifiers/size';
import fontSizeModifier from './modifiers/font-size';
import borderRadiusModifier from './modifiers/border-radius';
import defaultProps from '../../defaultProps';

const themeColor = (key, props) => props.theme.color[key];

const applyForState = (state, props) => (props.state === state ? ', &' : '')

const StyledButton = styled.button`
	box-sizing: border-box;
	display: inline-block;
	margin-bottom: ${props => props.theme.gutter.medium};
	outline: none;
	border: 1px solid transparent;
	border-radius: ${props => props.theme.borderRadius.medium};
	cursor: pointer;
	width: ${props => props.width};
	text-transform: none;
	text-decoration: none;
	font-family: inherit;

	/* Modifier: full-width */
	${props => props.modifier === 'full' && `
		width: 100%;
	`}

	${({ modifier }) => modifier === 'no-margin' && `
	margin-bottom: 0;
` || ''}

	/* Modifier: color primary */
	${({ color, theme: { color: themeColors }, state }) => (
		color === "primary" ||
		color === "success" ||
		color === "danger" ||
		color === "info"
	) && `
		background-color: ${themeColors[color]};
		color: ${themeColors.text.inverted};
		border: 1px solid ${darken(themeColors.adjustColor.tiny, themeColors[color])};
		${(state === 'hover' || state === 'focus' || state === 'active' ) && `
			background-color: ${lighten(themeColors.adjustColor.tiny, themeColors[color])};
		` || ''}
		${state === 'active' && `
			background-color: ${darken(themeColors.adjustColor.tiny, themeColors[color])};
		` || ''}

		:hover:enabled,
		:focus:enabled	{
			background-color: ${lighten(themeColors.adjustColor.tiny, themeColors[color])};
		}
		:active:enabled	{
			background-color: ${darken(themeColors.adjustColor.tiny, themeColors[color])};
		}
	` || ''}

	/* Modifier: secondary */
	${({ color, theme: { color: themeColors }, state }) => (
		color === 'secondary' ||
		color === 'normal'
	) && `
		background-color: ${themeColors[color]};
		color: ${themeColors.text.normal};
		border: 1px solid ${darken(themeColors.adjustColor.tiny, themeColors[color])};

		${(state === 'hover' || state === 'focus' || state === 'active' ) && `
			background-color: ${lighten(themeColors.adjustColor.tiny, themeColors[color])};
		` || ''}
		${state === 'active' && `
			background-color: ${darken(themeColors.adjustColor.tiny, themeColors[color])};
		` || ''}

		:hover:enabled,
		:focus:enabled	{
			background-color: ${lighten(themeColors.adjustColor.tiny, themeColors[color])};
		}
		:active:enabled	{
			background-color: ${darken(themeColors.adjustColor.tiny, themeColors[color])};
		}
	` || ''}

	/* Modifier: disabled */
	${props => props.disabled && `
		background-color: ${props.theme.color.background.inputDisabled};
		color: ${props.theme.color.text.disabled};
		border: 1px solid ${lighten(props.theme.color.adjustColor.tiny, props.theme.color.background.inputDisabled)};
		cursor: not-allowed;
	` || ''}

	/* Modifier: invisible */
	${props => props.modifier === 'invisible' && `
		background-color: transparent;
		color: inherit;
		padding: 0 ${props.theme.gutter.medium};
		line-height: ${props.theme.gutter.medium};
		border: 1px solid transparent;
		margin: 0;
		&:hover:enabled,
		&:focus:enabled	{
			background-color: transparent;
		}
		&:active:enabled	{
			background-color: transparent;
		}
	` || ''};

	/* Modifier: light */
	${props => props.modifier === "light" && `
		background-color: ${themeColor('inverseText', props)};
		color: ${themeColor('grey', props)};
		border: 1px solid ${themeColor('inverseText', props)};
		border: 1px solid ${themeColor('grey', props)};
		border-radius: 50px;
		width: ${props.width};
		height: ${props.height};

		:active:enabled ${applyForState('active', props)}	{
			background-color: ${darken(themeColor('darkenActivePercentage', props), themeColor('inverseText', props))}
		}
		:hover:enabled ${applyForState('hover', props)}	{
			background-color: ${lighten(themeColor('lightenHoverPercentage', props), themeColor('inverseText', props))}
		}
		:focus:enabled ${applyForState('focus', props)} {
			background-color: ${darken(themeColor('darkenFocusPercentage', props), themeColor('inverseText', props))}
		}
	` || ''}

	/* Modifier: dark */
	${props => props.modifier === "dark" && `
		background-color: ${themeColor('socialDarkColor', props)};
		color: ${themeColor('inverseText', props)};
		border: 1px solid ${themeColor('socialDarkColor', props)};
		border: none;
		border-radius: 50px;
		width: ${props.width};
		height: ${props.height};
		padding: unset;

		:active:enabled ${applyForState('active', props)}	{
			background-color:
			${darken(themeColor('darkenActivePercentage', props),themeColor('socialDarkColor', props))}
		}
		:hover:enabled ${applyForState('hover', props)}	{
			background-color:
			${lighten(themeColor('lightenHoverPercentage', props), themeColor('socialDarkColor', props))}
		}
		:focus:enabled ${applyForState('focus', props)} {
			background-color:
			${darken(themeColor('darkenFocusPercentage', props), themeColor('socialDarkColor', props))}
		}
	`}

	/* Modifiers: size */
	${buttonSizeModifier}

	/* Modifiers: fontSize */
	${fontSizeModifier}

	/* Modifiers: borderRadius */
	${borderRadiusModifier}

	${props => props.noPadding && `
		padding: 0 !important;
	` || ''}
`;

StyledButton.defaultProps = defaultProps;

export default StyledButton;
