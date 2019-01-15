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
})  => {
	const selected = input ? input.value : initialValue;

	return (
		<FormGroup
			id={id}
			meta={meta}
			disabled={disabled}
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
					onClick={!disabled ? (() => input.onChange(!selected)) : undefined}
					onFocus={() => input.onFocus && input.onFocus()}
					onBlur={() => input.onBlur && input.onBlur()}
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
	label: null,
	disabled: false,
	focussed: false,
	initialValue: false,
	id: null,
	indeterminate: false,
	meta: {},
	borderRadius: null,
};

Checkbox.propTypes = {
	id: PropTypes.string,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	disabled: PropTypes.bool,
	initialValue: PropTypes.bool,
	focussed: PropTypes.bool,
	meta: PropTypes.objectOf(PropTypes.any),
	input: PropTypes.objectOf(PropTypes.any).isRequired,
	indeterminate: PropTypes.bool,
	borderRadius: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
};

export default Checkbox;
