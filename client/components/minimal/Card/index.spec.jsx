import React from 'react';
import { css } from '@emotion/react';

import { render, screen } from '~/helpers/testing.customRtl';

import Card from './';

describe('Component Card', () => {
	const testCss = () => css`
		background: red;
	`;
	it('should display the "over here" text', () => {
		render(<Card>over here</Card>);
		expect(screen.getByText(/over here/)).toBeInTheDocument();
	});

	it('should incorporate de given css', () => {
		render(<Card customCss={testCss}>over here</Card>);
		expect(screen.getByText(/over here/)).toHaveStyleRule('background', 'red');
	});
});
