import React from 'react';

import { OriginLogo } from '~/components/minimal';

import * as S from './style';

function Header() {
	return (
		<S.Header>
			<OriginLogo customCss={S.originLogo} type="withLink" />
		</S.Header>
	);
}

export default Header;
