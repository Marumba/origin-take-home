import React from 'react';

import { render } from '~/helpers/testing.customRtl';

import Home from './';

describe('Page Home', () => {
	it('sohuld render', () => {
		render(<Home />);
	});
});
