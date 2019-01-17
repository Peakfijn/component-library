import styled from 'styled-components';

const boldModifier = ({ isBold }) => isBold && (`
	font-weight: bold;
	` || ''
);

export const H1 = styled.h1`
	text-decoration: none;
	margin-top: 0;
	margin-bottom: ${props => props.theme.gutter.huge};
	${({ theme: { fontSize, lineHeightMultiplier }}) => `
		line-height: calc(${fontSize.huge} ${lineHeightMultiplier.h1});
	`}
	color: ${props => props.theme.color.text.normal};
	font-size: ${props => props.theme.fontSize.gigantic};
	font-weight: normal;
	${boldModifier}

	${({ modifier }) => modifier === 'no-margin' && `
		margin-bottom: 0;
	` || ''}
`;

export const H2 = styled.h2`
	text-decoration: none;
	margin-top: 0;
	margin-bottom: ${props => props.theme.gutter.medium};
	${({ theme: { fontSize, lineHeightMultiplier }}) => `
		line-height: calc(${fontSize.large} ${lineHeightMultiplier.h2});
	`}
	color: ${props => props.theme.color.text.normal} !important;
	font-size: ${props => props.theme.fontSize.huge};
	font-weight: normal;
	${boldModifier}

	${({ modifier }) => modifier === 'no-margin' && `
		margin-bottom: 0;
	` || ''}
`;

export const H3 = styled.h3`
	text-decoration: none;
	margin-top: 0;
	margin-bottom: ${props => props.theme.gutter.small};
	${({ theme: { fontSize, lineHeightMultiplier }}) => `
		line-height: calc(${fontSize.large} ${lineHeightMultiplier.h3});
	`}
	color: ${props => props.theme.color.text.normal};
	font-size: ${props => props.theme.fontSize.large};
	font-weight: normal;
	${boldModifier}

	${({ modifier }) => modifier === 'no-margin' && `
		margin-bottom: 0;
	` || ''}
`;
