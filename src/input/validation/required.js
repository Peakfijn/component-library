const required = value =>
	value || typeof value === 'number' ? undefined : 'This field is required';

export default required;
