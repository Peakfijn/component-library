
import styled from 'styled-components';
import defaultProps from '../../defaultProps';

const HiddenInput = styled.input`
	width: 1px;
	height: 1px;
	background: transparent;
	border: 0;
	margin: 0;
	position: absolute;
	opacity: 0;
`;

styled.defaultProps = defaultProps;

export default HiddenInput;
