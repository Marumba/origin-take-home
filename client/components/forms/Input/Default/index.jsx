import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const InputDefault = forwardRef(
	({ customCss, id, label, name, onChange, SvgComponent, type, value, ...inputProps }, ref) => {
		return (
			<S.InputDefault customCss={customCss}>
				<S.Label htmlFor={id}>{label}</S.Label>
				<S.Wrapper>
					{SvgComponent && <SvgComponent role="img" />}
					<S.Input
						id={id}
						name={name}
						onChange={onChange}
						ref={ref}
						type={type}
						value={value}
						{...inputProps}
					/>
				</S.Wrapper>
			</S.InputDefault>
		);
	}
);

InputDefault.propTypes = {
	customCss: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ styles: PropTypes.string })]),
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	SvgComponent: PropTypes.oneOfType([PropTypes.shape({ type: PropTypes.func }), PropTypes.elementType]),
	type: PropTypes.string,
	value: PropTypes.string
};

InputDefault.defaultProps = {
	customCss: undefined,
	label: undefined,
	onChange: undefined,
	SvgComponent: undefined,
	type: 'text',
	value: undefined
};

export default InputDefault;
