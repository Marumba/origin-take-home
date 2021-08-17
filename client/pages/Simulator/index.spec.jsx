import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import Main from '.';

describe('Main', () => {
	it('should render the main page', () => {
		const { container } = render(<Main />);

		const mainDiv = screen.getByTestId(/mainPage/i);
		expect(mainDiv).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
