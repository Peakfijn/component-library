export default ({ error, theme }) => `
	${error && `
		border-color: ${theme.color.danger};
	` || ''}
`;
