import { MONTHS } from '~/helpers/constants';
import { getYearMonthDatetime } from '~/helpers/utils';

const MIN_MONTH = 1;
const STEP_PER_ACTION = 1;

const { month: startingMonth, year: startingYear } = getYearMonthDatetime();

function pointersTrack({ monthPointer, year }, forward) {
	if (monthPointer >= 11 && forward) return { monthPointer: 0, year: year + 1 };
	if (monthPointer <= 0 && !forward) return { monthPointer: 11, year: year - 1 };
	return forward
		? { monthPointer: monthPointer + STEP_PER_ACTION, year }
		: { monthPointer: monthPointer - STEP_PER_ACTION, year };
}

function typeHandler(state, forward) {
	const { monthPointer, year } = pointersTrack(
		{ monthPointer: state.monthPointer, year: state.year },
		forward
	);

	return {
		month: MONTHS[monthPointer],
		monthPointer,
		monthsTotal: forward ? state.monthsTotal + STEP_PER_ACTION : state.monthsTotal - STEP_PER_ACTION,
		year
	};
}

export const REACH_DATE_ACTION_TYPES = {
	DECREMENT: 'back',
	INCREMENT: 'forward'
};

export const initialState = {
	month: MONTHS[startingMonth],
	monthPointer: startingMonth,
	monthsTotal: MIN_MONTH,
	year: startingYear
};

export function reducer(state, { type }) {
	const nextState = typeHandler(state, type === REACH_DATE_ACTION_TYPES.INCREMENT);
	if (nextState.monthsTotal < 1) return state;
	return nextState;
}
