export function formatCurrency(value, locale, options) {
	const formatter = new Intl.NumberFormat(locale, options);
	return formatter.format(value);
}

export function sanitizeNumber(number) {
	if (typeof number === 'number') return number;
	return Number(number.toString().replace(/[^0-9-]/g, ''));
}

export function fractionateValue(value, maximumFractionDigits) {
	const fractionReason = 10 ** maximumFractionDigits;

	let saferValue = value;

	if (typeof saferValue === 'string') {
		saferValue = sanitizeNumber(value);

		if (saferValue % 1 !== 0) {
			saferValue = saferValue.toFixed(maximumFractionDigits);
		}
	} else {
		saferValue = Number.isInteger(value)
			? Number(value) * fractionReason
			: value.toFixed(maximumFractionDigits);
	}

	return sanitizeNumber(saferValue) / fractionReason;
}
