import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from '~/helpers/testing.customRtl';

import InputCurrency from './';

describe('Input Text', () => {
	const initialValue = '0.00';
	const defaultPropValue = '250000';
	const defaultPropValueFormatted = '2,500.00';

	it('should display the default value of the currency field 0.00', () => {
		render(<InputCurrency id="test-id" name="test-name" />);
		expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument();
	});

	it('should allow only numbers', () => {
		render(<InputCurrency id="test-id" name="test-name" />);

		userEvent.type(screen.getByDisplayValue(initialValue), 'Not a number');
		expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument();

		userEvent.type(screen.getByDisplayValue(initialValue), 'some 456 number');
		expect(screen.getByDisplayValue('4.56')).toBeInTheDocument();
	});

	it('should display the value formatted as US currency', () => {
		render(<InputCurrency id="test-id" name="test-name" />);

		userEvent.type(screen.getByDisplayValue(initialValue), '1234567890');
		expect(screen.getByDisplayValue('12,345,678.90')).toBeInTheDocument();
	});

	it('should display the default value', () => {
		render(<InputCurrency id="test-id" name="test-name" defaultValue={defaultPropValue} />);
		expect(screen.getByDisplayValue(defaultPropValueFormatted)).toBeInTheDocument();
	});

	it('should respect the maximum decimal places by removing the frist number and keeping the last one', () => {
		render(<InputCurrency id="test-id" name="test-name" maxDecimalPlaces="5" />);
		expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument();

		userEvent.type(screen.getByDisplayValue(initialValue), '12345678910');
		expect(screen.getByDisplayValue('56,789.10')).toBeInTheDocument();
	});

	it('should reset the field if the minus value was entered', () => {
		render(<InputCurrency id="test-id" name="test-name" defaultValue={defaultPropValue} />);
		expect(screen.getByDisplayValue(defaultPropValueFormatted)).toBeInTheDocument();

		userEvent.type(screen.getByDisplayValue(defaultPropValueFormatted), '-');
		expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument();
	});
});
