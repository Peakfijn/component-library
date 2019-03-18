import styled from 'styled-components';
import validationStyles from '../styles/validation';
import stateStyles from '../styles/state';
import sizeStyles from '../styles/size';
import iconAdjustmentStyles from '../styles/icon-adjustment';
import defaultProps from '../../default-props';

export const StyledHeader = styled.h4`
	margin-bottom: ${props => props.theme.gutter.small};
	color: ${props => props.theme.color.text.normal};
`;

export const StyledSelect = styled.select`
	box-sizing: border-box;
	outline: none;
	border: 1px solid ${props => props.theme.color.border.normal};
	border-radius: ${props => props.theme.borderRadius.medium};
	background: ${props => props.theme.color.background.input};
	width: 100%;
	color: ${props => props.theme.color.text.normal};
	stroke: ${props => props.theme.color.text.normal};
	appearance: none;

	/* States */
	${stateStyles}

	/* Modifier: size */
	${sizeStyles}

	${iconAdjustmentStyles}
	${validationStyles}
`;

StyledHeader.defaultProps = defaultProps;
StyledSelect.defaultProps = defaultProps;
