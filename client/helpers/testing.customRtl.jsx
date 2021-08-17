import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { childrenType } from '~/types';

import theme from '~/themes';

function render(ui, { ...renderOptions } = {}) {
	function Wrapper({ children }) {
		return (
			<RecoilRoot>
				<MemoryRouter>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</MemoryRouter>
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
