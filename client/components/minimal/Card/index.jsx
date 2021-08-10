import React from 'react';
import { childrenType, customCssType } from '~/types';

import * as S from './style';

function Card({ children, customCss }) {
	return <S.Card customCss={customCss}>{children}</S.Card>;
}

Card.propTypes = {
	children: childrenType,
	customCss: customCssType
};

Card.defaultProps = {
	children: undefined,
	customCss: undefined
};

export default Card;
