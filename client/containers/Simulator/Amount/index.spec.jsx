import React from 'react';
import { useRecoilValue, RecoilRoot } from 'recoil';
import { renderHook } from '@testing-library/react-hooks';

import { render, screen } from '~/helpers/testing.customRtl';

import Amount, { amountState } from '.';

describe('Container Simulator Amount', () => {
	it('should render without any props given', () => {
		const { container } = render(<Amount id="needed" name="needed" />);
		expect(screen.getByTestId('simulator-amount')).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should incorporate de given css', () => {
		render(
			<Amount
				id="needed"
				name="needed"
				customCss={{
					background: 'red'
				}}
			/>
		);
		expect(screen.getByTestId('simulator-amount')).toHaveStyleRule('background', 'red');
	});

	describe('Atom', () => {
		it('should return the default value', () => {
			const { result } = renderHook(() => useRecoilValue(amountState), {
				wrapper: RecoilRoot
			});

			expect(result.current).toEqual({ maskedValue: '0.00', value: 0 });
		});
	});
});
