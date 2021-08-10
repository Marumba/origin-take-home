import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Header = styled.header`
	background: #fff;

	display: flex;
	justify-content: left;
	align-items: center;

	padding: 12px;

	transition: padding ${({ theme }) => theme.animations.durations.fastest} ease-in;

	@media ${({ theme }) => theme.medias.desktop} {
		padding: 24px;
	}
`;

export const originLogo = theme => css`
	height: 24px;

	transition: height ${theme.animations.durations.fastest} ease-in;

	@media ${theme.medias.desktop} {
		height: 32px;
	}
`;
