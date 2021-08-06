import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import Header from '.';

describe('Component Header', () => {
	it('should render the Origin logo', () => {
		const { container } = render(<Header />);
		expect(screen.getByTitle(/origin home/i)).toBeInTheDocument();
		expect(screen.getByAltText(/origin logo/i)).toHaveStyleRule('height', '24px');

		expect(container.firstChild).toMatchSnapshot();
	});
});
