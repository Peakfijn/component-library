import styled from 'styled-components';
import defaultProps from '../../default-props';
import boldModifier from "./modifier";

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

export const Emphasis = styled.span`
	${({ theme, lineHeight = 'paragraph' }) =>  lineHeight && `
		line-height: ${theme.lineHeight[lineHeight]};
	` || ''}
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

export const Typography = styled.p`
	${({ type, color, theme }) => type && theme.typography &&(typographyThemeConfiguration =>
		typographyThemeConfiguration && `
		font-size: ${theme.fontSize[typographyThemeConfiguration.size]};
		${typographyThemeConfiguration.weight && `font-weight: ${typographyThemeConfiguration.weight};` || ''}
		${typographyThemeConfiguration.family && `font-family: ${typographyThemeConfiguration.family};` || ''}
		${typographyThemeConfiguration.transform && `text-transform: ${typographyThemeConfiguration.transform};` || ''}
		${typographyThemeConfiguration.spacing && `letter-spacing: ${typographyThemeConfiguration.spacing};` || ''}
		${typographyThemeConfiguration.lineHeight && `line-height: ${typographyThemeConfiguration.lineHeight};` || ''}
		${(color || theme.color.text[typographyThemeConfiguration.color]) && `
			color: ${color || theme.color.text[typographyThemeConfiguration.color]};
		` || ''}
	` || '')(theme.typography[type])}
	${boldModifier}
`;

Typography.defaultProps = defaultProps;
Paragraph.defaultProps = defaultProps;
Caption.defaultProps = defaultProps;
