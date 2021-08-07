import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import Amount from '.';

describe('Container Simulator Amount', () => {
	it('should render without any props given', () => {
		const { container } = render(<Amount />);
		expect(screen.getByTestId('simulator-amount')).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should incorporate de given css', () => {
		render(
			<Amount
				customCss={{
					background: 'red'
				}}
			/>
		);
		expect(screen.getByTestId('simulator-amount')).toHaveStyleRule('background', 'red');
	});
});
