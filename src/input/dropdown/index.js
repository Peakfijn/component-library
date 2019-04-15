import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from "downshift";
import DropDownList from './dropdown-list';

import { Wrapper } from './styles';
import Text from '../text';

class Dropdown extends Component {
	state = {
		intermittentValue: '',
		isOpen: false,
	};

	handleChange = (item) => {
		const { field, form } = this.props;
		form.setFieldValue(field.name, item.value);
		field.onBlur();
		this.setState({ isOpen: false });
	}

	render () {
		const {
			modifier,
			meta,
			options,
			disabled,
			placeholder,
			label,
			size,
			icon,
			focussed,
			iconPosition,
			id,
			notFound,
			className,
			field,
			...other
		} = this.props;

		const { intermittentValue, isOpen } = this.state;
		return (
			<Downshift
				className={className}
				itemToString={i => (!i || i.label == null ? "" : String(i.label))}
				selectedItem={field.value}
				onChange={this.handleChange}
				onSelect={() => {
					this.setState({ intermittentValue: '', isOpen: false })
					field.onBlur();
				}}
			>
				{({
					getMenuProps,
					getItemProps,
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
								placeholder={field.value ? options.reduce((accumulator, option) =>
									option.value === field.value && option.label|| accumulator
								, '') : placeholder}
								input={{
									value: intermittentValue,
									onChange: (e) => {
										this.setState({ intermittentValue: e.target.value });
									},
									onFocus: () => {
										this.setState({ isOpen: true });
									},
									onBlur: () => {
										field.onBlur();
										this.setState({ isOpen: false });
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
	field: {},
	form: {},
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
	field: PropTypes.objectOf(PropTypes.any),
	form: PropTypes.objectOf(PropTypes.any),
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
