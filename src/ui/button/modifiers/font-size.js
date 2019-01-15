export default ({ fontSize: fontSizeModifier, theme: { fontSize } }) => fontSizeModifier && `
		font-size: ${fontSize[`${fontSizeModifier}`]};
` || '';

