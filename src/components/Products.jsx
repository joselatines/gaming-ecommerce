import styled from 'styled-components';

import { Product } from './Product';
export function Products(props) {
	const data = props.productsData;
	const { title } = data;
	return (
		<Container>
			<Product title={title} productData={data} only={25} />
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
