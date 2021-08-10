import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from '~/helpers/testing.customRtl';

import InputCurrency from './';

describe('Input Text', () => {
	const defaultPropValue = '250000';
	const defaultPropValueFormatted = '2,500.00';

	it('should display the default value of the currency field 0.00', () => {
		render(<InputCurrency id="needed" name="needed" />);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should allow only numbers', () => {
		render(<InputCurrency id="needed" name="needed" />);

		userEvent.type(screen.getByRole('textbox'), 'Not a number');
		expect(screen.getByRole('textbox')).toBeInTheDocument();

		userEvent.type(screen.getByRole('textbox'), 'some 456 number');
		expect(screen.getByDisplayValue('4.56')).toBeInTheDocument();
	});

	it('should display the value formatted as US currency', () => {
		render(<InputCurrency id="needed" name="needed" />);

		userEvent.type(screen.getByRole('textbox'), '1234567890');
		expect(screen.getByDisplayValue('12,345,678.90')).toBeInTheDocument();
	});

	it('should display the default value', () => {
		render(<InputCurrency id="needed" name="needed" defaultValue={defaultPropValue} />);
		expect(screen.getByDisplayValue(defaultPropValueFormatted)).toBeInTheDocument();
	});

	it('should respect the maximum decimal places by removing the frist number and keeping the last one', () => {
		render(<InputCurrency id="needed" name="needed" maxDecimalPlaces="5" />);
		expect(screen.getByRole('textbox')).toBeInTheDocument();

		userEvent.type(screen.getByRole('textbox'), '12345678910');
		expect(screen.getByDisplayValue('56,789.10')).toBeInTheDocument();
	});

	it('should reset the field if the minus value was entered', () => {
		render(<InputCurrency id="needed" name="needed" defaultValue={defaultPropValue} />);
		expect(screen.getByDisplayValue(defaultPropValueFormatted)).toBeInTheDocument();

		userEvent.type(screen.getByDisplayValue(defaultPropValueFormatted), '-');
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should use blur and focus status if available', () => {
		const mockOnBlur = jest.fn();
		const mockOnFocus = jest.fn();
		render(
			<InputCurrency
				id="needed"
				name="needed"
				onBlur={mockOnBlur}
				onFocus={mockOnFocus}
				defaultValue={defaultPropValue}
			/>
		);

		userEvent.tab();
		expect(screen.getByRole('textbox')).toHaveFocus();
		userEvent.type(screen.getByRole('textbox'), '123');
		expect(mockOnFocus).toHaveBeenCalled();
		userEvent.click(document.body);
		expect(mockOnBlur).toHaveBeenCalled();
	});
});
