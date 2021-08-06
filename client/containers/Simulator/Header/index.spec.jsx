import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import { ReactComponent as OriginLogo } from '~/assets/imgs/logos/logo-origin.svg';

import Header from '.';

describe('Container Simulator Header', () => {
	it('should render without any props given', () => {
		render(<Header />);
		expect(screen.getByTestId('simulator-header')).toBeInTheDocument();
	});

	it('should display the texts from given props, accordingly', () => {
		const { rerender } = render(<Header title="Title" />);
		expect(screen.getByText('Title')).toBeInTheDocument();

		rerender(<Header subtitle="Subtitle" />);
		expect(screen.getByText('Subtitle')).toBeInTheDocument();

		rerender(<Header subtitle="Subtitle" />);
		expect(screen.getByText('Subtitle')).toBeInTheDocument();

		rerender(<Header SvgComponent={OriginLogo} />);
		expect(screen.getByRole('img')).toBeInTheDocument();
	});

	it('should display all', () => {
		const { container } = render(<Header subtitle="Subtitle" title="Title" SvgComponent={OriginLogo} />);
		expect(screen.getByText('Title')).toBeInTheDocument();
		expect(screen.getByText('Subtitle')).toBeInTheDocument();
		expect(screen.getByRole('img')).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
