import React from 'react';
import PropTypes from 'prop-types';

import { StyledListItem, StyledSelectedListItem, StyledList, Spacer } from './styles';


const DropDownList = (props) => {
	const {
		isOpen,
		options,
		getListProps,
		getItemProps,
		selectedValue,
		intermittentValue,
		id,
		notFound,
		isCreatable,
		handleCreate
	} = props;

	const filteredOptions = options.filter(
		option => Object.values(option).join().toLowerCase().includes(intermittentValue.toLowerCase())
	);

	return (
		<StyledList hidden={!isOpen} {...getListProps()}>
			{filteredOptions.length === 0 &&
				<StyledListItem>
					{notFound}
				</StyledListItem>
			}
			{filteredOptions.map((item, index) => ((typeof selectedValue === 'string' ?
				selectedValue === item.value :
				selectedValue.includes(item.value)
			) ?
				<StyledSelectedListItem
					{...getItemProps({
						item,
						index,
						key: `multi-select-item-${id}-${item.value}`
					})}
				>
					{item.icon && (<Spacer>{item.icon}</Spacer>)}
					{item.label}
				</StyledSelectedListItem> :
				<StyledListItem
					{...getItemProps({
						item,
						index,
						key: `multi-select-item-${id}-${item.value}`
					})}
				>
					{item.icon && (<Spacer>{item.icon}</Spacer>)}
					{item.label}
				</StyledListItem>
			))}
			{intermittentValue && isCreatable &&
				<StyledListItem
					onClick={() => handleCreate(intermittentValue)}
				>
					Create: {intermittentValue}
				</StyledListItem>
			}
		</StyledList>
	);
}


DropDownList.defaultProps = {
	isOpen: false,
	options: [],
	selectedValue: '',
	notFound: 'Nothing found...',
	intermittentValue: null,
};

DropDownList.propTypes = {
	id: PropTypes.string.isRequired,
	notFound: PropTypes.string,
	isOpen: PropTypes.bool,
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		label: PropTypes.string,
	})),
	getListProps: PropTypes.func.isRequired,
	getItemProps: PropTypes.func.isRequired,
	selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	intermittentValue: PropTypes.string,
};

export default DropDownList;
