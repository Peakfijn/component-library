export default ({ size, theme, icon, iconPosition }) => `
	${size === "medium" && `
		${icon && iconPosition === 'right' && `
			padding-right: calc((${theme.gutter.medium}) * 2);
		` || ''}
		${icon && iconPosition === 'left' && `
			padding-left: calc((${theme.gutter.medium}) * 2);
		` || ''}
	` || ''}
`;
