import React from 'react';
import PropTypes from 'prop-types';
import StyledBar from './styles';
import { Icon, Button } from '../..';

const notificationIcon = {
	'success': { icon: 'check-circle' },
	'info': { icon: 'info-circle' },
	'warning': { icon: 'info-circle' },
	'danger': { icon: 'times-circle' },
}

const Bar = props => {
	const {
		type,
		children,
		onLeftClick,
		onRightClick,
		className,
	} = props;

	return (
		<StyledBar
			type={type}
			className={className}
			{...props}
		>
			{notificationIcon[type] && notificationIcon[type].icon && (
				<Button modifier="invisible" onClick={onLeftClick}>
					<Icon icon={notificationIcon[type].icon} />
				</Button>
			)}

			 <span>{children}</span>

			 <Button modifier="invisible" onClick={onRightClick}>
				 <Icon icon="times" />
			 </Button>

		</StyledBar>
	);
};

Bar.defaultProps = {
	onLeftClick: null,
	onRightClick: null,
	className: null,
};

Bar.propTypes = {
	className: PropTypes.string,
	onLeftClick: PropTypes.func,
	onRightClick: PropTypes.func,
	type: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};

export default Bar;
