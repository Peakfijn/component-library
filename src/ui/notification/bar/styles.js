import styled from 'styled-components';

import defaultProps from '../../../defaultProps';

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

	/* Type: succes */
	${props => props.type === "success" && `
		background-color: ${props.theme.color.success};
		border: 1px solid ${props.theme.color.success};
	`};

	/* Type: info */
	${props => props.type === "info" && `
		background-color: ${props.theme.color.info};
		border: 1px solid ${props.theme.color.info};
	`};

	/* Type: warning */
	${props => props.type === "warning" && `
		background-color: ${props.theme.color.warning};
		border: 1px solid ${props.theme.color.warning};
	`};

	/* Type: danger */
	${props => props.type === "danger" && `
		background-color: ${props.theme.color.danger};
		border: 1px solid ${props.theme.color.danger};
	`};

	& span {
		flex: 1;
		padding: ${props => props.theme.gutter.medium} 0;
	}
`;

StyledBar.defaultProps = defaultProps;

export default StyledBar;
