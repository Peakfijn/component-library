import styled from 'styled-components';

const StyledTabGroup = styled.div`
	display: flex;
	justify-content: flex-start;
	border-bottom: 1px solid ${props => props.theme.color.border.light};
`;

export default StyledTabGroup;
