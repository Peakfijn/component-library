import styled from 'styled-components';
import { darken, lighten } from 'polished';
import buttonSizeModifier from './modifiers/size';
import fontSizeModifier from './modifiers/font-size';
import borderRadiusModifier from './modifiers/border-radius';
import defaultProps from '../../default-props';

const themeColor = (key, theme) => theme.color[key] || theme.color.normal;

const applyForState = (state, props) => (props.state === state ? ', &' : '')

/*
 * Returns the proper text color, depending on the background color and whether or not a specific text color has been 
 * specified.
 */
const getTextColor = (color, text, themeColors) => {
	if (text)
		return themeColors.text[text];
	if (themeColors.invertedTextColors &&
		themeColors.invertedTextColors.includes(color)) {
		return themeColors.text.inverted;
	}
	return themeColors.text.normal;
};

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
	${props => (props.modifier === 'full' || props.modifier === 'ghost-full') && `
		width: 100%;
	`}

	${({ modifier }) => modifier === 'no-margin' && `
		margin-bottom: 0;
	` || ''}

	/* Apply color and state styling */
	${({ modifier, color, text, theme, state }) => modifier !== 'text' && `
		background-color: ${themeColor(color, theme)};
		color: ${getTextColor(color, text, theme.color)};
		border: 1px solid ${darken(theme.color.adjustColor.tiny, themeColor(color, theme))};
		${(state === 'hover' || state === 'focus' || state === 'active' ) && `
			background-color: ${lighten(theme.color.adjustColor.tiny, themeColor(color, theme))};
		` || ''}
		${state === 'active' && `
			background-color: ${darken(theme.color.adjustColor.tiny, themeColor(color, theme))};
		` || ''}

		:hover:enabled,
		:focus:enabled	{
			background-color: ${lighten(theme.color.adjustColor.tiny, themeColor(color, theme))};
		}
		:active:enabled	{
			background-color: ${darken(theme.color.adjustColor.tiny, themeColor(color, theme))};
		}
	` || ''}

	/* Modifier: disabled */
	${({ theme: { color }, disabled }) => disabled && `
		background-color: ${color.background.inputDisabled};
		color: ${color.text.disabled};
		border: 1px solid ${lighten(color.adjustColor.tiny, color.background.inputDisabled)};
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
		&:active:enabled {
			background-color: transparent;
		}
	` || ''};

	/* Modifier: ghost */
	${({ modifier, color, theme, state, width, height }) => (
		modifier === 'ghost' ||
		modifier === 'ghost-full'
	) && `
		background-color: transparent;
		color: ${themeColor(color, theme)};
		border: 1px solid ${themeColor(color, theme)};
		${(state === 'hover' || state === 'focus' || state === 'active' ) && `
			border: 1px solid ${lighten(theme.color.adjustColor.tiny, themeColor(color, theme))};
		` || ''}
		${state === 'active' && `
			border: 1px solid ${darken(theme.color.adjustColor.tiny, themeColor(color, theme))};
		` || ''}
		width: ${width};
		height: ${height};

		:hover:enabled,
		:focus:enabled	{
			border: 1px solid ${lighten(theme.color.adjustColor.tiny, themeColor(color, theme))};
			background-color: transparent;
		}
		:active:enabled	{
			border: 1px solid ${darken(theme.color.adjustColor.tiny, themeColor(color, theme))};
			background-color: transparent;
		}
	` || ''}

	${({ modifier, color, theme }) => modifier === 'text' && `
		background-color: transparent;
		color: ${themeColor(color, theme)};
		border: none;
	` || ''}

	/* Modifier: light */
	${({ modifier, theme, width, height }) => modifier === "light" && `
		background-color: ${themeColor('inverseText', theme)};
		color: ${themeColor('grey', theme)};
		border: 1px solid ${themeColor('inverseText', theme)};
		border: 1px solid ${themeColor('grey', theme)};
		border-radius: 50px;
		width: ${width};
		height: ${height};

		:active:enabled ${applyForState('active', theme)}	{
			background-color: ${darken(themeColor('darkenActivePercentage', theme), themeColor('inverseText', theme))}
		}
		:hover:enabled ${applyForState('hover', theme)}	{
			background-color: ${lighten(themeColor('lightenHoverPercentage', theme), themeColor('inverseText', theme))}
		}
		:focus:enabled ${applyForState('focus', theme)} {
			background-color: ${darken(themeColor('darkenFocusPercentage', theme), themeColor('inverseText', theme))}
		}
	` || ''}

	/* Modifier: dark */
	${({ modifier, theme, width, height }) => modifier === "dark" && `
		background-color: ${themeColor('socialDarkColor', theme)};
		color: ${themeColor('inverseText', theme)};
		border: 1px solid ${themeColor('socialDarkColor', theme)};
		border: none;
		border-radius: 50px;
		width: ${width};
		height: ${height};
		padding: unset;

		:active:enabled ${applyForState('active', theme)}	{
			background-color:
			${darken(themeColor('darkenActivePercentage', theme),themeColor('socialDarkColor', theme))}
		}
		:hover:enabled ${applyForState('hover', theme)}	{
			background-color:
			${lighten(themeColor('lightenHoverPercentage', theme), themeColor('socialDarkColor', theme))}
		}
		:focus:enabled ${applyForState('focus', theme)} {
			background-color:
			${darken(themeColor('darkenFocusPercentage', theme), themeColor('socialDarkColor', theme))}
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
