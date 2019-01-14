import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Icon } from '../../../ui';

import StyledMessage from './styles';

const ErrorMessage = props => {
	const {
		message,
		isValid,
	} = props;

	if (!message || message === '') {
		return null;
	}

	return (
		<StyledMessage isValid={isValid}>
			<Icon icon="times-circle" modifier="error" />
			{message.id ? <FormattedMessage {...message} /> : message}
		</StyledMessage>
	);
};

ErrorMessage.defaultProps = {
	isValid: false,
};

ErrorMessage.propTypes = {
	isValid: PropTypes.bool,
	message: PropTypes.string.isRequired,
};

export default ErrorMessage;
