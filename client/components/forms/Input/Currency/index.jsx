import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { fractionateValue, formatCurrency } from '~/helpers/utils';
import { CURRENCY_CONFIG } from '~/helpers/constants';
import { CurrencyIcons } from '~/helpers/icons';

import InputDefault from '../Default';

const propTypes = {
	currency: PropTypes.string,
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onKeyPress: PropTypes.func,
	maxDecimalPlaces: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	value: PropTypes.number
};

const defaultProps = {
	currency: 'USD',
	defaultValue: undefined,
	onBlur: () => null,
	onChange: () => null,
	onFocus: () => null,
	onKeyPress: () => null,
	maxDecimalPlaces: 9,
	value: 0
};

const InputCurrency = React.forwardRef(
	(
		{ currency, defaultValue, onBlur, onChange, onFocus, onKeyPress, maxDecimalPlaces, value, ...inputProps },
		ref
	) => {
		const [maskedValue, setMaskedValue] = useState('0');
		const [config] = useState(CURRENCY_CONFIG[currency]);

		const calculateValues = useCallback(
			inputValue => {
				const {
					locale,
					options: { maximumFractionDigits, minimumFractionDigits }
				} = config;
				const normalizedValue = fractionateValue(inputValue, maximumFractionDigits);
				const normalizecMaskedValue = formatCurrency(normalizedValue, locale, {
					maximumFractionDigits,
					minimumFractionDigits
				});
				return [normalizedValue, normalizecMaskedValue];
			},
			[config]
		);

		const popFirstKeepLastNum = useCallback(
			inputValue => inputValue.toString().slice(1).replace(/^\D+/, ''),
			[]
		);

		const updateValues = useCallback(
			newValue => {
				const [calculatedValue, calculatedMaskedValue] = calculateValues(newValue);
				const lengthWithoutDigits = calculatedValue.toFixed(0).length;

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
		}, [value, defaultValue, config, calculateValues]);

		return (
			<InputDefault
				{...inputProps}
				onBlur={handleBlur}
				onFocus={handleFocus}
				onChange={handleChange}
				onKeyUp={handleKeyUp}
				ref={ref}
				SvgComponent={CurrencyIcons[currency]}
				value={maskedValue}
			/>
		);
	}
);

InputCurrency.propTypes = propTypes;
InputCurrency.defaultProps = defaultProps;

export default InputCurrency;
