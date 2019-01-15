import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from "downshift";
import DropDownList from './dropdown-list';
import { StyledText, Wrapper } from './styles';

class MultiSelect extends Component {
	state = {
		intermittentValue: '',
		additionalOptions: [],
	};

	handleFocus = () => {
		const { input: { onFocus } } = this.props;
		onFocus();
	};

	handleBlur = (callBack) => {
		const { input: { onBlur }, isCreatable } = this.props;

		if (!isCreatable) {
			this.setState({ intermittentValue: '' });
		}
		onBlur();
		setTimeout(callBack, 300);
	};

	handleCreate = (newValue) => {
		const { additionalOptions } = this.state;
		this.handleAddSelectedItem(newValue);
		this.setState({
			intermittentValue: '',
			additionalOptions: [
				...additionalOptions,
				{
					value: newValue,
					label: newValue,
					name: newValue,
					id: `dynamic-${newValue}`
				}
			]
		});
	}

	handleChange = (selectedItem) => {
		const {
			input: { value },
		} = this.props;
		if (value.includes(selectedItem.value)) {
			this.handleRemoveItem(selectedItem.value);
		} else {
			this.handleAddSelectedItem(selectedItem.value);
		}
	}

	handleRemoveItem = (item) => {
		const {
			input: { value, onChange },
		} = this.props;
		onChange(
			value.filter(i => i !== item),
		);
	}

	handleAddSelectedItem(item) {
		const {
			input: { value, onChange },
		} = this.props;
		onChange(
			[...value, item]
		);
	}

	render () {
		const {
			modifier,
			meta,
			options,
			disabled,
			placeholder,
			input: { value },
			label,
			size,
			icon,
			iconPosition,
			id,
			notFound,
			isCreatable,
			...other
		} = this.props;
		const { additionalOptions, intermittentValue } = this.state;
		const allOptions = [
			...options,
			...additionalOptions,
		];
		return (
			<Downshift
				itemToString={i => (!i || i.label == null ? "" : String(i.label))}
				selectedItem={value}
				onChange={this.handleChange}
			>
				{({
					getMenuProps,
					getItemProps,
					isOpen,
					openMenu,
					closeMenu,
					selectedItem
				}) => (
					<div>
						<Wrapper>
							<StyledText
								id={id}
								fullWidth
								meta={meta}
								name={other.name}
								label={label}
								size={size}
								icon={icon}
								iconPosition={iconPosition}
								disabled={disabled}
								placeholder={value && value.length > 0 ? allOptions.reduce((accumulator, option) =>
									value.includes(option.value) && [
										option.label,
										...accumulator
									] || accumulator
								, []).join(', ') : placeholder}
								input={{
									value: intermittentValue,
									onChange: (e) => {
										openMenu();
										this.setState({ intermittentValue: e.target.value });
									},
									onFocus: () => {
										openMenu();
										this.handleFocus();
									},
									onBlur: () => {
										this.handleBlur(closeMenu);
									}
								}}
							>
								<DropDownList
									notFound={notFound}
									isOpen={isOpen || meta.active}
									getListProps={getMenuProps}
									getItemProps={getItemProps}
									options={allOptions}
									selectedValue={selectedItem}
									intermittentValue={intermittentValue}
									id={id}
									handleCreate={(newValue) => {
										this.handleCreate(newValue);
										openMenu();
									}}
									isCreatable={isCreatable}
								/>
							</StyledText>
						</Wrapper>
					</div>
				)}
			</Downshift>
		);
	}
}

MultiSelect.defaultProps = {
	disabled: false,
	focussed: false,
	isCreatable: false,
	modifier: 'primary',
	placeholder: 'Select',
	size: 'medium',
	iconPosition: "right",
	input: {},
	label: null,
	notFound: 'No result',
	icon: 'angle-down',
	meta: {},
	options: [],
};

MultiSelect.propTypes = {
	placeholder: PropTypes.string,
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	isCreatable: PropTypes.bool,
	focussed: PropTypes.bool,
	modifier: PropTypes.string,
	input: PropTypes.objectOf(PropTypes.any),
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	notFound: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		label: PropTypes.string,
		id: PropTypes.string,
	})),
	iconPosition: PropTypes.oneOf(['left', 'right']),
	meta: PropTypes.objectOf(PropTypes.any),
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	size: PropTypes.oneOf(['medium']),
};

export default MultiSelect;
