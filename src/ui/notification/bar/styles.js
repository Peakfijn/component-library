import styled from 'styled-components';

import defaultProps from '../../../default-props';

const StyledBar = styled.div`
	box-sizing: border-box;
	border-radius: ${props => props.theme.borderRadius.medium};
	width: 100%;
	text-transform: none;
	text-decoration: none;
	display: flex;
	margin-bottom: ${props => props.theme.gutter.medium};
	font-family: inherit;
	font-size: ${props => props.theme.fontSize.medium};
	font-weight: 600;
	color: ${props => props.theme.color.inverseText};
	text-align: left;

	background-color: ${props => props.theme.color[props.type]};
	border: 1px solid ${props => props.theme.color[props.type]};

	& span {
		flex: 1;
		padding: ${props => props.theme.gutter.medium} 0;
	}
`;

StyledBar.defaultProps = defaultProps;

export default StyledBar;
