import styled from 'styled-components';

import { GoHome } from '../components/GoHome';
import { Products } from '../components/Products';
import { Divider } from '../components/Divider';
import variables from '../components/assets/variables.json';
import { useState } from 'react';

let incomingProducts = [];
let arraySinClick;
export const addItemToCart = (newItem) => {
	incomingProducts.push(newItem);

	let productsMap = incomingProducts.map((item) => [item.id, item]);

	let productsMapArr = new Map(productsMap);

	incomingProducts = [...productsMapArr.values()];
};
export const deleteItemToCart = (itemClicked) => {
	let newIncomingProducts = incomingProducts.filter(
		(el) => el.id != itemClicked.id
	);
	incomingProducts = newIncomingProducts;
};

export function CartPage() {
	const [stateN, setStateN] = useState(incomingProducts);

	return (
		<Container>
			<div className='divider'></div>
			<div className='div'>
				<h1 className='title'>
					Here is your personal cart
				</h1>
				{incomingProducts.length ? (
					<div className='productsContainer'>
						<Products productsData={stateN} itemAdded />
						<div>
							<p>
								Select the products to be deleted and click "Delete products".
							</p>
							<Btn onClick={() => setStateN(incomingProducts)}>
								Delete products
							</Btn>
						</div>
					</div>
				) : (
					<div>
						<h3>Sorry, you don't have items in your cart yet</h3>
					</div>
				)}
				<GoHome />
			</div>
		</Container>
	);
}

const Container = styled.div`
	.title {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: ${variables.colors.secondary};
	}
	.div {
		padding: 5rem;
		min-height: 100vh;
		.productsContainer{
			display: grid;
			gap: 1rem;
		}
	}
	.divider {
		background-color: ${variables.colors.bg_dark};
		height: 100px;
	}
`;

const Btn = styled.div`
	color: ${variables.colors.red};
	border-radius: 3px;
	display: grid;
	grid-template-columns: repeat(2, auto);
	gap: 10px;
	align-items: center;
	justify-content: center;
	padding: 5px 10px;
	border: solid 1px ${variables.colors.red};
	outline: none;
	background: transparent;
	text-align: center;
	cursor: pointer;

	&:hover {
		background-color: ${variables.colors.red};
		color: #fff;
	}
`;


