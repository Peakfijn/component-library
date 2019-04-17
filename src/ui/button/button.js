import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';
import Icon from '../icon';

const Button = props => {
	const {
		type,
		disabled,
		modifier,
		loading,
		state,
		size,
		children,
		color,
		text,
		onClick,
		width,
		height,
		noPadding,
		fontSize,
		borderRadius,
		className,
	} = props;

	return (
		<StyledButton
			type={type}
			modifier={modifier}
			disabled={disabled}
			loading={loading}
			state={state}
			size={size}
			color={color}
			text={text}
			onClick={onClick}
			width={width}
			height={height}
			noPadding={noPadding}
			fontSize={fontSize}
			borderRadius={borderRadius}
			className={className}
		>
			{loading ? <Icon icon="spinner" size="button" spin /> : children}
		</StyledButton>
	);
};

Button.defaultProps = {
	type: 'button',
	disabled: false,
	loading: false,
	noPadding: false,
	state: null,
	children: null,
	width: null,
	height: null,
	fontSize: null,
	borderRadius: null,
	color: 'normal',
	text: null,
	modifier: 'primary',
	size: 'medium',
	onClick: () => {},
	className: null,
};

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	noPadding: PropTypes.bool,
	modifier: PropTypes.string,
	color: PropTypes.string,
	text: PropTypes.string,
	state: PropTypes.string,
	size: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
	fontSize: PropTypes.oneOf(['medium']),
	borderRadius: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
};

export default Button;
