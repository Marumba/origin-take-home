import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from '~/helpers/testing.customRtl';

import InputCurrency from './';

describe('Input Text', () => {
	const defaultPropValue = '250000';
	const defaultPropValueFormatted = '2,500.00';

	it('should display the default value of the currency field 0.00', () => {
		const { rerender } = render(<InputCurrency id="needed" name="needed" />);
		expect(screen.getByDisplayValue('0.00')).toBeInTheDocument();

		rerender(<InputCurrency id="needed" name="needed" maxFractionDigits="0" />);
		expect(screen.getByDisplayValue('0')).toBeInTheDocument();
	});

	it('should allow only numbers', () => {
		render(<InputCurrency id="needed" name="needed" />);

		userEvent.type(screen.getByRole('textbox'), 'Not a number');
		expect(screen.getByDisplayValue('0.00')).toBeInTheDocument();

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
		expect(screen.getByDisplayValue('0.00')).toBeInTheDocument();
	});

	it('should return value to onChange if a function were given', () => {
		const mockOnChange = jest.fn();
		render(<InputCurrency id="needed" name="needed" onChange={mockOnChange} />);

		userEvent.type(screen.getByRole('textbox'), '123');
		expect(mockOnChange).toHaveBeenNthCalledWith(
			1,
			expect.objectContaining({ _reactName: 'onChange' }),
			0.01,
			'0.01'
		);
		expect(mockOnChange).toHaveBeenNthCalledWith(
			2,
			expect.objectContaining({ _reactName: 'onChange' }),
			0.12,
			'0.12'
		);
		expect(mockOnChange).toHaveBeenNthCalledWith(
			3,
			expect.objectContaining({ _reactName: 'onChange' }),
			1.23,
			'1.23'
		);
	});

	it('should update values when blur or focus status handle were given', () => {
		expect(InputCurrency.defaultProps.onBlur).toBeDefined();
		const resultBlur = InputCurrency.defaultProps.onBlur('test blur');
		expect(resultBlur).toBe('test blur');

		expect(InputCurrency.defaultProps.onFocus).toBeDefined();
		const resultFocus = InputCurrency.defaultProps.onFocus('test focus');
		expect(resultFocus).toBe('test focus');

		const mockOnBlur = jest.fn();
		const mockOnFocus = jest.fn();
		render(<InputCurrency id="needed" name="needed" onBlur={mockOnBlur} onFocus={mockOnFocus} />);

		userEvent.type(screen.getByRole('textbox'), '123');
		expect(screen.getByDisplayValue('1.23')).toBeInTheDocument();
		expect(mockOnFocus).toHaveBeenCalledWith(expect.objectContaining({ _reactName: 'onFocus' }), 0, '0.00');

		userEvent.click(document.body);
		expect(mockOnBlur).toHaveBeenCalledWith(expect.objectContaining({ _reactName: 'onBlur' }), 1.23, '1.23');
	});
});
