import React from 'react';
import { ThemeProvider, Global } from '@emotion/react';

import theme, { globalStyle } from '~/themes';

import Main from './pages/Main';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global styles={currentTheme => globalStyle(currentTheme)} />
			<Main />
		</ThemeProvider>
	);
}

export default App;
