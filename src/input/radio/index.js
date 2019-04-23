import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../form-group';
import { Switch, Slider } from './styles';
import Wrapper from '../styles/switch-wrapper';
import HiddenInput from '../styles/hidden-input';

const Radio = ({
	disabled,
	input,
	meta,
	label,
	id,
	focussed,
	toggleValue,
	className,
	field
}) => {
	let selected = (input && input.value === toggleValue) || (field && field.value === toggleValue);

	if (toggleValue === "" && !(input && input.value) && !(field && field.value)) {
		selected = true;
	}

	return (
		<FormGroup
			className={className}
			id={id}
			meta={meta}
			disabled={disabled}
		>
			<Wrapper>
				<Switch
					selected={selected}
					disabled={disabled}
					focussed={(meta && meta.active) || focussed}
				>
					{selected && <Slider selected={selected} disabled={disabled} />}
				</Switch>
				{label}
				<HiddenInput
					onClick={input.onChange || field.onChange}
					onFocus={input.onFocus || field.onFocus}
					onBlur={input.onBlur || field.onBlur}
					disabled={disabled}
					type="radio"
					selected={selected}
					value={toggleValue}
					name={input.name || field.name}
					id={id}
				/>
			</Wrapper>
		</FormGroup>
	)
};

Radio.defaultProps = {
	label: null,
	disabled: false,
	focussed: false,
	id: null,
	className: null,
	input: {},
	field: {}
};

Radio.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	toggleValue: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	focussed: PropTypes.bool,
	meta: PropTypes.objectOf(PropTypes.any).isRequired,
	input: PropTypes.objectOf(PropTypes.any),
	field: PropTypes.objectOf(PropTypes.any),
};

export default Radio;
