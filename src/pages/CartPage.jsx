import styled from 'styled-components';

import { GoHome } from '../components/GoHome';
import { Products } from '../components/Products';
/* let items = [
	{
		id: 0,
		rating: 4.6,
		price: 30.0,
		old_price: null,
		type: 'computers',
		title: 'LeapFrog 2-in-1 Leaptop Touch (Frustration Free Packaging), Pink',
		description: 'Eligible for Shipping To Mars or somewhere else',
		image: 'https://m.media-amazon.com/images/I/71lcme7JoPL._AC_SX522_.jpg',
	},
];
 */

let containerArr = [];

export const addItemToCart = (itemToAdd) => {
	containerArr.push(itemToAdd);
	console.log(containerArr);
};

export function CartPage() {
	return (
		<Container>
			{console.log('Cart rendered')}
			<Products productsData={containerArr} addItemToCart={addItemToCart} />
			<GoHome />
		</Container>
	);
}

const Container = styled.div`
	padding-top: 80px;
`;
