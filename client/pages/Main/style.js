import styled from '@emotion/styled';

export const MainContainer = styled.div`
	${({ theme }) => theme.mixins.pageContainer};
`;

export const MainTitle = styled.h1`
	${({ theme }) => theme.mixins.subtitle}

	margin: 32px 0 24px;
`;
