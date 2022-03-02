import styled, { css } from 'styled-components';
import variables from './assets/variables.json';
import { useState } from 'react';

export function Navigation() {
	const [navigation, setNavigation] = useState(false);

	const showNavigation = () => {
		setNavigation(!navigation);
	};

	return (
		<Container>
			<Logo>DRX Ecommerce</Logo>
			<Hamburger active={navigation} onClick={showNavigation}>
				<Bar></Bar>
				<Bar></Bar>
				<Bar></Bar>
			</Hamburger>
			<ContainerUL show={navigation}>
				<Dropdown>
					<div>
						<span>Dropdown</span>
						<ion-icon name='chevron-down-outline'></ion-icon>
					</div>
					<DropdownContent>
						<li>Item 1</li>
						<li>Item 2</li>
					</DropdownContent>
				</Dropdown>
				<LI className='searchContainer'>
					<input type='text' name='' id='' placeholder='Search something' />
					<ion-icon name='search-outline'></ion-icon>
				</LI>
				<LI>
					<ion-icon name='person-circle-outline'></ion-icon>
				</LI>
				<LI>
					<ion-icon name='cart-outline'></ion-icon>
				</LI>
			</ContainerUL>
		</Container>
	);
}

const Container = styled.div`
	color: #fff;
	padding: 15px 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	z-index: 101;
	width: 100%;
	top: 0;
	left: 0;
`;

const Logo = styled.span`
	font-weight: 700;
	font-size: 1.5rem;
`;

const Hamburger = styled.div`
	cursor: pointer;
	display: none;
	position: fixed;
	right: 30px;
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

	@media (max-width: ${variables.mediaQueries.tablet}) {
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
	background-color: #fff;
`;

const ContainerUL = styled.ul`
	list-style: none;
	color: #fff;
	gap: 15px;
	display: flex;
	align-items: center;
	transition: all ${variables.transitions.short};
	@media (max-width: ${variables.mediaQueries.tablet}) {
		background-color: ${variables.colors.bg_dark};
		position: absolute;
		z-index: 99;
		left: 0;
		top: ${(props) => (props.show ? 0 : '-1000px')};
		width: 100%;
		flex-direction: column;
		padding: 20px;
		div {
			display: block;
			position: relative;
		}
		section {
			position: relative;
			display: block;
			opacity: 1;
			top: unset;
			li {
				margin-top: 10px;
			}
		}
	}
`;

const LI = styled.li`
	font-size: 25px;
	cursor: pointer;
	&.searchContainer {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		gap: 10px;
		transition: ${variables.transitions.short};
		input {
			outline: none;
			border: solid #fff 2px;
			opacity: 0.7;
			color: #fff;
			border-radius: 25px;
			background-color: transparent;
			padding: 5px 15px;

			transition: ${variables.transitions.short};
			&::placeholder {
				color: #fff;
			}
			&:focus {
				opacity: 1;
			}
		}
		ion-icon {
			position: absolute;
			right: 10px;
			font-size: 20px;
			border-radius: 25px;
			z-index: -1;
		}
	}
`;

const Dropdown = styled(ContainerUL)`
	display: inline-block;
	top: unset;
	position: relative;
	text-align: center;
	cursor: pointer;
	transition: all ${variables.transitions.short};
	&:hover {
		// Dropdown content
		section {
			display: block;
			opacity: 1;
			background-color: none;
		}
	}
`;
const DropdownContent = styled.section`
	transition: all ${variables.transitions.short};
	background-color: ${variables.colors.bg_dark};
	opacity: 0;
	color: #fff;
	position: absolute;
	top: 22px;
	width: 100%;
	padding: 5px 10px;
	li {
		transition: ${variables.transitions.short};
		position: relative;
		left: 0px;
		&:hover {
			left: 5px;
		}
	}
`;
