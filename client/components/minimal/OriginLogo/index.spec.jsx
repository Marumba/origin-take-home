import React from 'react';

import { render, screen } from '~/helpers/testing.customRtl';

import OriginLogo from '.';

describe('Component OriginLogo', () => {
	it('should display the default texts and the new ones passed down', () => {
		const { rerender } = render(<OriginLogo />);
		expect(screen.getByAltText(/origin logo/i)).toBeInTheDocument();

		rerender(<OriginLogo alt="new logo" />);
		expect(screen.getByAltText(/new logo/i)).toBeInTheDocument();

		rerender(<OriginLogo type="withLink" />);
		expect(screen.getByAltText(/origin logo/i)).toBeInTheDocument();
		expect(screen.getByTitle(/origin home/i)).toBeInTheDocument();

		rerender(<OriginLogo type="withLink" title="new title" />);
		expect(screen.getByAltText(/origin logo/i)).toBeInTheDocument();
		const linkBtn = screen.getByTitle(/new title/i);
		expect(linkBtn).toHaveAttribute('href', '/');

		rerender(<OriginLogo type="withLink" title="new title" href="google.com" />);
		expect(screen.getByAltText(/origin logo/i)).toBeInTheDocument();
		expect(linkBtn).toHaveAttribute('href', 'google.com');
	});
});
