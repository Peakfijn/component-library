import styled from 'styled-components';
import defaultProps from '../../../default-props';

const StyledTabGroup = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	border-bottom: 1px solid ${props => props.theme.color.border.light};
`;

StyledTabGroup.defaultProps = defaultProps;

export default StyledTabGroup;
