import styled from 'styled-components';
import Button from '../button';

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	background-color: ${props => props.theme.color.modalBackground};
	width: 100%;
	height: 100%;
`;

export const ModalContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const ModalContent = styled.div`
	border-radius: ${props => props.theme.borderRadius.medium};
	background: ${props => props.theme.color.background.input};
	width: 100%;
	${({ maxWidthBreakpoint, theme: { breakpoint } }) => Object.keys(breakpoint).map(
		key => `
			${maxWidthBreakpoint === key && `
			max-width: ${breakpoint[key]};
			` || ''}
		` || ''
	) || ''}
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${props => props.theme.color.border.light};
	padding: ${props => props.theme.gutter.medium};
	line-height: 2rem;
`;


export const ModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	border-top: 1px solid ${props => props.theme.color.border.light};
	padding: ${props => props.theme.gutter.small};
`;

export const ModalButton = styled(Button)`
	margin: ${props => props.theme.gutter.small};
`;
