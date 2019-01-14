export default ({ theme, focussed, disabled }) => `
	${focussed ? `
		border-color: ${theme.color.brand};
	` : ''}
	&:focus {
		border-color: ${theme.color.brand};
	}

	&:disabled {
		background: ${theme.color.background.disabled}
	}

	${disabled === true && `
			background: ${theme.color.background.disabled}
	` || ''}
`;
