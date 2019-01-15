import styled from 'styled-components';

const WrapperStyle = styled.div`
	${({ modifier, align }) => modifier === 'flex' && `
		display: flex;
		white-space: nowrap;
		text-overflow: ellipsis;
		align-items: start;
		font-size=

		${align && `
			align-items: ${align};
		` || ''}
	`}

	${({ modifier, grow }) => modifier === 'flex-cell' && `
		white-space: initial;
		flex: 1;
		text-overflow: ellipsis;
		box-sizing: border-box;
		word-wrap: break-word;

		${grow && grow === "not-grow" && `
			flex-grow: 0;
		` || ''}
	` || ''}

	${({ modifier }) => modifier === 'full' && `
		height: 100%;
		width: 100%;
		position: fixed;
		overflow: auto;
	` || ''}

	${({ modifier, theme: { gutter } }) => modifier === 'full-right' && `
		height: 100%;
		max-width: calc(100% - ${gutter.medium});
		position: fixed;
		overflow: auto;
		top: 0;
		bottom: 0;
		right: 0;
	` || ''}

	${({ modifier }) => modifier === 'bottom-right' && `
		position: fixed;
		right: 0;
		bottom: 0;
	` || ''}

	${({ background, theme }) => background && `
			background: ${theme.color.background[`${background}`]};
	` || ''}

	${({ horizontalGutter, theme }) => horizontalGutter && `
		> * {
			margin-left: ${theme.gutter[`${horizontalGutter}`]};
			margin-right: ${theme.gutter[`${horizontalGutter}`]};
		}
		> *:first-child {
			margin-left: 0;
		}
		> *:last-child {
			margin-right: 0;
		}
	` || ''}

	${({ verticalGutter, theme }) => verticalGutter && `
		> * {
			margin-top: ${theme.gutter[`${verticalGutter}`]};
			margin-bottom: ${theme.gutter[`${verticalGutter}`]};
		}
		> *:first-child {
			margin-top: 0;
		}
		> *:last-child {
			margin-bottom: 0;
		}
	` || ''}
`;

export default WrapperStyle;
