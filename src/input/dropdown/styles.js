import styled from 'styled-components';
import Text from '../text';

export const Spacer = styled.div`
	padding-right: ${props => props.theme.gutter.medium};
`;

export const Wrapper = styled.div`
	position: relative;
	outline: none;
`;

export const StyledItemContainer = styled.div`
	width: calc(100% - 2px);
	padding: 0;
	margin: 0;
	border: 1px solid #d4d7db;
	margin-top: ${props => props.theme.gutter.small};
	border-radius: ${props => props.theme.borderRadius.small};
	background-color: ${props => props.theme.background.input};
	position: absolute;
	z-index: 999;
`;

export const StyledSelect = styled.button`
	padding: 12px;
	border: 1px solid ${props => props.theme.color.border.normal};
	border-radius: ${props => props.theme.borderRadius.medium};
	background: ${props => props.theme.color.background.input};
	width: 100%;
	color: ${props => props.theme.color.text.normal};
	stroke: ${props => props.theme.color.text.normal};
`;

export const StyledText = styled(Text)`
	padding: 12px;
	width: 100%;
`;

export const StyledList = styled.ul`
	width: calc(100% - 2px);
	padding: 0;
	margin: 0;
	border: 1px solid ${props => props.theme.color.border.normal};
	margin-top: ${props => props.theme.gutter.small};
	border-radius: ${props => props.theme.borderRadius.medium};
	background: ${props => props.theme.color.background.input};
	position: absolute;
	overflow: auto;
	z-index: 999;
`;

export const StyledListItem = styled.li`
	width: 100%;
	padding: ${props => props.theme.gutter.small} 12px;
	line-height: ${props => props.theme.gutter.medium};
	font-size: ${props => props.theme.fontSize.medium};
	text-align: left;
	display: inline-flex;
	white-space: nowrap;
	text-overflow: ellipsis;
	background: ${props => props.theme.color.background.input};
	border-bottom: 1px solid ${props => props.theme.color.border.normal};
	box-sizing: border-box;
	cursor: pointer;

	&:hover {
		color: ${props => props.theme.color.inverseText};
		background-color: ${props => props.theme.color.brand};
	}

	&:last-child {
		border-bottom: 0;
	}
`;

export const StyledSelectedListItem = styled(StyledListItem)`
	color: ${props => props.theme.color.inverseText};
	background-color: ${props => props.theme.color.brand};
`;
