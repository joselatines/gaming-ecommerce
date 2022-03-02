import styled from 'styled-components';

import variables from './assets/variables.json';
import chair from './assets/img/chair.png';
import headset from './assets/img/headset.png';
import keyboard from './assets/img/keyboard.png';

import { Slider } from './Slider';
export function Divider() {
	return (
		<Container>
			<Left>
				<p>
					WE ARE THE <b>BEST OPTION</b> FOR
				</p>
			</Left>
			<Right>
				<Slider />
			</Right>
		</Container>
	);
}

const Container = styled.section`
	background-color: ${variables.colors.bg_dark};
	display: flex;
	gap: 10px;
	padding: 1rem;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	@media (max-width: ${variables.mediaQueries.tablet}) {
		flex-direction: column;
	}
`;

const Left = styled.div`
	font-size: clamp(1rem, 3.5vw, 5rem);
	font-weight: 800;
	flex-basis: 40%;
	color: #fff;
	b {
		color: ${variables.colors.primary};
	}
`;
const Right = styled.div`
	flex-basis: 50%;
`;
