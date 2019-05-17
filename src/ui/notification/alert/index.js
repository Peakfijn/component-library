import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import {AlertContainer, AlertDialog} from "./styles";

export const AlertContext = createContext({});

export class AlertContextProvider extends Component {

	constructor(props) {
		super(props);

		const {
			horizontal,
			vertical,
			stretch
		} = this.props;

		this.state = {
			closeTask: null,
			open: false,
			text: null,
			type: 'info',
			horizontal,
			vertical,
			stretch
		};
	}

	/**
	 * Sets the default position of the alert.
	 *
	 * @param {string} horizontal Where to place the alert horizontally. Valid values are 'flex-start', 'center'
	 *  and 'flex-end'.
	 * @param {string} vertical Where to place the alert vertically. Valid values are 'flex-start', 'center'
	 *  and 'flex-end'.
	 * @param {boolean} stretch Whether or not the alert should be stretched. Valid values are true and false.
	 * @return {void}
	 */
	position = (horizontal, vertical, stretch) => {
		this.setState({ horizontal, vertical, stretch });
	};

	/**
	 * Displays an alert with the given text, color for a specified amount of time.
	 *
	 * @param {string} text The text to display.
	 * @param {string} type The color to use. Must be specified in base-theme.js. Default is 'info'.
	 * @param {number} duration The amount of milliseconds the alert should stay. Null means it will not disappear by
	 *  itself.
	 * @return {void}
	 */
	show = (text, type = 'info', duration) => {
		const { closeTask } = this.state;
		if (closeTask) {
			clearTimeout(closeTask);
		}

		const taskId = duration && setTimeout(this.close, duration);
		this.setState({
			text,
			type,
			open: true,
			closeTask: duration ? taskId : null
		});
	};

	/**
	 * Closes the currently active alert. If there is no active alert, nothing happens.
	 *
	 * @return {void}
	 */
	close = () => {
		this.setState({ open: false, closeTask: null });
	};

	render() {
		const {
			open,
			text,
			type,
			horizontal,
			vertical,
			stretch
		} = this.state;

		const { children } = this.props;

		return (
			<AlertContext.Provider
				value={{
					showAlert: this.show,
					positionAlert: this.position,
					closeAlert: this.close
				}}
			>
				{children}
				{open ? (
					<AlertContainer
						horizontal={horizontal}
						vertical={vertical}
					>
						<AlertDialog
							stretch={stretch}
							type={type}
							onClick={this.close}
						>
							{text}
						</AlertDialog>
					</AlertContainer>
				) : null}
			</AlertContext.Provider>
		);
	}

}

AlertContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
	horizontal: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
	vertical: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
	stretch: PropTypes.bool
};

AlertContextProvider.defaultProps = {
	horizontal: 'flex-end',
	vertical: 'flex-start',
	stretch: false
};
