import styled from '@emotion/styled';

export const Amount = styled.div`
	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;
