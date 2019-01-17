import React from 'react'
import PropTypes from 'prop-types';
import InputIcon from './styles';

const Icon = props => {
	const { icon, spin, modifier, className } = props;
	if (!icon) {
		return null;
	}

	return (
		<InputIcon
			icon={icon}
			spin={spin}
			modifier={modifier}
			className={className}
		/>
	);
}
Icon.defaultProps = {
	modifier: null,
	spin: false,
	className: null,
}

Icon.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.objectOf(PropTypes.any),
	]).isRequired,
	spin: PropTypes.bool,
	modifier: PropTypes.string,
}

export default Icon;
