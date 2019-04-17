import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../form-group';
import Input from './styles';

const Text = props => {
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
		size,
		icon,
		iconPosition,
		label,
		focussed,
		children,
		className,
		field,
		onBlur,
		onFocus,
		onChange,
		onClick,
		name,
		value,
		error,
		borderRadius
	} = props;
	return (
		<FormGroup
			error={error}
			label={label}
			id={id}
			iconPosition={iconPosition}
			icon={icon}
			meta={meta}
			className={className}
		>
			<Input
				id={id}
				placeholder={placeholder}
				onBlur={field.onBlur || input.onBlur || onBlur}
				onFocus={field.onFocus || input.onFocus || onFocus}
				onChange={field.onChange || input.onChange || onChange}
				onClick={field.onClick || input.onClick || onClick}
				size={size}
				name={field.name || input.name || name}
				type={type}
				min={min}
				max={max}
				disabled={disabled}
				maxLength={maxLength}
				autoComplete={autocomplete}
				value={field.value || input.value || value || initialValue}
				error={error || !meta.valid && meta.submitFailed}
				icon={icon}
				iconPosition={iconPosition}
				focussed={focussed}
				borderRadius={borderRadius}
			/>
			{children}
		</FormGroup>
	);
};

Text.defaultProps = {
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
	icon: null,
	autocomplete: "on",
	size: "medium",
	iconPosition: "right",
	children: null,
	initialValue: '',
	className: null,
	onBlur: () => { },
	onFocus: () => { },
	onChange: () => { },
	onClick: () => { },
	name: null,
	value: null,
	error: null,
	borderRadius: "medium",
};

Text.propTypes = {
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
	meta: PropTypes.objectOf(PropTypes.any),
	input: PropTypes.objectOf(PropTypes.any),
	field: PropTypes.objectOf(PropTypes.any),
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	type: PropTypes.string,
	initialValue: PropTypes.string,
	id: PropTypes.string.isRequired,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	iconPosition: PropTypes.oneOf(['left', 'right']),
	borderRadius: PropTypes.oneOf(['small', 'medium', 'large']),
	size: PropTypes.oneOf(['medium']),
	autocomplete: PropTypes.string,
	maxLength: PropTypes.number,
	disabled: PropTypes.bool,
	focussed: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	children: PropTypes.node,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	name: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
};

export default Text;
