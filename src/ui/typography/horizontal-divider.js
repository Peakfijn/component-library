import React from 'react';
import PropTypes from 'prop-types';

import { HorizontalDividerStyled, DividerStyled } from './styles.js';

const HorizontalDivider = (props) => {
	const { colour, fontSize, borderSize } = props;

	return (
		<HorizontalDividerStyled>
			<DividerStyled  colour={colour} fontSize={fontSize} borderSize={borderSize} />
		</HorizontalDividerStyled>
	);
}

HorizontalDivider.defaultProps = {
	colour: 'normal',
	fontSize: 'medium',
	borderSize: 1,
};

HorizontalDivider.propTypes = {
	colour: PropTypes.string,
	fontSize: PropTypes.string,
	borderSize: PropTypes.number,
};

export default HorizontalDivider;

