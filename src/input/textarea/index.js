import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../form-group';
import Input from './styles';

const TextArea = (props) => {
	const {
		placeholder,
		input,
		type,
		disabled,
		meta,
		maxLength,
		autocomplete,
		min,
		max,
		initialValue,
		id,
		label,
		size,
		icon,
		iconPosition,
		focussed,
		className,
		field,
		error,
	} = props;


	return (
		<FormGroup
			error={error}
			label={label}
			icon={icon}
			id={id}
			iconPosition={iconPosition}
			meta={meta}
			className={className}
		>
			<Input
				id={id}
				placeholder={placeholder}
				size={size}
				name={input.name}
				type={type}
				min={min}
				max={max}
				disabled={disabled}
				focussed={focussed}
				maxLength={maxLength}
				autoComplete={autocomplete}
				value={input.value || initialValue}
				isValidate={meta.valid}
				isSubmitted={meta.submitFailed}
				icon={icon}
				iconPosition={iconPosition}
				{...input}
				{...field}
				error={error || !meta.valid && meta.submitFailed}
			/>
		</FormGroup>
	)
}


TextArea.defaultProps = {
	input: {},
	field: {},
	label: null,
	type: 'text',
	disabled: false,
	focussed: false,
	meta: {},
	maxLength: null,
	min: null,
	max: null,
	autocomplete: "on",
	size: "medium",
	iconPosition: "right",
	initialValue: '',
	icon: null,
	className: null,
	error: null,
};

TextArea.propTypes = {
	className: PropTypes.string,
	placeholder: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.number,
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			defaultMessage: PropTypes.string.isRequired,
		}),
	]).isRequired,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	id: PropTypes.string.isRequired,
	meta: PropTypes.objectOf(PropTypes.any),
	input: PropTypes.objectOf(PropTypes.any),
	field: PropTypes.objectOf(PropTypes.any),
	type: PropTypes.string,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	iconPosition: PropTypes.oneOf(['left', 'right']),
	size: PropTypes.oneOf(['medium']),
	autocomplete: PropTypes.string,
	initialValue: PropTypes.string,
	maxLength: PropTypes.number,
	focussed: PropTypes.bool,
	disabled: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	error: PropTypes.string,
};

export default TextArea;
