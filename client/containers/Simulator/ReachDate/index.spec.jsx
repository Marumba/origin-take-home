import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import ReachDate from '.';

describe('Container Simulator ReachDate', () => {
	it('should render', () => {
		const { container } = render(<ReachDate id="nededed" name="nededed" />);
		expect(screen.getByTestId('simulator-reach-date')).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should incorporate de given css', () => {
		render(
			<ReachDate
				id="nededed"
				name="nededed"
				customCss={{
					background: 'red'
				}}
			/>
		);
		expect(screen.getByTestId('simulator-reach-date')).toHaveStyleRule('background', 'red');
	});
});
