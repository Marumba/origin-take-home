/* eslint-disable no-unused-vars */
import {
	arrayOf,
	bool,
	element,
	elementType,
	func,
	node,
	number,
	oneOf,
	oneOfType,
	shape,
	string
} from 'prop-types';

const childrenType = oneOfType([arrayOf(node), node, func]);
const customCssType = oneOfType([func, shape({ styles: string })]);
const stringOrNumber = oneOfType([string, number]);

export {
	arrayOf,
	bool,
	element,
	elementType,
	func,
	node,
	number,
	oneOf,
	oneOfType,
	shape,
	string,
	childrenType,
	customCssType,
	stringOrNumber
};
