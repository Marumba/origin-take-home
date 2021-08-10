/* eslint-disable */
import React, { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import { string, customCssType } from '~/types';

import { Input } from '~/components/forms';

import { MONTHS } from '~/helpers/constants';
import { getYearMonthDatetime } from '~/helpers/utils';

import * as S from './style';

const REACH_DATE_ATOM_ID = 'simulator-reach-date';

export const reachDateState = atom({
	key: REACH_DATE_ATOM_ID,
	default: {},
	effects_UNSTABLE: [
		({ onSet, setSelf }) => {
			const storedReachDate = localStorage.getItem(REACH_DATE_ATOM_ID);
			if (storedReachDate !== null) {
				const localAmount = JSON.parse(storedReachDate);
				const { datetime } = getYearMonthDatetime();
				if (datetime < new Date(localAmount.date)) setSelf(JSON.parse(storedReachDate));
			}
			onSet(newReachDate => {
				localStorage.setItem(REACH_DATE_ATOM_ID, JSON.stringify(newReachDate));
			});
		}
	]
});
function ReachDate({ customCss, ...inputProps }) {
	const [reachDate, setReachDate] = useRecoilState(reachDateState);

	const handleChange = useCallback(
		(date, months, state) => {
			const year = date.slice(0, 4);
			const month = +date.slice(5) - 1;
			const namedMonth = MONTHS[month];
			setReachDate({ date: `${namedMonth} ${year}`, months, state });
		},
		[setReachDate]
	);

	return (
		<S.ReachDate data-testid="simulator-reach-date" customCss={customCss}>
			<Input.MonthPicker hidden onChange={handleChange} localValue={reachDate.state} {...inputProps} />
		</S.ReachDate>
	);
}

ReachDate.propTypes = {
	customCss: customCssType,
	label: string
};

ReachDate.defaultProps = {
	customCss: undefined,
	label: ''
};

export default ReachDate;
