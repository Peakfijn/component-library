import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../form-group';
import { Switch, Slider } from './styles';
import Wrapper from '../styles/switch-wrapper';
import HiddenInput from '../styles/hidden-input';

const Toggle = ({
	disabled,
	input,
	meta,
	initialValue,
	label,
	id,
	focussed,
	className,
}) => {
	const selected = input ? input.value : initialValue;

	return (
		<FormGroup
			id={id}
			meta={meta}
			disabled={disabled}
			className={className}
		>
			<Wrapper>
				<Switch
					selected={selected}
					disabled={disabled}
					focussed={meta.active || focussed}
				>
					<Slider selected={selected} />
				</Switch>
				{label}
				<HiddenInput
					onClick={() => input.onChange(!selected)}
					onFocus={() => input.onFocus()}
					onBlur={() => input.onBlur()}
					disabled={disabled}
					type="checkbox"
					selected={selected}
					id={id}
				/>
			</Wrapper>
		</FormGroup>
	);
}

Toggle.defaultProps = {
	label: null,
	disabled: false,
	focussed: false,
	initialValue: false,
	id: null,
	className: null,
};

Toggle.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	focussed: PropTypes.bool,
	disabled: PropTypes.bool,
	initialValue: PropTypes.bool,
	meta: PropTypes.objectOf(PropTypes.any).isRequired,
	input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Toggle;
