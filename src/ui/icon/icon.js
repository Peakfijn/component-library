import React from 'react'
import PropTypes from 'prop-types';
import InputIcon from './styles';

const Icon = props => {
	const { icon, spin, modifier } = props;
	if (!icon) {
		return null;
	}

	return (
		<InputIcon
			icon={icon}
			spin={spin}
			modifier={modifier}
		/>
	);
}
Icon.defaultProps = {
	modifier: null
}

Icon.defaultProps = {
	spin: false,
	modifier: '',
}

Icon.propTypes = {
	icon: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.objectOf(PropTypes.any),
	]).isRequired,
	spin: PropTypes.bool,
	modifier: PropTypes.string,
}

export default Icon;
