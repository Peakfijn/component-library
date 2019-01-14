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
}) => {
	const selected = input.value === toggleValue;

	return (
		<FormGroup
			id={id}
			meta={meta}
			disabled={disabled}
		>
			<Wrapper>
				<Switch
					selected={selected}
					disabled={disabled}
					focussed={meta.active || focussed}
				>
					{selected && <Slider selected={selected} disabled={disabled} />}
				</Switch>
				{label}
				<HiddenInput
					onClick={() => input.onChange(toggleValue)}
					onFocus={() => input.onFocus()}
					onBlur={() => input.onBlur()}
					disabled={disabled}
					type="radio"
					selected={selected}
					value={toggleValue}
					name={input.name}
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
};

Radio.propTypes = {
	id: PropTypes.string,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	toggleValue: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	focussed: PropTypes.bool,
	meta: PropTypes.objectOf(PropTypes.any).isRequired,
	input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Radio;
