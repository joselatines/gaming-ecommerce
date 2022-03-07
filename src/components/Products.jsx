import styled from 'styled-components';

import { Product } from './Product';
export function Products(props) {
	const array2 = props.productsData.components.processors;
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
	gap: 20px;
`;
