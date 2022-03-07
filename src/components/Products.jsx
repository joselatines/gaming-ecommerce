import styled from 'styled-components';

import { Product } from './Product';
export function Products(props) {
	const array2 = props.productsData;
	return (
		<Container>
			{array2.map((el) => (
				<Product productData={array2} key={el.id} />
			))}
		</Container>
	);
}

const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 20px;
	padding: 1rem;
`;
