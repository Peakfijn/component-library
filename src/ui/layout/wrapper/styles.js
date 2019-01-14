import styled from 'styled-components';

const WrapperStyle = styled.div`
	${({ modifier, align }) => modifier === 'flex' && `
		display: flex;
		white-space: nowrap;
		text-overflow: ellipsis;
		align-items: start;

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
