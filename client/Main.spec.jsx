import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('Main', () => {
	it('should render the main div', () => {
		render(<Main />);
		const mainDiv = screen.getByTestId(/mainApp/i);
		expect(mainDiv).toBeInTheDocument();
	});
});
