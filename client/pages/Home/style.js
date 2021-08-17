import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Home = styled.div``;

export const Title = styled.h1`
	${({ theme }) => theme.mixins.headingMedium}

	color: ${({ theme }) => theme.colors.blueGray900};
	font-size: 24px;

	padding: 24px 0 8px;

	@media ${({ theme }) => theme.medias.desktop} {
		font-size: 32px;

		padding: 40px 0 24px 0;
	}
`;

export const Wrapper = styled.div`
	@media ${({ theme }) => theme.medias.desktop} {
		display: flex;
		align-items: center;
		justify-content: start;
		flex-wrap: wrap;
		gap: 16px;
	}
`;

export const smallCard = theme => css`
	margin: 16px 0;

	@media ${theme.medias.desktop} {
		width: 272px;
		height: 248px;

		margin: 0;
	}
`;

export const customContainerCss = theme => css`
	@media ${theme.medias.desktop} {
		max-width: 1140px;
		margin: 0 auto;
	}
`;
