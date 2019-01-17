import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Icon } from '../../../ui';

import StyledMessage from './styles';

const ErrorMessage = props => {
	const {
		message,
		isValid,
		className,
	} = props;

	if (!message || message === '') {
		return null;
	}

	return (
		<StyledMessage isValid={isValid} className={className}>
			<Icon icon="times-circle" modifier="error" />
			{message.id ? <FormattedMessage {...message} /> : message}
		</StyledMessage>
	);
};

ErrorMessage.defaultProps = {
	isValid: false,
	className: null,
};

ErrorMessage.propTypes = {
	className: PropTypes.string,
	isValid: PropTypes.bool,
	message: PropTypes.string.isRequired,
};

export default ErrorMessage;
