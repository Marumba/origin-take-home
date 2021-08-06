import styled from '@emotion/styled';

export const OriginLogo = styled.img`
	display: block;

	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;

export const Link = styled.a`
	display: block;
`;
