export default ({ size, theme }) => size === "medium" && `
	height: 2rem;
	line-height: 2rem;
	padding-right: ${theme.gutter.small};
	padding-left: ${theme.gutter.small};
	padding-top: 0;
	padding-bottom: 0;
	font-size: ${theme.fontSize.medium};
` || '';
