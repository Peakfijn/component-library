import styled from 'styled-components';
import defaultProps from '../../defaultProps';

export const Paragraph = styled.p`
	margin-top: ${props => props.theme.gutter.small};
	margin-bottom: ${props => props.theme.gutter.medium};
	line-height: ${props => props.theme.fontSize.medium};
	color: ${props => props.theme.color.text.normal};
	font-size: ${props => props.theme.fontSize.medium};
	${({ modifier, theme }) => modifier === 'light' && `
		color: ${theme.color.text.light};
	` || ''}
`;

export const Caption = styled.p`
	margin-top: ${props => props.theme.gutter.large};
	margin-bottom: ${props => props.theme.gutter.medium};
	line-height: ${props => props.theme.fontSize.small};
	color: ${props => props.theme.color.text.light};
	font-size: ${props => props.theme.fontSize.tiny};
	${({ isUpperCase }) => isUpperCase && `
		text-transform: uppercase;
	` || ''}
	${({ modifier, theme }) => modifier === 'dark' && `
		color: ${theme.color.text.normal};
	` || ''}
`;

Paragraph.defaultProps = defaultProps;
Caption.defaultProps = defaultProps;
