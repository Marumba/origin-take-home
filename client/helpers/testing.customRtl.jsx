import React from 'react';
import { RecoilRoot } from 'recoil';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { childrenType } from '~/types';

import theme from '~/themes';

function render(ui, { ...renderOptions } = {}) {
	function Wrapper({ children }) {
		return (
			<RecoilRoot>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</RecoilRoot>
		);
	}
	Wrapper.propTypes = {
		children: childrenType.isRequired
	};
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
