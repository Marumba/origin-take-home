import React, { forwardRef } from 'react';
import { bool, oneOfType, element, string, func, childrenType, customCssType, stringOrNumber } from '~/types';

import * as S from './style';

const InputDefault = forwardRef(
	(
		{
			append,
			children,
			customCss,
			id,
			fakeInput,
			label,
			name,
			onChange,
			prepend,
			type,
			value,
			...inputProps
		},
		ref
	) => {
		return (
			<S.InputDefault customCss={customCss}>
				<S.Label htmlFor={id}>{label}</S.Label>
				<S.Wrapper>
					{prepend}
					{children}
					<S.Input
						id={id}
						name={name}
						onChange={onChange}
						ref={ref}
						type={type}
						value={value}
						{...inputProps}
					/>
					{append}
				</S.Wrapper>
			</S.InputDefault>
		);
	}
);

InputDefault.propTypes = {
	append: oneOfType([string, element]),
	children: childrenType,
	customCss: customCssType,
	fakeInput: bool,
	id: string.isRequired,
	label: string,
	name: string.isRequired,
	onChange: func,
	prepend: oneOfType([string, element]),
	type: string,
	value: stringOrNumber
};

InputDefault.defaultProps = {
	append: undefined,
	children: undefined,
	customCss: undefined,
	fakeInput: false,
	label: undefined,
	onChange: undefined,
	prepend: undefined,
	type: 'text',
	value: undefined
};

export default InputDefault;
