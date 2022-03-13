import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import products from '../components/assets/products.json';
import variables from '../components/assets/variables.json';
import { Button } from '../components/Button';
import { Product } from '../components/Product';
import { GoHome } from '../components/GoHome';

export function ProductPage() {

	const { state } = useLocation();
	const {
		title,
		description,
		image,
		components,
		secondary_images,
		type,
		type_item,
	} = state;

	let id = 0;
	return (
		<Fragment>
			{state ? (
				<Container>
					<Main>
						<ImgContainer>
							<img src={image} />
						</ImgContainer>
						<Right>
							<Title>
								<h1>{title} </h1>
								<p>{description}</p>
							</Title>
							{state.type == 'computers' ? (
								<Description>
									<h2>Details:</h2>
									<ul>
										<li>{components.case}</li>
										<li>{components.ram}</li>
										<li>{components.processor}</li>
										<li>{components.motherboard}</li>
										<li>{components.graphic}</li>
										<li>{components.power_supply}</li>
										<li>{components.cooling}</li>
									</ul>
								</Description>
							) : null}

							<div className='btnsContainer'>
								<Button
									border
									icon={<ion-icon name='card-outline'></ion-icon>}
									color={variables.colors.secondary}
									content='Buy now'
								/>
								<Button
									dataItem={state}
									icon={<ion-icon name='heart-outline'></ion-icon>}
									color={variables.colors.secondary}
									content='Add cart'
								/>
							</div>
						</Right>
						<ImgsContainer>
							{secondary_images
								? secondary_images.map((el) => (
										<div key={id++} className='container'>
											<img src={el} />
										</div>
								  ))
								: null}
						</ImgsContainer>
					</Main>
					<ProductsContainer>
						<h2>You might be interesting in...</h2>
						<div className='container'>
							<Product productData={products[type][type_item]} only={3} />
						</div>
						<GoHome />
					</ProductsContainer>
				</Container>
			) : (
				<h1>Not found!</h1>
			)}
		</Fragment>
	);
}

const Container = styled.div`
	background-color: ${variables.colors.bg_dark};
	color: #fff;
`;

const ImgContainer = styled.div`
	img {
		width: 100%;
		height: 100%;
		max-height: 500px;
		object-fit: contain;
	}
`;

const Main = styled.header`
	position: relative;
	display: grid;
	gap: 2rem;
	grid-template-columns: 0.9fr 1fr;
	padding: 6rem 5rem;
	padding-bottom: 9rem;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	@media screen and (max-width: ${variables.mediaQueries.tablet}) {
		grid-template-columns: 1fr;
	}
`;

const ImgsContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 45px;
	display: flex;
	gap: 1rem;
	.container {
		padding: 10px;
		background-color: ${variables.colors.bg};
		width: 5rem;
		height: 6rem;
		border-radius: 90px 90px 0 0;
		overflow: hidden;
		img {
			width: 100%;
			object-fit: cover;
		}
	}
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5rem;
	.btnsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 1.3rem;
		Button {
			font-size: 1.4rem;
		}
	}
`;

const Title = styled.div`
	color: ${variables.colors.font_gray};
	h1 {
		color: #fff;
		margin-bottom: 1rem;
	}
`;

const ProductsContainer = styled.div`
	background-color: #fff;
	padding: 3rem 2rem;
	display: grid;
	gap: 1.3rem;
	h2 {
		color: ${variables.colors.secondary};
		font-weight: 900;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
	}
`;

const Description = styled.div`
	font-size: 0.9rem;
	h2 {
		margin-bottom: 0.5rem;
	}
`;
