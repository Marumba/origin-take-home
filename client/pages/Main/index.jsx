import React from 'react';

import { Container, Header } from '~/components';
import { Simulator } from '~/containers';

import { Icons } from '~/helpers/icons';

import * as S from './style';

function Main() {
	return (
		<S.MainContainer data-testid="mainPage">
			<Header />
			<Container as="main">
				<S.MainTitle className="highEmphasis">
					Let&apos;s plan your <strong>saving goal</strong>.
				</S.MainTitle>
				<Simulator.Header title="Buy a house" subtitle="Saving goal" SvgComponent={Icons.Home} />
				<Simulator.Amount label="Total amount" />
				<Simulator.Result title="Monthly amount" />
				<Simulator.ResultExplained />
			</Container>
		</S.MainContainer>
	);
}

export default Main;
