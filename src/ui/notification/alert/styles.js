import styled from 'styled-components';
import NotificationBar from '../bar';

export const AlertDialog = styled(NotificationBar)`
	width: ${props => props.stretch ? '100%' : 'auto'};
	margin: ${props => props.theme.gutter.small};
	z-index: ${props => props.theme.zIndexGroups.notifications};
	pointer-events: auto;
`;

export const AlertContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	${({ vertical }) => vertical && `align-items: ${vertical}` || ''}
	${({ horizontal }) => horizontal && `justify-content: ${horizontal}` || ''}
	margin:
		${props => props.theme.gutter.small}
		${props => props.theme.gutter.small} * 2
		${props => props.theme.gutter.small} * 2
		${props => props.theme.gutter.small};
	pointer-events: none;
`;
