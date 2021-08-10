import styled from '@emotion/styled';

export const ReachDate = styled.div`
	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;
