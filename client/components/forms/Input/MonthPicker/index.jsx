import React, { forwardRef, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { customCssType, func, number, shape, string, stringOrNumber } from '~/types';

import { useKeyPressed } from '~/hooks';

import { Icons } from '~/helpers/icons';

import InputDefault from '../Default';

import { initialState, reducer, REACH_DATE_ACTION_TYPES } from './reducer';
import * as S from './style';

const KEY_TO_ACTION_TYPE = {
	ArrowLeft: REACH_DATE_ACTION_TYPES.DECREMENT,
	ArrowRight: REACH_DATE_ACTION_TYPES.INCREMENT
};

const InputMonthPicker = forwardRef(({ customCss, localValue, onChange, ...inputProps }, ref) => {
	const [state, dispatch] = useReducer(reducer, { ...initialState, ...localValue });
	const [isOnFocus, setIsOnFocus] = useState(false);
	const [emulateBtnPress, setEmulateBtnPress] = useState({ back: false, forward: false });
	const backBtnRef = useRef(null);
	const forwardBtnRef = useRef(null);

	const keyboardHandler = ({ key, type }) => {
		const actionName = KEY_TO_ACTION_TYPE[key];
		if (type === 'keyup') {
			dispatch({ type: actionName });
			return setEmulateBtnPress(oldState => ({ ...oldState, [actionName]: false }));
		}
		return setEmulateBtnPress(oldState => ({ ...oldState, [actionName]: true }));
	};

	useKeyPressed(
		[
			{ key: 'ArrowLeft', action: keyboardHandler },
			{ key: 'ArrowRight', action: keyboardHandler }
		],
		isOnFocus
	);

	const reachDate = useMemo(() => `${state.year}-${state.monthPointer + 1}`, [state]);

	useEffect(() => {
		onChange(reachDate, state.monthsTotal, state);
	}, [state, onChange, reachDate]);

	const handleBtnClick = type => dispatch({ type });
	const handleBtnFocus = () => setIsOnFocus(true);
	const handleBtnBlur = element => {
		const { relatedTarget } = element;
		if (relatedTarget !== backBtnRef.current && relatedTarget !== forwardBtnRef.current) setIsOnFocus(false);
	};

	const BackBtn = useCallback(
		() => (
			<S.BackBtn
				type="button"
				btnPressed={emulateBtnPress.back}
				ref={backBtnRef}
				onClick={() => handleBtnClick('back')}
				onBlur={handleBtnBlur}
				onFocus={handleBtnFocus}
			>
				<Icons.ArrowLeft />
			</S.BackBtn>
		),
		[emulateBtnPress.back]
	);
	const ForwardBtn = useCallback(
		() => (
			<S.ForwardBtn
				type="button"
				btnPressed={emulateBtnPress.forward}
				ref={forwardBtnRef}
				onClick={() => handleBtnClick('forward')}
				onBlur={handleBtnBlur}
				onFocus={handleBtnFocus}
			>
				<Icons.ArrowRight />
			</S.ForwardBtn>
		),
		[emulateBtnPress.forward]
	);

	return (
		<S.InputMonthPicker customCss={customCss}>
			<InputDefault
				append={ForwardBtn()}
				prepend={BackBtn()}
				customCss={S.inputDefaultCustomCss}
				readOnly
				ref={ref}
				value={reachDate}
				{...inputProps}
			>
				<S.MonthYearWrapper>
					<S.Month className="highEmphasis semibold">{state.month}</S.Month>
					<S.Year className="highEmphasis">{state.year}</S.Year>
				</S.MonthYearWrapper>
			</InputDefault>
		</S.InputMonthPicker>
	);
});

InputMonthPicker.propTypes = {
	customCss: customCssType,
	localValue: shape({
		month: string,
		monthPointer: number,
		monthsTotal: number,
		year: stringOrNumber,
		yearPointer: number
	}),
	onChange: func
};

InputMonthPicker.defaultProps = {
	customCss: undefined,
	localValue: {},
	onChange: f => f
};

export default React.memo(InputMonthPicker);
