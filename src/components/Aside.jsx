import { useState } from 'react';
import styled, { css } from 'styled-components';

import variables from './assets/variables.json';

// To use this components you need to use ionics CDN
export function Aside(props) {
	const data = props.productsData;
	const [showNav, setShowNav] = useState(false);

	const createNavElement = () => {
		let html = [];

		const capitalize = (str) => {
			let newString = str.replace('_', ' ');
			return newString.charAt(0).toUpperCase() + newString.slice(1);
		};

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
		<Container showNav={showNav}>
			<Hamburger active={showNav} onClick={() => setShowNav(!showNav)}>
				<Bar></Bar>
				<Bar></Bar>
				<Bar></Bar>
			</Hamburger>
			<ContainerNav>
				<AsideNav>{createNavElement()}</AsideNav>
			</ContainerNav>
		</Container>
	);
}

const Container = styled.section`
	background-color: #fff;
	transition: ${variables.transitions.short};

	@media screen and (max-width: ${variables.mediaQueries.tablet}) {
		position: absolute;
		z-index: 10;
		left: ${(props) => (props.showNav ? 0 : '-200px')};
		height: 100vh;
	}
`;

const ContainerNav = styled.aside`
	padding: 1.5rem;
	height: 100%;
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

const Hamburger = styled.div`
	cursor: pointer;
	display: none;
	position: absolute;
	right: -50px;
	top: 20px;
	z-index: 100;
	${(props) =>
		props.active &&
		css`
			span:nth-child(2) {
				opacity: 0;
			}
			span:nth-child(1) {
				transform: translateY(8px) rotate(45deg);
			}
			span:nth-child(3) {
				transform: translateY(-8px) rotate(-45deg);
			}
		`}

	@media screen and (max-width: ${variables.mediaQueries.tablet}) {
		display: block;
	}
`;

const Bar = styled.span`
	display: block;
	width: 25px;
	height: 3px;
	margin: 5px auto;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	background-color: ${variables.colors.secondary};
`;
