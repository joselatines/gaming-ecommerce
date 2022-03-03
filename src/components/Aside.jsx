import { useState } from 'react';
import styled from 'styled-components';

import variables from './assets/variables.json';
import { Button } from './Button';

// To use this components you need to use ionics CDN
export function Aside() {
	const [ulActive, setUlActive] = useState(false);
	return (
		<Container>
			<Button color={variables.colors.primary} content='Hllo wor' />
			<AsideNav>
				<div className={`aside__element ${ulActive ? 'active' : ''}`}>
					<div
						onClick={() => setUlActive(!ulActive)}
						className='aside__element--title'
					>
						<ion-icon name='chevron-forward-outline'></ion-icon>
						<span>Computer</span>
					</div>
					<ul className='aside__element--ul'>
						<li>Gamers</li>
						<li>Office</li>
						<li>Kids</li>
					</ul>
				</div>

				<div className='aside__element'>
					<div className='aside__element--title'>
						<ion-icon name='chevron-forward-outline'></ion-icon>
						<span>Computer</span>
					</div>
					<ul className='aside__element--ul'>
						<li>Gamers</li>
						<li>Office</li>
						<li>Kids</li>
					</ul>
				</div>
			</AsideNav>
		</Container>
	);
}

const Container = styled.aside`
	border: solid 2px #0202;
	padding: 0 25px;
`;

const AsideNav = styled.nav`
	display: grid;
	gap: 10px;
	.aside__element {
		max-height: 25px;
		overflow-y: clip;
		transition: max-height ${variables.transitions.short};
		.aside__element--title {
			position: relative;
			display: grid;
			align-items: center;
			cursor: pointer;
			ion-icon {
				position: absolute;
				left: -15px;
				color: ${variables.colors.secondary};
			}
			span {
				font-size: large;
				font-weight: 500;
			}
		}
		.aside__element--ul {
			list-style-type: none;
			line-height: 22px;
			margin-left: 20px;
		}
	}
	.active {
		max-height: unset;
	}
`;
