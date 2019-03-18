import React from 'react';
import PropTypes from 'prop-types';
import {
	ModalContainer,
	ModalContentContainer,
	ModalContent,
	ModalFooter,
} from './styles';

const Modal = props =>  {
	const { children, isOpen, toggleModal, footerContent, className } = props;

	const onBackGroundClick = (e) => {
		if (e.target === e.currentTarget) {
			toggleModal();
		}
	}

	return (
		isOpen ?
			<ModalContainer className={className}>
				<ModalContentContainer onClick={onBackGroundClick}>
					<ModalContent maxWidthBreakpoint="large">
						{children}
						{footerContent && (
							<ModalFooter>
								{footerContent}
							</ModalFooter>
						)}
					</ModalContent>
				</ModalContentContainer>
			</ModalContainer> : null
	)
}

Modal.defaultProps = {
	footerContent: null,
	className: null,
}

Modal.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	footerContent: PropTypes.node,
	isOpen: PropTypes.bool.isRequired,
	toggleModal: PropTypes.func.isRequired,
}

export default Modal;
