import React from 'react';
import PropTypes from 'prop-types';
import Label from './label';
import LabelContent from './label-content';
import FormGroupContent from './content';
import { Icon } from '../../ui';

import ErrorMessage from './error-message'

const FormGroup = props => {
	const { label, error, meta = {}, children, id, icon, iconPosition, className } = props;

	const errorMessage = (error || meta.submitFailed) && (
		<ErrorMessage
			message={error || meta.error}
			isValid={error || !meta.valid}
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
	error: null,
};

FormGroup.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	iconPosition: PropTypes.string,
	error: PropTypes.string,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	meta: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormGroup;
