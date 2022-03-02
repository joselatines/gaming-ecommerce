import styled from 'styled-components';

import variables from './assets/variables.json';
import chair from './assets/img/chair.png';
import headset from './assets/img/headset.png';
import keyboard from './assets/img/keyboard.png';

export function Divider() {
	return (
		<Container>
			<Left>
				<p>
					WE ARE THE <b>BEST OPTION</b> FOR
				</p>
			</Left>
			<Right>
				<Card>
					<img
						src='https://assets.spartangeek.com/cc/ew-thor-1_200106_021015.png'
						alt='pc gamer'
					/>
				</Card>
				<Card>
					<img src={chair} alt='gaming chair' />
				</Card>
				<Card>
					<img src={headset} alt='gaming headset' />
				</Card>
				<Card>
					<img src={keyboard} alt='gaming keyboard' />
				</Card>
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
	display: flex;
	gap: 15px;
`;
const Card = styled.div`
	max-width: 150px;
	height: auto;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;
