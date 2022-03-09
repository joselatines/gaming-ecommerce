import { useState } from 'react';
import styled from 'styled-components';

import variables from './assets/variables.json';

// To use this components you need to use ionics CDN
export function Aside(props) {
	const data = props.productsData;

	const createNavElement = () => {
		let html = [];

		const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

		const createLi = (objProperty, objType) => {
			let id = 0;
			let keys = Object.keys(objProperty);
			return keys.map((li) => (
				<li
					onClick={(e) => props.changeDataProducts(e.target.innerHTML, objType)}
					key={id++}
				>
					{capitalize(li)}
				</li>
			));
		};

		for (const iterator in data) {
			html.push(
				<div
					key={html.length}
					className={`aside__element`}
					onClick={(e) => e.currentTarget.classList.toggle('active')}
				>
					<div className='aside__element--title'>
						<ion-icon name='chevron-forward-outline'></ion-icon>
						<span>{capitalize(iterator)}</span>
					</div>

					<ul className='aside__element--ul'>
						{createLi(data[iterator], iterator)}
					</ul>
				</div>
			);
		}

		return html;
	};

	return (
		<Container>
			<AsideNav>{createNavElement()}</AsideNav>
		</Container>
	);
}

const Container = styled.aside`
	border: solid 1px #0202;
	padding: 1.5rem;
`;

const AsideNav = styled.nav`
	display: grid;
	gap: 10px;
	.aside__element {
		transition: max-height ${variables.transitions.short};
		max-height: 25px;
		overflow-y: clip;
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
			li {
				cursor: pointer;
			}
		}
	}
	.active {
		max-height: fit-content;
		ion-icon {
			transform: rotate(90deg);
		}
	}
`;
