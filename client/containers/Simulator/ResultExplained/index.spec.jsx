import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import ResultExplained from '.';

describe('Container Simulator ResultExplained', () => {
	it('should render without any props given', () => {
		const { container } = render(<ResultExplained />);
		expect(screen.getByTestId('simulator-result-explained')).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should incorporate de given css', () => {
		render(
			<ResultExplained
				customCss={{
					background: 'red'
				}}
			/>
		);
		expect(screen.getByTestId('simulator-result-explained')).toHaveStyleRule('background', 'red');
	});
});
