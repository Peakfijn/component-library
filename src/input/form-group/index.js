import React from 'react';
import PropTypes from 'prop-types';
import Label from './label';
import LabelContent from './label-content';
import FormGroupContent from './content';
import { Icon } from '../../ui';

import ErrorMessage from './error-message'

const FormGroup = props => {
	const { label, meta = {}, children, id, icon, iconPosition, className } = props;

	const errorMessage = meta.submitFailed && (
		<ErrorMessage
			message={meta.error}
			isValid={!meta.valid}
		/>
	);

	return (
		<Label htmlFor={id} className={className}>
			{label &&
				<LabelContent>{label}</LabelContent>
			}
			<FormGroupContent>
				{children}
				{icon && <Icon icon={icon} modifier={iconPosition && `input-${iconPosition}`} />}
			</FormGroupContent>
			{errorMessage}
		</Label>
	);
};

FormGroup.defaultProps = {
	label: null,
	children: null,
	iconPosition: null,
	icon: null,
	className: null,
};

FormGroup.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	iconPosition: PropTypes.string,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	meta: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormGroup;
