import React from 'react';
import { css } from '@emotion/react';

import { render, screen } from '~/helpers/testing.customRtl';

import theme from '~/themes';

import Button from './';

describe('Component Button', () => {
	const testCss = () => css`
		background: red;
	`;
	it('should display the "over here" text', () => {
		render(<Button type="button">over here</Button>);
		expect(screen.getByText(/over here/)).toBeInTheDocument();
	});

	it('should incorporate de given css', () => {
		render(
			<Button type="button" customCss={testCss}>
				over here
			</Button>
		);
		expect(screen.getByText(/over here/)).toHaveStyleRule('background', 'red');
	});

	it('should incorporate CTA style', () => {
		render(
			<Button type="button" styleType="cta">
				over here
			</Button>
		);
		expect(screen.getByText(/over here/)).toHaveStyleRule('background', theme.colors.brandColorPrimary);
	});
});
