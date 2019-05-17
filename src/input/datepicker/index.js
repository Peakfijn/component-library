import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isIE, browserVersion, isMobile, isTablet } from 'react-device-detect';
import moment from 'moment';

import FormGroup from '../form-group';
import StyledDatepicker, { StyledReactDatePicker } from './styles';

import { Text } from '..';

class Datepicker extends Component {
	onKeyPress = (ev) => {
		if (ev.key === 'Enter') {
			ev.preventDefault();
			this.durationRef.blur();
		}
	}

	handleChange = (event) => {
		const { input: { onChange }, notation } = this.props;

		if (event && moment(event, notation).isValid) {
			onChange(moment(event, notation));
		}
	}

	render() {
		const {
			input: { value },
			notation = "YYYY-MM-DD",
			size,
			meta,
			label,
			id,
			iconPosition,
			icon,
			placeholder,
			className,
			error
		} = this.props;
		if (!isMobile && !isTablet && !(isIE && browserVersion <= 11)) {
			return (
				<FormGroup
					label={label}
					id={id}
					iconPosition={iconPosition}
					icon={icon}
					meta={meta}
					className={className}
					error={error}
				>
					<StyledDatepicker>
						<StyledReactDatePicker
							selected={value}
							dateFormat={notation}
							placeholderText={placeholder || notation}
							size={size}
							type="date"
							onChangeRaw={event => this.handleChange(event)}
							onChange={event => this.handleChange(event)}
							isValidate={meta.valid}
							isSubmitted={meta.submitFailed}
							onKeyPress={this.onKeyPress}
							icon={icon}
							iconPosition={iconPosition}
						/>
					</StyledDatepicker>
				</FormGroup>
			);
		}
		return (
			<Text
				type="date"
				onChange={event => this.handleChange(event.target.value)}
				value={value && (value.format ? value.format(notation) : value)}
				placeholder={notation}
				{...this.props}
				error={error}
			/>
		);
	}
}

Datepicker.defaultProps = {
	input: {},
	meta: {},
	icon: null,
	iconPosition: null,
	label: null,
	size: "medium",
	notation: 'DD-MM-YYYY',
	className: null,
	error: null,
}

Datepicker.propTypes = {
	className: PropTypes.string,
	meta: PropTypes.objectOf(PropTypes.any),
	input: PropTypes.objectOf(PropTypes.any),
	id: PropTypes.string.isRequired,
	notation: PropTypes.string,
	size: PropTypes.string,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	placeholder: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.number,
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			defaultMessage: PropTypes.string.isRequired,
		}),
	]).isRequired,
	label: PropTypes.objectOf(PropTypes.any),
	iconPosition: PropTypes.oneOf(['left', 'right']),
	error: PropTypes.string,
}

export default Datepicker;
