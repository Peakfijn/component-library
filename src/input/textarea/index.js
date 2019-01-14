import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import FormGroup from '../form-group';
import Input from './styles';

const TextArea = (props) => {
	const {
		placeholder,
		intl,
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
		focussed
	} = props;


	return (
		<FormGroup
			label={label}
			icon={icon}
			id={id}
			iconPosition={iconPosition}
			meta={meta}
		>
			<Input
				id={id}
				placeholder={
					placeholder && placeholder.id
						? intl.formatMessage(placeholder)
						: placeholder
				}
				{...input}
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
			/>
		</FormGroup>
	)
}


TextArea.defaultProps = {
	input: {},
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
};

TextArea.propTypes = {
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
	type: PropTypes.string,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	iconPosition: PropTypes.oneOf(['left', 'right']),
	size: PropTypes.oneOf(['medium']),
	autocomplete: PropTypes.string,
	initialValue: PropTypes.string,
	maxLength: PropTypes.number,
	intl: intlShape.isRequired,
	focussed: PropTypes.bool,
	disabled: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
};

export default injectIntl(TextArea);
