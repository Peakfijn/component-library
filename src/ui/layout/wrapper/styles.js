import styled from 'styled-components';
import defaultProps from '../../../defaultProps';

const WrapperStyle = styled.div`
	${({ modifier, align, wrap, theme: { breakpoint } }) => (modifier === 'flex' || modifier === "flex-column") && `
		display: flex;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 100%;

		${modifier === "flex-column" && `
			flex-direction: column;
			height: 100vh;
			overflow: hidden;
		` || ''}


		${align && `
			align-items: ${align};
		` || ''}

		${wrap && `
			flex-wrap: wrap;
			> * {
				flex-grow: 0 !important;
			}

			${Object.keys(wrap).map(key => `
				@media (max-width: ${breakpoint[key]}) {
					> * {
						flex-basis: ${wrap[key]} !important;
					}
				}
			` || '').reverse().join(' ') || ''}
		` || ''}
	`}

	${({ modifier, grow }) => modifier === 'flex-cell' && `
		white-space: initial;
		flex: 1;
		text-overflow: ellipsis;
		word-break: break-all;
		box-sizing: border-box;
		word-wrap: break-word;
		width: 100%;

		${grow && grow === "not-grow" && `
			flex-grow: 0;
			flex-shrink: 0;
		` || ''}
		${grow && grow === "auto" && `
			overflow: auto;
			flex-grow: 1;
			flex-shrink: 1;
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

	${({ horizontalGutter, theme, grow }) => horizontalGutter && `
		> * {
			padding-left: ${theme.gutter[`${horizontalGutter}`]};
			padding-right: ${theme.gutter[`${horizontalGutter}`]};
		}
		${grow === "fluid" && `
			> *:first-child {
				padding-left: 0;
			}
			> *:last-child {
				padding-right: 0;
			}
		` || ''}
	` || ''}

	${({ verticalGutter, theme, grow }) => verticalGutter && `
		> * {
			padding-top: ${theme.gutter[`${verticalGutter}`]};
			padding-bottom: ${theme.gutter[`${verticalGutter}`]};
		}
		${grow === "fluid" && `
			> *:first-child {
				padding-top: 0;
			}
			> *:last-child {
				padding-bottom: 0;
			}
		` || ''}
	` || ''}
`;

WrapperStyle.defaultProps = defaultProps;

export default WrapperStyle;
