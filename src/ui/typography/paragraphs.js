import styled from 'styled-components';
import defaultProps from '../../default-props';

export const Paragraph = styled.p`
	margin-top: ${props => props.theme.gutter.small};
	margin-bottom: ${props => props.theme.gutter.medium};
	${({ theme: { lineHeight }}) => `
		line-height: ${lineHeight.paragraph};
	`}
	color: ${props => props.theme.color.text.normal};
	${({ theme, fontSize = 'medium' }) =>  fontSize && `
		font-size: ${theme.fontSize[fontSize]};
	` || ''}
	${({ theme, color = 'normal' }) =>  color && `
		color: ${theme.color.text[color]};
	` || ''}
`;

export const Caption = styled.p`
	margin-top: 0;
	margin-bottom: ${props => props.theme.gutter.medium};
	line-height: ${props => props.theme.lineHeight.paragraph};
	color: ${({ color, theme }) => color ? theme.color.text[color] : theme.color.text.light};
	${({ theme, fontSize = 'small' }) =>  fontSize && `
		font-size: ${theme.fontSize[fontSize]};
	` || ''}
	${({ isUpperCase }) => isUpperCase && `
		text-transform: uppercase;
	` || ''}
	${({ theme, color = 'normal' }) =>  color && `
		color: ${theme.color.text[color]};
	` || ''}
`;

Paragraph.defaultProps = defaultProps;
Caption.defaultProps = defaultProps;
