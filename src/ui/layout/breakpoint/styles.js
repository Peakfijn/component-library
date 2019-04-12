import styled from 'styled-components';
import Wrapper from '../wrapper';
import defaultProps from '../../../default-props';

const StyledBreakpointWrapper = styled(Wrapper)`
	${({ type, breakpoint, theme }) => type && breakpoint && `
		@media (${type}-width: ${theme.breakpoint[breakpoint]}) {
			display: none;
		}
	`}
`;

StyledBreakpointWrapper.defaultProps = defaultProps;

export default StyledBreakpointWrapper;
