import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const cta = theme => css`
	${theme.mixins.cta}

	&:hover {
		border: 2px solid #000;
		background-color: #000;
		box-shadow: 3px 3px 11px 0 rgb(1 58 117 / 33%);
		transform: translate(0, -5px);
	}
`;

const styleTypes = {
	cta
};

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	margin: 0 auto;

	transition: all ${({ theme }) => theme.animations.durations.fast} ease-in-out;

	${({ styleType, theme }) => styleType && styleTypes[styleType](theme)}
	${({ customCss, theme }) => (typeof customCss === 'function' ? customCss(theme) : customCss)};
`;
