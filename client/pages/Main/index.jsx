import React from 'react';

import { Container, Header } from '~/components';
import { Simulator } from '~/containers';

import { ReactComponent as House } from '~/assets/imgs/icons/icon-home.svg';

import * as S from './style';

function Main() {
	return (
		<S.MainContainer data-testid="mainPage">
			<Header />
			<Container as="main">
				<S.MainTitle>
					Let&apos;s plan your <strong>saving goal</strong>
				</S.MainTitle>
				<Simulator.Header title="Buy a house" subtitle="Saving goal" SvgComponent={House} />
			</Container>
		</S.MainContainer>
	);
}

export default Main;
