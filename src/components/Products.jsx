import styled from 'styled-components';


import { Product } from './Product';
export function Products(props) {
	const data = props.productsData;

	return (
		<Container>
			<Product productData={data} only={25} itemAdded={props.itemAdded} />
		</Container>
	);
}

const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 20px;
	padding: 1rem;
`;
