import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../form-group';
import { Box, Check } from './styles';
import Wrapper from '../styles/switch-wrapper';
import HiddenInput from '../styles/hidden-input';

const Checkbox = ({
	disabled,
	indeterminate,
	input,
	meta,
	initialValue,
	label,
	id,
	focussed,
	borderRadius,
	className,
	field,
	error,
})  => {
	const selected = field.value || (input ? input.value : initialValue);

	return (
		<FormGroup
			error={error}
			id={id}
			meta={meta}
			disabled={disabled}
			className={className}
		>
			<Wrapper>
				<Box
					selected={selected}
					disabled={disabled}
					focussed={meta.active || focussed}
					indeterminate={indeterminate}
					borderRadius={borderRadius}
				>
					{(selected || indeterminate) && (
						<Check
							selected={selected}
							disabled={disabled}
							indeterminate={indeterminate}
						>
							{indeterminate ? '-' : '\u2714 ' }
						</Check>
					)}
				</Box>
				{label}
				<HiddenInput
					onBlur={field.onBlur || input.onBlur}
					onChange={field.onChange || input.onChange}
					disabled={disabled}
					type="checkbox"
					selected={selected}
					id={id}
				/>
			</Wrapper>
		</FormGroup>
	);
}

Checkbox.defaultProps = {
	field: {},
	error: null,
	label: null,
	className: null,
	disabled: false,
	focussed: false,
	initialValue: false,
	id: null,
	indeterminate: false,
	meta: {},
	borderRadius: null,
	input: {
		onBlur: () => null,
		onChange: () => null,
	},
};

Checkbox.propTypes = {
	field: PropTypes.objectOf(PropTypes.any),
	error: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	disabled: PropTypes.bool,
	initialValue: PropTypes.bool,
	focussed: PropTypes.bool,
	meta: PropTypes.objectOf(PropTypes.any),
	input: PropTypes.shape({
		onBlur: PropTypes.func,
		onChange: PropTypes.func,
	}),
	indeterminate: PropTypes.bool,
	borderRadius: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
};

export default Checkbox;
