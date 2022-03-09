import styled from 'styled-components';

import variables from './assets/variables.json';

export function Footer() {
	return (
		<Container>
			<section>
				<ul>
					<li>
						<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2014%2F04%2Fintel-logo-2-1.png&f=1&nofb=1' />
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
					<li>sing up</li>
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
				<span>
					A website made by{' '}
					<a href='https://linktr.ee/doctordraxter' target='_blank' rel='noopener noreferrer'>
						DoctorDraxter
					</a>{' '}
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
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rem;
		ul {
			list-style-type: none;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			li {
				img {
					width: 100%;
					object-fit: contain;
				}
			}
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
	align-items: center;
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
	}
`;
