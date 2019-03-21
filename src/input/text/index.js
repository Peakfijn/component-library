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
	} = props;

	return (
		<FormGroup
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
				onBlur={input.onBlur}
				onFocus={input.onFocus}
				onChange={input.onChange}
				onClick={input.onClick}
				size={size}
				name={input.name}
				type={type}
				min={min}
				max={max}
				disabled={disabled}
				maxLength={maxLength}
				autoComplete={autocomplete}
				value={input.value || initialValue}
				isValidate={meta.valid}
				isSubmitted={meta.submitFailed}
				icon={icon}
				iconPosition={iconPosition}
				focussed={focussed}
			/>
			{children}
		</FormGroup>
	);
};

Text.defaultProps = {
	input: {},
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
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	type: PropTypes.string,
	initialValue: PropTypes.string,
	id: PropTypes.string.isRequired,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	iconPosition: PropTypes.oneOf(['left', 'right']),
	size: PropTypes.oneOf(['medium']),
	autocomplete: PropTypes.string,
	maxLength: PropTypes.number,
	disabled: PropTypes.bool,
	focussed: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	children: PropTypes.node,
};

export default Text;
