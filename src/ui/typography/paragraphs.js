import styled from 'styled-components';
import defaultProps from '../../default-props';

export const Paragraph = styled.p`
	margin-top: ${props => props.theme.gutter.small};
	margin-bottom: ${props => props.theme.gutter.medium};
	line-height: ${props => props.theme.fontSize.medium};
	color: ${props => props.theme.color.text.normal};
	font-size: ${props => props.theme.fontSize.medium};
	${({ theme, color = 'normal' }) =>  color && `
		color: ${theme.color.text[color]};
	` || ''}
`;

export const Caption = styled.p`
	margin-top: ${props => props.theme.gutter.large};
	margin-bottom: ${props => props.theme.gutter.medium};
	line-height: ${props => props.theme.fontSize.small};
	color: ${({ color, theme }) => color ? theme.color.text[color] : theme.color.text.light};
	font-size: ${props => props.theme.fontSize.tiny};
	${({ isUpperCase }) => isUpperCase && `
		text-transform: uppercase;
	` || ''}
	${({ theme, color = 'normal' }) =>  color && `
		color: ${theme.color.text[color]};
	` || ''}
`;

Paragraph.defaultProps = defaultProps;
Caption.defaultProps = defaultProps;
