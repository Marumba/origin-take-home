import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Home = styled.div``;

export const Title = styled.h1`
	${({ theme }) => theme.mixins.headingMedium}

	color: ${({ theme }) => theme.colors.blueGray900};
	font-size: 24px;
`;

export const Wrapper = styled.div`
	padding: 16px;
`;

export const smallCard = theme => css`
	margin: 16px 0;

	@medias ${theme.medias.desktop} {
	}
`;
