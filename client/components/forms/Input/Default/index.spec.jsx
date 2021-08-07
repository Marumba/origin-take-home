import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from '~/helpers/testing.customRtl';

import InputDefault from './';

describe('Input Text', () => {
	it('should render with the required prop values', () => {
		const { container } = render(<InputDefault id="ad" name="test" label="test" />);
		expect(screen.getByLabelText('test')).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should display the label prop value', () => {
		render(<InputDefault id="ad" name="test" label="Test" />);
		expect(screen.getByLabelText('Test')).toBeInTheDocument();
	});

	it('should be a controlled input if prop onChange is available', () => {
		render(<InputDefault id="ad" name="test" label="Test" value="controlled" onChange={() => null} />);

		userEvent.type(screen.getByRole('textbox'), 'No changes');

		expect(screen.queryByDisplayValue('No changes')).toBeNull();
		expect(screen.getByDisplayValue('controlled')).toBeInTheDocument();
	});

	it('should be an uncontrolled input by default', () => {
		render(<InputDefault id="ad" name="test" label="Test" />);

		userEvent.type(screen.getByRole('textbox'), 'New Value');

		expect(screen.getByDisplayValue('New Value')).toBeInTheDocument();
	});
});
