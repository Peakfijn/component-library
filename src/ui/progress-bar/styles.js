import styled from 'styled-components';

export const StyledHeader = styled.div`
	text-transform: none;
	text-decoration: none;
	font-family: inherit;
	font-size: ${props => props.theme.fontSize.medium};
	display: inline-flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-bottom: ${props => props.theme.gutter.small};
`;

export const StyledBar = styled.div`
	border-radius: ${props => props.theme.borderRadius.medium};
	background-color: ${props => props.theme.color.background.progressBar};
	height: 8px;
	width: 100%;
	position: relative;
`;

export const StyledProgress = styled.div`
	border-radius: ${props => props.theme.borderRadius.medium};
	background-color: ${props => props.color};
	height: 8px;
	width: ${props => props.progress};
`;

export const Slider = styled.div`
	cursor: pointer;
	margin: 0;
	background-color: ${props => props.theme.color.background.lightest};
	border: 1px solid ${props => props.theme.color.grey};
	border-radius: 16px;
	width: 16px;
	height: 16px;
	position: absolute;
	left: calc(${props => props.progress} - 10px);
	top: -5px;
`;
