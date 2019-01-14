export default ({ isValidate, isSubmitted, theme }) => `
	${!isValidate && isSubmitted && `
		border-color: ${theme.color.danger};
	` || ''}
`;
