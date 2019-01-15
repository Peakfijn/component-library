import styled from 'styled-components';

const SpacingStyle = styled.div`
	box-sizing: border-box;
	margin-right: auto;
	margin-left: auto;
	line-height: initial;

	/* Modifiers: horizontal gutter width */
	${({ horizontal, theme }) => horizontal && `
		padding-left: ${theme.gutter[`${horizontal}`]};
		padding-right: ${theme.gutter[`${horizontal}`]};
	` || ''}

	/* Modifiers: vertical gutter width */
	${({ vertical, theme }) => vertical && `
		padding-top: ${theme.gutter[`${vertical}`]};
		padding-bottom: ${theme.gutter[`${vertical}`]};
	` || ''}

	/* Modifiers: at minimum breakpoint apply spacing */
	${({ minAtBreakpoint, theme: { gutter, breakpoint } }) => minAtBreakpoint && Object.keys(minAtBreakpoint).map(
		key => `
			@media (max-width: ${breakpoint[key]}) {
				${minAtBreakpoint[key].horizontal && `
					padding-left: ${gutter[`${minAtBreakpoint[key].horizontal}`]};
					padding-right: ${gutter[`${minAtBreakpoint[key].horizontal}`]};
				` || ''}

				${minAtBreakpoint[key].vertical && `
					padding-top: ${gutter[`${minAtBreakpoint[key].vertical}`]};
					padding-bottom: ${gutter[`${minAtBreakpoint[key].vertical}`]};
				` || ''}
			}
		` || ''
	) || ''}

	/* Modifiers: at maximum breakpoint apply spacing */
	${({ maxAtBreakpoint, theme: { gutter, breakpoint } }) => maxAtBreakpoint && Object.keys(maxAtBreakpoint).map(
		key => breakpoint[key] && `
			@media (max-width: ${breakpoint[key]}) {
				${maxAtBreakpoint[key].horizontal && `
					padding-left: ${gutter[`${maxAtBreakpoint[key].horizontal}`]};
					padding-right: ${gutter[`${maxAtBreakpoint[key].horizontal}`]};
				` || ''}

				${breakpoint[key].vertical && `
					padding-top: ${gutter[`${maxAtBreakpoint[key].vertical}`]};
					padding-bottom: ${gutter[`${maxAtBreakpoint[key].vertical}`]};
				` || ''}
			}
		` || ''
	) || ''}

	/* Modifiers: set max-width at breakpoint */
	${({ maxWidthBreakpoint, theme: { breakpoint } }) => Object.keys(breakpoint).map(
		key => `
			${maxWidthBreakpoint === key && `
				max-width: ${breakpoint[key]};
			` || ''}
		` || ''
	) || ''}

	/* Modifiers: remove specific */
	${({ modifier }) => modifier === 'not-bottom' && `
		padding-bottom: 0 !important;
	` || ''}

	${({ modifier }) => modifier === 'not-right' && `
		padding-right: 0 !important;
	` || ''}

	${({ modifier }) => modifier === 'not-left' && `
		padding-left: 0 !important;
	` || ''}

	${({ modifier }) => modifier === 'not-top' && `
		padding-top: 0 !important;
	` || ''}

	${({ isWide }) => isWide && `
		width: 100%;
	` || ''}

	/* Modifiers: only specific */
	${({ modifier }) => modifier === 'only-top' && `
		padding-right: 0 !important;
		padding-bottom: 0 !important;
		padding-left: 0 !important;
	` || ''}

	${({ modifier }) => modifier === 'only-right' && `
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		padding-left: 0 !important;
	` || ''}

	${({ modifier }) => modifier === 'only-bottom' && `
		padding-top: 0 !important;
		padding-right: 0 !important;
		padding-left: 0 !important;
	` || ''}

	${({ modifier }) => modifier === 'only-left' && `
		padding-top: 0 !important;
		padding-right: 0 !important;
		padding-bottom: 0 !important;
	` || ''}

	${({ modifier }) => modifier === 'only-vertical' && `
		padding-left: 0 !important;
		padding-right: 0 !important;
	` || ''}

	${({ modifier }) => modifier === 'only-horizontal' && `
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	` || ''}
`;

export default SpacingStyle;
