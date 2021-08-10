import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { string, func, stringOrNumber } from '~/types';

import { fractionateValue, formatCurrency } from '~/helpers/utils';
import { CURRENCY_CONFIG } from '~/helpers/constants';
import { CurrencyIcons } from '~/helpers/icons';

import InputDefault from '../Default';

const propTypes = {
	currency: string,
	defaultValue: stringOrNumber,
	maxDecimalPlaces: stringOrNumber,
	maxFractionDigits: stringOrNumber,
	onBlur: func,
	onChange: func,
	onFocus: func,
	onKeyPress: func,
	value: stringOrNumber
};

const defaultProps = {
	currency: 'USD',
	defaultValue: undefined,
	maxDecimalPlaces: 11,
	maxFractionDigits: undefined,
	onBlur: f => f,
	onChange: f => f,
	onFocus: f => f,
	onKeyPress: f => f,
	value: 0
};

const InputCurrency = React.forwardRef(
	(
		{
			currency,
			defaultValue,
			onBlur,
			onChange,
			onFocus,
			onKeyPress,
			maxDecimalPlaces,
			maxFractionDigits,
			value,
			...inputProps
		},
		ref
	) => {
		const [maskedValue, setMaskedValue] = useState('0');

		const finalConfig = useMemo(() => {
			const {
				options: { minimumFractionDigits, maximumFractionDigits }
			} = CURRENCY_CONFIG[currency];
			return {
				...CURRENCY_CONFIG[currency],
				options: {
					...CURRENCY_CONFIG[currency].options,
					minimumFractionDigits: maxFractionDigits >= 0 ? maxFractionDigits : minimumFractionDigits,
					maximumFractionDigits: maxFractionDigits >= 0 ? maxFractionDigits : maximumFractionDigits
				}
			};
		}, [currency, maxFractionDigits]);

		const calculateValues = useCallback(
			inputValue => {
				const {
					locale,
					options: { maximumFractionDigits, minimumFractionDigits }
				} = finalConfig;
				const normalizedValue = fractionateValue(inputValue, maximumFractionDigits);
				const normalizecMaskedValue = formatCurrency(normalizedValue, locale, {
					maximumFractionDigits,
					minimumFractionDigits
				});
				return [normalizedValue, normalizecMaskedValue];
			},
			[finalConfig]
		);

		const popFirstKeepLastNum = useCallback(
			inputValue => inputValue.toString().slice(1).replace(/^\D+/, ''),
			[]
		);

		const updateValues = useCallback(
			newValue => {
				const [calculatedValue, calculatedMaskedValue] = calculateValues(newValue);
				const lengthWithoutDigits = (calculatedValue && calculatedValue.toFixed(0).length) || 0;

				if (!maxDecimalPlaces || lengthWithoutDigits <= maxDecimalPlaces) {
					setMaskedValue(calculatedMaskedValue);

					return [calculatedValue, calculatedMaskedValue];
				}
				setMaskedValue(popFirstKeepLastNum(calculatedMaskedValue));

				return [popFirstKeepLastNum(calculatedValue), popFirstKeepLastNum(calculatedMaskedValue)];
			},
			[calculateValues, maxDecimalPlaces, popFirstKeepLastNum]
		);

		const handleBlur = useCallback(
			event => {
				const [newValue, newMaskedValue] = updateValues(event.target.value);

				if (newMaskedValue) {
					onBlur(event, newValue, newMaskedValue);
				}
			},
			[updateValues, onBlur]
		);

		const handleFocus = useCallback(
			event => {
				const [newValue, newMaskedValue] = updateValues(event.target.value);

				if (newMaskedValue) {
					onFocus(event, newValue, newMaskedValue);
				}
			},
			[onFocus, updateValues]
		);

		const handleChange = useCallback(
			event => {
				event.preventDefault();
				const [newValue, newMaskedValue] = updateValues(event.target.value);

				if (newMaskedValue) {
					onChange(event, newValue, newMaskedValue);
				}
			},
			[onChange, updateValues]
		);

		const handleKeyUp = useCallback(event => onKeyPress(event, event.key, event.keyCode), [onKeyPress]);

		useEffect(() => {
			const currentValue = value || defaultValue || 0;
			const [, finalMaskedValue] = calculateValues(currentValue);

			setMaskedValue(finalMaskedValue);
		}, [value, defaultValue, calculateValues]);

		return (
			<InputDefault
				onBlur={handleBlur}
				onFocus={handleFocus}
				onChange={handleChange}
				onKeyUp={handleKeyUp}
				ref={ref}
				prepend={React.createElement(CurrencyIcons[currency])}
				value={maskedValue}
				{...inputProps}
			/>
		);
	}
);

InputCurrency.propTypes = propTypes;
InputCurrency.defaultProps = defaultProps;

export default InputCurrency;
