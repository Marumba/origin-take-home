import React from 'react';

import { Button, Card } from '~/components';

import { Simulator } from '~/containers';

import { Icons } from '~/helpers/icons';

import * as S from '../style';

function HouseSimulation() {
	return (
		<Card>
			<Simulator.Header icon={<Icons.Home />} subtitle="Saving goal" title="Buy a house" />
			<S.SimulatorInputHolder>
				<Simulator.Amount
					id="amount"
					label="Total amount"
					maxDecimalPlaces="9"
					maxFractionDigits="0"
					name="amount"
				/>
				<Simulator.ReachDate id="reachDate" label="Reach goal by" name="reachDate" />
			</S.SimulatorInputHolder>
			<S.SimulatorResultHolder>
				<Simulator.Result title="Monthly amount" />
				<Simulator.ResultExplained>
					{({ amount, months, date }) => (
						<p>
							You&apos;re planning <strong>{months} monthly deposits</strong> to reach your{' '}
							<strong>${amount}</strong> goal by <strong>{date}</strong>
						</p>
					)}
				</Simulator.ResultExplained>
			</S.SimulatorResultHolder>
			<Button styleType="cta">Confirm</Button>
		</Card>
	);
}

export default HouseSimulation;
