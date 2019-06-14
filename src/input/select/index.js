import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './styles';
import FormGroup from '../form-group';

const Select = ({
	focussed,
	options,
	disabled,
	placeholder,
	input,
	initialValue,
	size,
	iconPosition,
	label,
	id,
	icon,
	meta,
	className,
}) => (
	<FormGroup
		label={label}
		id={id}
		iconPosition={iconPosition}
		icon={icon}
		meta={meta}
		className={className}
	>
		<StyledSelect
			disabled={disabled}
			focussed={focussed}
			value={input? input.value : initialValue}
			size={size}
			icon={icon}
			iconPosition={iconPosition}
			{...input}
		>
			{placeholder && <option value="" disabled>{placeholder}</option>}
			{options.length > 0 && options.map(item =>
				<option
					key={`select-option-${id}-${item.value}`}
					value={item.value}
					disabled={item.disabled}
				>
					{item.label}
				</option>
			)}
		</StyledSelect>
	</FormGroup>
);

Select.defaultProps = {
	disabled: false,
	focussed: false,
	placeholder: 'Select',
	size: "medium",
	iconPosition: "right",
	icon: 'angle-down',
	label: null,
	input: {},
	initialValue: '',
	options: {},
	meta: {},
	className: null,
};

Select.propTypes = {
	className: PropTypes.string,
	input: PropTypes.objectOf(PropTypes.any),
	initialValue: PropTypes.string,
	meta: PropTypes.objectOf(PropTypes.any),
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.number,
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			defaultMessage: PropTypes.string.isRequired,
		}),
	]),
	disabled: PropTypes.bool,
	focussed: PropTypes.bool,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	size: PropTypes.oneOf(['medium']),
	iconPosition: PropTypes.oneOf(['left', 'right']),
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		label: PropTypes.string,
	})),
};

export default Select;
