import styled from '@emotion/styled';

export const Card = styled.div`
	background: ${({ theme }) => theme.colors.neutralWhite};
	border-radius: 8px;
	${({ theme }) => theme.mixins.boxShadow.level4};

	margin: 0 auto;
	padding: 30px 24px 40px 24px;
	max-width: 560px;
	box-sizing: border-box;

	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)}
`;
