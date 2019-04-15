export default ({ borderRadius: borderRadiusModifier, theme: { borderRadius } }) => borderRadiusModifier && `
		border-radius: ${borderRadius[`${borderRadiusModifier}`]};
` || '';

