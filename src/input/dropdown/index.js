import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from "downshift";
import DropDownList from './dropdown-list';

import { Wrapper } from './styles';
import Text from '../text';

class Dropdown extends Component {
	state = {
		intermittentValue: ''
	};

	handleChange = (item) => {
		const { input: { onChange } } = this.props;
		onChange(item.value);
	}

	render () {
		const {
			modifier,
			meta,
			options,
			disabled,
			placeholder,
			input: { value, onFocus, onBlur },
			label,
			size,
			icon,
			focussed,
			iconPosition,
			id,
			notFound,
			className,
			...other
		} = this.props;

		const { intermittentValue } = this.state;

		return (
			<Downshift
				className={className}
				itemToString={i => (!i || i.label == null ? "" : String(i.label))}
				selectedItem={value}
				onChange={this.handleChange}
				onSelect={() => { this.setState({ intermittentValue: '' })}}
			>
				{({
					getMenuProps,
					getItemProps,
					isOpen,
					selectedItem
				}) => (
					<div>
						<Wrapper className={className}>
							<Text
								id={id}
								fullWidth
								meta={meta}
								name={other.name}
								label={label}
								size={size}
								icon={icon}
								iconPosition={iconPosition}
								disabled={disabled}
								placeholder={value ? options.reduce((accumulator, option) =>
									option.value === value && option.label|| accumulator
								, '') : placeholder}
								input={{
									value: intermittentValue,
									onChange: (e) => {
										this.setState({ intermittentValue: e.target.value });
									},
									onFocus: () => {
										onFocus();
									},
									onBlur: () => {
										onBlur();
									}
								}}
							>
								<DropDownList
									notFound={notFound}
									isOpen={isOpen || meta.active}
									getListProps={getMenuProps}
									getItemProps={getItemProps}
									options={options}
									selectedValue={selectedItem}
									intermittentValue={intermittentValue}
									id={id}
								/>
							</Text>
						</Wrapper>
					</div>
				)}
			</Downshift>
		);
	}
}

Dropdown.defaultProps = {
	disabled: false,
	focussed: false,
	modifier: 'primary',
	placeholder: 'Select',
	size: 'medium',
	iconPosition: "right",
	input: {},
	label: null,
	notFound: 'No result',
	icon: 'angle-down',
	meta: {},
	className: null,
};

Dropdown.propTypes = {
	className: PropTypes.string,
	placeholder: PropTypes.string,
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	focussed: PropTypes.bool,
	modifier: PropTypes.string,
	input: PropTypes.objectOf(PropTypes.any),
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	notFound: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		label: PropTypes.string,
	})).isRequired,
	iconPosition: PropTypes.oneOf(['left', 'right']),
	meta: PropTypes.objectOf(PropTypes.any),
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	size: PropTypes.oneOf(['medium']),
};

export default Dropdown;
