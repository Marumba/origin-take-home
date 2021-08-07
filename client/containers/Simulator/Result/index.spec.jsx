import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import Result from '.';

describe('Container Simulator Result', () => {
	it('should render without any props given', () => {
		const { container } = render(<Result />);
		expect(screen.getByTestId('simulator-result')).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should display the texts from given title props', () => {
		render(<Result title="Title" />);
		expect(screen.getByText('Title')).toBeInTheDocument();
	});

	it('should incorporate de given css', () => {
		render(
			<Result
				customCss={{
					background: 'red'
				}}
			/>
		);
		expect(screen.getByTestId('simulator-result')).toHaveStyleRule('background', 'red');
	});
});
