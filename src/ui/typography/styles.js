import styled from 'styled-components';
import defaultProps from '../../default-props';

export const HorizontalDividerStyled = styled.span`
	display: block;
	height: 100%;
	text-align: center;
`;
export const DividerStyled = styled.span`
	width: 1px;
	border-right: ${({ borderSize }) => borderSize}px solid ${({ theme, colour }) => theme.color.text[colour]};
	overflow: hidden;
	display: block;
	height: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
	margin: auto;
`;
export const SeparatorStyled = styled.hr`
	margin: 0;
	border: none;
	border-top:
		${({ borderWidth, theme }) => theme.borderWidth[borderWidth]}
		solid
		${({ color, theme }) => theme.color.border[color]};
	width: inherit;
	min-width: ${props => props.theme.gutter.humongous};
`;

HorizontalDividerStyled.defaultProps = defaultProps;
DividerStyled.defaultProps = defaultProps;
SeparatorStyled.defaultProps  = defaultProps;
