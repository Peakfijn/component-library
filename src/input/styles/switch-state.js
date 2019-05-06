import { darken, lighten } from 'polished';

export default ({ theme, focussed, selected, disabled, indeterminate, backgroundColor }) => `
	${focussed ? `
		background-color: ${lighten(theme.color.adjustColor.tiny, theme.color.background[backgroundColor])};
	` : ''}

	/* State: selected or indeterminate */
	${(selected || indeterminate) && `
		background-color: ${theme.color.background[backgroundColor]};
		border-color: ${theme.color.brand};
	` || ''}

	${focussed && (selected || indeterminate) ? `
		background-color: ${darken(theme.color.adjustColor.tiny, theme.color.brand)};
	` : ''}

	/* State: disabled */
	${disabled && `
		background-color: ${theme.color.background.inputDisabled};
		cursor: not-allowed;
	` || ''}

	/* State: selected & disabled */
	${selected && disabled && `
		background-color: ${lighten(theme.color.adjustColor.medium, theme.color.brand)};
		border-color: ${lighten(theme.color.adjustColor.medium, theme.color.brand)};
		cursor: not-allowed;
	` || ''}
`;
