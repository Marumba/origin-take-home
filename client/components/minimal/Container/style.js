import styled from '@emotion/styled';

export const Container = styled.div`
	display: block;
	width: 100%;

	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;
