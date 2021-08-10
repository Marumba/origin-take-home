import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, Global } from '@emotion/react';

import theme, { globalStyle } from '~/themes';

import Main from './pages/Main';

function App() {
	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<Global styles={currentTheme => globalStyle(currentTheme)} />
				<Main />
			</ThemeProvider>
		</RecoilRoot>
	);
}

export default App;
