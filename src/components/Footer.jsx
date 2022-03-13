import styled from 'styled-components';

import variables from './assets/variables.json';

export function Footer() {
	return (
		<Container>
			<section>
				<ul>
					<li>
						<h1>DRX Setup</h1>
					</li>
					<li>The best place for gamers</li>
					<li>drxsetup@contact.com</li>
				</ul>
				<ul>
					<Title>Useful links</Title>
					<UsefulLinks>
						<li>Products</li>
						<li>Products</li>
						<li>Products</li>
						<li>Products</li>
						<li>Products</li>
					</UsefulLinks>
				</ul>
				<ul>
					<Title>Suscribe</Title>
					<li className='singUp'>
						<input type='text' placeholder='example@gmail.com' />
						<input type='button' value='Sing Up' />
					</li>
				</ul>
			</section>
			<Bottom>
				<IconsContainer>
					<div>
						<ion-icon name='logo-linkedin'></ion-icon>
					</div>
					<div>
						<ion-icon name='logo-behance'></ion-icon>
					</div>
					<div>
						<ion-icon name='logo-instagram'></ion-icon>
					</div>
				</IconsContainer>
				<span className='waterMark'>
					A website made by
					<a
						href='https://linktr.ee/doctordraxter'
						target='_blank'
						rel='noopener noreferrer'
					>
						DoctorDraxter
					</a>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
						alt='react-js'
					/>
				</span>
			</Bottom>
		</Container>
	);
}

const Container = styled.footer`
	background-color: ${variables.colors.bg_dark};
	color: #fff;
	display: grid;
	grid-template-rows: auto auto;
	gap: 1rem;
	padding: 5rem;
	.waterMark {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		a {
			margin: 0 5px;
		}
		img {
			width: 20px;
		}
	}
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rem;
		ul {
			list-style-type: none;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			.singUp {
				@media screen and (max-width: ${variables.mediaQueries.tablet}) {
					input[type='text'] {
						width: 60%;
					}
				}
				input {
					border-radius: unset;
					outline: unset;
					padding: 5px;
					border: 0;
					&:active {
						outline: 1px solid ${variables.colors.primary};
					}
					&:focus {
						outline: 1px solid ${variables.colors.primary};
					}
				}
				input[type='button'] {
					color: #fff;
					height: 100%;
					background-color: ${variables.colors.primary};
					margin: 0 5px;
					cursor: pointer;
					outline: unset;
					&:active {
						opacity: 0.8;
					}
				}
			}
			li {
				h1 {
					font-size: 2rem;
				}
			}
		}
		@media screen and (max-width: ${variables.mediaQueries.tablet}) {
			grid-template-columns: 1fr;
		}
	}
`;

const Title = styled.span`
	font-size: 1.1rem;
	font-weight: 700;
`;
const UsefulLinks = styled.div`
	display: flex;
	gap: 1.2rem;
	flex-wrap: wrap;
	li {
		opacity: 0.5;
		cursor: pointer;
		&:hover {
			opacity: 1;
		}
	}
`;

const Bottom = styled.div`
	border-top: 1px solid ${variables.colors.bg};
	padding: 2rem 0;
	margin-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	gap: 1rem;
	justify-content: space-between;
`;
const IconsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	div {
		padding: 0.5rem;
		border: solid 1px ${variables.colors.bg};
		border-radius: 50%;
		display: grid;
		font-size: 20px;
		cursor: pointer;
		&:hover {
			border: solid 1px ${variables.colors.primary};
			color: ${variables.colors.primary};
		}
	}
`;
