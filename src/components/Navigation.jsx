import styled, { css } from 'styled-components';
import variables from './assets/variables.json';
import { useState } from 'react';
import { StyledLink } from './ReactRouterStyled';

export function Navigation() {
	const [navigation, setNavigation] = useState(false);
	const [scroll, setScroll] = useState(false);

	const showNavigation = () => {
		setNavigation(!navigation);
	};

	window.onscroll = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	return (
		<Container show={scroll}>
			<Logo>
				<StyledLink to='/'>DRX Ecommerce</StyledLink>
			</Logo>
			<Hamburger active={navigation} onClick={showNavigation}>
				<Bar></Bar>
				<Bar></Bar>
				<Bar></Bar>
			</Hamburger>
			<ContainerUL show={navigation}>
				<LI>
					<StyledLink to='my-cart'>
						<ion-icon name='cart-outline'></ion-icon>
					</StyledLink>
				</LI>
			</ContainerUL>
		</Container>
	);
}

const Container = styled.div`
	${(props) =>
		props.show &&
		css`
			background: rgba(255, 255, 255, 0.2);
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(15px);
			-webkit-backdrop-filter: blur(15px);
		`}
		transition: ${variables.transitions.short};
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
	position: relative;
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
