import styled from 'styled-components';

import { Product } from './Product';
export function Products(props) {
	const array2 = props.productsData;
	return (
		<Container>
			<Product productData={array2} only={25} />
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
