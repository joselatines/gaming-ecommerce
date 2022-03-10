import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import variables from '../components/assets/variables.json';
import { StyledLink } from '../components/ReactRouterStyled';
import { Button } from '../components/Button';
import { Product } from '../components/Product';
import { GoHome } from '../components/GoHome';

export function ProductPage() {
	const { state } = useLocation();
	const data = state.state.data;
	const product = state.state.element;
	const { title, description, image, components, secondary_images } = product;

	let productsNumber = 0;
	let numberOfProducts = 3;
	let imgsNumber = 0;

	const sum = () => {
		productsNumber++;
	};
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
									icon={<ion-icon name='heart-outline'></ion-icon>}
									color={variables.colors.secondary}
									content='Add cart'
								/>
							</div>
						</Right>
						<ImgsContainer>
							{secondary_images
								? secondary_images.map((el) => (
										<div key={imgsNumber++} className='container'>
											<img src={el} />
										</div>
								  ))
								: null}
						</ImgsContainer>
					</Main>
					<ProductsContainer>
						<h2>You might be interesting in...</h2>
						<div className='container'>
							{data.map((el) =>
								productsNumber < numberOfProducts ? (
									<StyledLink
										to={`/product/${el.id}`}
										state={{
											state: {
												element: el,
												data: data,
											},
										}}
										key={el.id}
									>
										<Product
											title={el.title}
											description={el.description}
											price={el.price}
											old_price={el.old_price}
											image={el.image}
											rating={el.rating}
										/>
										{sum()}
									</StyledLink>
								) : null
							)}
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
		object-fit: contain;
	}
`;

const Main = styled.header`
	position: relative;
	display: grid;
	gap: 2rem;
	grid-template-columns: 0.9fr 1fr;
	grid-template-rows: 400px;
	padding: 6rem 5rem;
	padding-bottom: 9rem;
	min-height: 100vh;
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
		img {
			width: 100%;
			object-fit: contain;
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
