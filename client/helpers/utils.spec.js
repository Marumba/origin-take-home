import { CURRENCY_CONFIG } from './constants';

import * as fn from './utils';

describe('Utils', () => {
	describe('formatCurrency', () => {
		it('should format number to USD currency format', () => {
			const num = 123;
			expect(fn.formatCurrency(num, CURRENCY_CONFIG.USD.locale, CURRENCY_CONFIG.USD.options)).toBe('$123.00');
		});
		it('should not work without locale or value', () => {
			const num = 123;
			expect(fn.formatCurrency(num)).toBe('123');
			expect(fn.formatCurrency()).toBe('NaN');
		});
	});
	describe('sanitizeNumber', () => {
		it('should return a clean number from a string, if possible', () => {
			expect(fn.sanitizeNumber()).toBe(undefined);
			expect(fn.sanitizeNumber(123)).toBe(123);
			expect(fn.sanitizeNumber('ad123ed')).toBe(123);
		});
	});
	describe('fractionateValue', () => {
		it('should return the maximum fraction decimals from the number given', () => {
			expect(fn.fractionateValue()).toBe(undefined);
			expect(fn.fractionateValue(123)).toBe(123);
			expect(fn.fractionateValue(1.2312312, 2)).toBe(1.23);
			expect(fn.fractionateValue('1.2312312', 2)).toBe(123123.12);
		});
	});
	describe('getYearMonthDatetime', () => {
		it('should get the month, year and date time of both together', () => {
			const mockDate = new Date(12312321);
			const spyDate = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
			expect(fn.getYearMonthDatetime(123123)).toBe(false);
			expect(fn.getYearMonthDatetime()).toStrictEqual({ datetime: 12312321, month: 1, year: 1970 });
			spyDate.mockRestore();
		});
	});
});
