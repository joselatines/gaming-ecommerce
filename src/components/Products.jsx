import styled from 'styled-components';

import variables from './assets/variables.json';
import products from './assets/products.json';
import { Product } from './Product';

export function Products() {
	const array2 = products.computers.gamers;
	return (
		<Container>
			{array2.map((e) => (
				<Product key={e.id} />
			))}
		</Container>
	);
}

const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;
