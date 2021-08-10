import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '~/helpers/testing.customRtl';

import InputMonthPicker from './';

const todayMonth = 1;
const initialDate = '2021-2';
const initialYear = 2021;
const initialState = {
	month: 'February',
	monthPointer: 1,
	monthsTotal: 1,
	year: initialYear
};

jest.mock('~/helpers/utils', () => ({
	getYearMonthDatetime: jest.fn().mockImplementationOnce(() => ({
		month: todayMonth,
		year: initialYear,
		datetime: 12312321
	}))
}));

describe('Input Month Picker', () => {
	const marchState = {
		month: 'March',
		monthPointer: 2,
		monthsTotal: 2,
		year: 2021
	};
	const aprilState = {
		month: 'April',
		monthPointer: 3,
		monthsTotal: 3,
		year: 2021
	};
	const onChangeMock = jest.fn();

	it('should render', () => {
		const { container } = render(<InputMonthPicker id="testeId" name="testeId" />);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});

	describe('Changing dates', () => {
		it('should allow only future months', () => {
			render(<InputMonthPicker id="testeId" name="testeId" onChange={onChangeMock} />);
			expect(onChangeMock).toHaveBeenCalledWith(initialDate, initialState.monthsTotal, initialState);
			const leftArrow = screen.queryAllByRole('button')[0];

			userEvent.click(leftArrow);
			expect(onChangeMock).toHaveBeenCalledWith(initialDate, initialState.monthsTotal, initialState);
		});

		it('should go up and down, month by month, when clicking on the arrows', () => {
			render(<InputMonthPicker id="testeId" name="testeId" onChange={onChangeMock} />);
			const [leftArrow, rightArrow] = screen.getAllByRole('button');

			userEvent.click(rightArrow);
			expect(onChangeMock).toHaveBeenCalledWith('2021-3', 2, marchState);

			userEvent.click(rightArrow);
			expect(onChangeMock).toHaveBeenCalledWith('2021-4', 3, aprilState);

			userEvent.click(leftArrow);
			expect(onChangeMock).toHaveBeenCalledWith('2021-3', 2, marchState);
		});
		it('should have the same behavior of the arrow buttons when navigating with the keyboard arrows', () => {
			render(<InputMonthPicker id="testeId" name="testeId" onChange={onChangeMock} />);
			const [leftArrow, rightArrow] = screen.getAllByRole('button');

			userEvent.tab();
			expect(leftArrow).toHaveFocus();

			userEvent.tab();
			userEvent.tab();
			expect(rightArrow).toHaveFocus();
			fireEvent.keyUp(rightArrow, { key: 'ArrowRight', which: 38, keyCode: 38 });
			fireEvent.keyDown(rightArrow, { key: 'ArrowRight', which: 38, keyCode: 38 });
			expect(rightArrow).toHaveStyleRule('transform', 'rotate(180deg) scale(1.4)', { target: 'svg' });
			expect(onChangeMock).toHaveBeenCalledWith('2021-3', 2, marchState);

			fireEvent.keyPress(rightArrow, { key: 'ArrowRight', which: 38, keyCode: 38 });
			expect(onChangeMock).toHaveBeenCalledWith('2021-4', 3, aprilState);

			userEvent.tab();
			userEvent.tab();
			expect(leftArrow).toHaveFocus();
			fireEvent.keyUp(leftArrow, { key: 'ArrowLeft', which: 37, keyCode: 37 });
			expect(onChangeMock).toHaveBeenCalledWith('2021-3', 2, marchState);
			expect(leftArrow).toHaveStyleRule('transform', 'scale(1.4)', { target: 'svg' });
		});
	});

	// describe('')
});
