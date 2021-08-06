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

	background: ${theme.color.htmlBackground};

	font-family: ${theme.typography.family.primary};
	font-size: 10px;
	color: ${theme.color.primaryText};

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
		font-family: ${theme.typography.family.primary};
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

	ul,
	ol {
		list-style: none outside none;
	}

	sub,
	sup {
		font-size: 0.8em;
	}

	sub {
		bottom: -0.2em;
	}

	sup {
		top: -0.2em;
	}

	b,
	em {
		font-weight: bold;
	}

	hr {
		border: none;
		border-top: 1px solid ${theme.color.hr};
		clear: both;
		margin-bottom: 1.25rem;
	}

	:focus:not(:focus-visible) {
		outline: none;
	}
`;

export const globalStyle = theme => css`
	@import url(${theme.typography.url});

	body {
		${bodyStyles(theme)}
	}
`;
