/* eslint-disable sonarjs/no-nested-template-literals */
import { css } from '@emotion/react';

const bodyStyles = theme => css`
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
	-webkit-overflow-scrolling: touch;

	*,
	*::after,
	*::before {
		box-sizing: border-box;
		box-sizing: inherit;
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
	}

	background: ${theme.colors.htmlBackground};

	font-family: ${theme.typography.families.primary};
	font-size: 10px;
	color: ${theme.colors.primaryText};

	margin: 0;
	padding: 0;

	a {
		text-decoration: none;
		cursor: pointer;
	}

	button {
		cursor: pointer;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: normal;
		margin: 0;
		padding: 0;
	}

	button,
	input,
	textarea,
	select {
		font-family: ${theme.typography.families.primary};
		background: none;
	}

	button,
	input,
	textarea {
		appearance: none;
		border-radius: 0;
		box-shadow: none;
	}

	strong,
	b,
	th {
		font-weight: bold;
	}

	em,
	i {
		font-style: italic;
	}

	strong,
	b,
	em,
	i,
	span,
	a {
		font-size: inherit;
		color: inherit;
	}

	b,
	em {
		font-weight: bold;
	}

	:focus:not(:focus-visible) {
		outline: none;
	}
`;

export const globalStyle = theme => css`
	${theme.typography.urls.map(url => `@import url(${url});`)}

	body {
		${bodyStyles(theme)}
	}
`;
