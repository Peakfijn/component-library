const boldModifier = ({ isBold }) => isBold && `
	font-weight: bold;
` || '';

export default boldModifier;
