import styled from 'styled-components';
import defaultProps from '../../../defaultProps';

const StyledTabGroup = styled.div`
	display: flex;
	justify-content: flex-start;
	border-bottom: 1px solid ${props => props.theme.color.border.light};
`;

StyledTabGroup.defaultProps = defaultProps;

export default StyledTabGroup;
