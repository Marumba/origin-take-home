import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import ResultExplained from '.';

describe('Container Simulator ResultExplained', () => {
	it('should render without any props given', () => {
		const { container } = render(<ResultExplained>Test</ResultExplained>);
		expect(screen.getByTestId('simulator-result-explained')).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should incorporate de given css', () => {
		render(
			<ResultExplained
				customCss={{
					background: 'red'
				}}
			>
				Test
			</ResultExplained>
		);
		expect(screen.getByTestId('simulator-result-explained')).toHaveStyleRule('background', 'red');
	});

	it('should display the input returned values', () => {
		render(
			<ResultExplained
				customCss={{
					background: 'red'
				}}
			>
				{({ amount, date, months }) => (
					<p>
						{amount} {date} {months}
					</p>
				)}
			</ResultExplained>
		);

		expect(screen.getByText('0.00')).toBeInTheDocument();
	});
});
