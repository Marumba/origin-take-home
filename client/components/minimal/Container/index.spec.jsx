import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import Container from './';

describe('Component Container', () => {
	it('should display the "over here" text', () => {
		render(<Container>over here</Container>);
		expect(screen.getByText(/over here/)).toBeInTheDocument();
	});
});
