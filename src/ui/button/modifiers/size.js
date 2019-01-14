export default ({ size, theme }) => `
	${size === 'tiny' && `
		line-height: 1rem;
		font-size: ${theme.fontSize.tiny};
		padding: ${theme.gutter.none} ${theme.gutter.tiny};
	` || ''}

	${size === 'small' && `
		line-height: 1rem;
		font-size: ${theme.fontSize.small};
		padding: ${theme.gutter.tiny} ${theme.gutter.small};
	` || ''}

	${size === 'medium' && `
		line-height: 1rem;
		font-size: ${theme.fontSize.small};
		padding: ${theme.gutter.small} ${theme.gutter.medium};
	` || ''}

	${size === 'large' && `
		line-height: 1rem;
		padding: ${theme.gutter.medium} ${theme.gutter.large};
	` || ''}

	${size === 'huge' && `
		line-height: 1rem;
		padding: ${theme.gutter.large} ${theme.gutter.huge};
	` || ''}
`;

