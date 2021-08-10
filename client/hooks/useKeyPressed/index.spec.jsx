import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import useKeyPressed from './';

describe('Hook useKeyPressed', () => {
	const mockedA = jest.fn();
	const mockedB = jest.fn();
	const keysNActions = [
		{
			key: 'a',
			action: mockedA
		},
		{
			key: 'b',
			action: mockedB
		}
	];

	it('should execute an action if the key bounded was pressed and the requeriment prop was "true"', () => {
		renderHook(() => useKeyPressed(keysNActions, true));

		userEvent.keyboard('a');
		expect(mockedA).toBeCalled();

		userEvent.keyboard('b');
		expect(mockedB).toBeCalled();
	});
});
