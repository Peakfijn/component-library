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
	// font-size: ${({ theme, fontSize }) => theme.color.fontSize[fontSize]};
	// color: ${({ theme, colour }) => theme.color.text[colour]};

HorizontalDividerStyled.defaultProps = defaultProps;
DividerStyled.defaultProps = defaultProps;

