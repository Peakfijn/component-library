import styled from 'styled-components';
import defaultProps from '../../../default-props';

const StyledTab = styled.div`
	${({ horizontal, theme: { gutter } }) => horizontal && `
		margin-left: ${gutter[`${horizontal}`]};
		margin-right: ${gutter[`${horizontal}`]};
	` || ''}
	cursor: pointer;
	padding: ${props => props.theme.gutter.large} 0;
	color: ${props => props.theme.color.text.light};

	${({ isActive, theme }) => isActive && `
		box-shadow: 0 1px 0 0 ${theme.color.brand};
		color: ${theme.color.text.normal};
	` || ''}

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		color: ${props => props.theme.color.text.normal};
	}
`;

StyledTab.defaultProps = defaultProps;

export default StyledTab;
