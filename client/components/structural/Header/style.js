import styled from '@emotion/styled';
import { css } from '@emotion/react';

const transitionTime = '200ms';

export const Header = styled.header`
	background: #fff;

	display: flex;
	justify-content: left;
	align-items: center;

	padding: 12px;

	transition: padding ${transitionTime} ease-in;

	@media ${({ theme }) => theme.medias.desktop} {
		padding: 24px;
	}
`;

export const originLogo = theme => css`
	height: 24px;

	transition: height ${transitionTime} ease-in;

	@media ${theme.medias.desktop} {
		height: 32px;
	}
`;
