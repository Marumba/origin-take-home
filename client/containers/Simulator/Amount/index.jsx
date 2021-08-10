import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { string, customCssType } from '~/types';

import { Input } from '~/components/forms';

import * as S from './style';

const AMOUNT_ATOM_ID = 'simulator-amount';

export const amountState = atom({
	key: AMOUNT_ATOM_ID,
	default: {
		maskedValue: '0.00',
		value: 0
	},
	effects_UNSTABLE: [
		({ onSet, setSelf }) => {
			const storedAmount = localStorage.getItem(AMOUNT_ATOM_ID);
			if (storedAmount !== null) {
				setSelf(JSON.parse(storedAmount));
			}
			onSet(newAmount => {
				localStorage.setItem(AMOUNT_ATOM_ID, JSON.stringify(newAmount));
			});
		}
	]
});

function Amount({ customCss, ...inputProps }) {
	const [amount, setAmount] = useRecoilState(amountState);

	const handleChange = (e, value, maskedValue) => setAmount({ value, maskedValue });

	return (
		<S.Amount data-testid="simulator-amount" customCss={customCss}>
			<Input.Currency onChange={handleChange} value={amount.value} currency="USD" {...inputProps} />
		</S.Amount>
	);
}

Amount.propTypes = {
	customCss: customCssType,
	label: string
};

Amount.defaultProps = {
	customCss: undefined,
	label: ''
};

export default Amount;
