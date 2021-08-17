import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, Global } from '@emotion/react';

import Routes from './routes';

import theme, { globalStyle } from '~/themes';

function App() {
	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<Global styles={currentTheme => globalStyle(currentTheme)} />
				<Routes />
			</ThemeProvider>
		</RecoilRoot>
	);
}

export default App;
