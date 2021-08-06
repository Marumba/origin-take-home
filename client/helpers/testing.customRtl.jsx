import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import theme from '~/themes';

function render(ui, { ...renderOptions } = {}) {
	function Wrapper({ children }) {
		return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
	}
	Wrapper.propTypes = {
		children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
	};
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
