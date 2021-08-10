import styled from '@emotion/styled';

export const ContentHolder = styled.div`
	padding: 24px;

	@media ${({ theme }) => theme.medias.desktop} {
		padding-left: 32px;
		padding-right: 32px;
	}
`;
