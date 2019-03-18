import styled from 'styled-components';
import defaultProps from '../../defaultProps';

const Separator = styled.hr`
	margin: 0;
	border: none;
	border-top: 1px solid ${props => props.theme.color.border.light};
	width: inherit;
	width: 0;
	min-width: ${props => props.theme.gutter.humongous};
`;

Separator.defaultProps = defaultProps;

export default Separator;
