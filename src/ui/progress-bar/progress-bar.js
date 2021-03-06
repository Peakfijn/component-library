import React from 'react';
import PropTypes from 'prop-types';
import { StyledBar, StyledHeader, StyledProgress, Slider } from './styles';

const Bar = props => {
	const {
		progress,
		modifier,
		color,
		title,
		className,
	} = props;

	return (
		<div {...props} className={className}>
			{(modifier === 'header' || modifier === "verbose") && (
				<StyledHeader>
					<span>{title}</span>
					{modifier === "verbose" && <span>{`${progress} %`}</span>}
				</StyledHeader>
			)}

			<StyledBar>
				<StyledProgress progress={`${progress}%`} color={color} />
				{modifier === "slider" && (<Slider progress={`${progress}%`} />)}
			</StyledBar>
		</div>
	);
};

Bar.defaultProps = {
	progress: 0,
	type: 'button',
	disabled: false,
	modifier: 'primary',
	size: null,
	color: null,
	title: '',
	className: null,
};

Bar.propTypes = {
	className: PropTypes.string,
	progress: PropTypes.number,
	type: PropTypes.string,
	title: PropTypes.string,
	disabled: PropTypes.bool,
	modifier: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
};

export default Bar;
