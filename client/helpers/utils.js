export function formatCurrency(value = 0, locale, options) {
	const formatter = new Intl.NumberFormat(locale, options);
	return formatter.format(value);
}

export function sanitizeNumber(number, uncoveredCharacter = '') {
	if (typeof number === 'number' || !number) return number;
	const regex = new RegExp(`[^0-9${uncoveredCharacter}]`, 'g');
	return Number(number.toString().replace(regex, ''));
}

export function fractionateValue(value, maximumFractionDigits, uncoveredCharacter) {
	if (!value || !maximumFractionDigits) return value;
	const fractionReason = 10 ** maximumFractionDigits;

	let saferValue = value;

	if (typeof saferValue === 'string') {
		saferValue = sanitizeNumber(value, uncoveredCharacter);

		if (saferValue % 1 !== 0) {
			saferValue = saferValue.toFixed(maximumFractionDigits);
		}
	} else {
		saferValue = Number.isInteger(value)
			? Number(value) * fractionReason
			: value.toFixed(maximumFractionDigits);
	}

	return sanitizeNumber(saferValue, uncoveredCharacter) / fractionReason;
}

export function getYearMonthDatetime(date = new Date()) {
	if (typeof date?.getMonth !== 'function') return false;
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return {
		month,
		year,
		datetime: new Date(`${year}/${month}/01`).getTime()
	};
}
