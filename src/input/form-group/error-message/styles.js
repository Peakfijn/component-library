import styled from 'styled-components';

const StyledMessage = styled.p`
	margin-top: ${props => props.theme.gutter.small};
	margin-bottom: ${props => props.theme.gutter.small};
	line-height: 6px;
	font-size: 12px;

	${({ isValidate, theme }) => !isValidate && `
		color: ${theme.color.danger};
	` || ''}
`;

export default StyledMessage;
