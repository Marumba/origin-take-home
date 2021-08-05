import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Global } from '@emotion/react';

import theme, { globalStyle } from '~/themes';

import Main from './Main';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Global styles={currentTheme => globalStyle(currentTheme)} />
		<Main />
	</ThemeProvider>,
	document.getElementById('app')
);
