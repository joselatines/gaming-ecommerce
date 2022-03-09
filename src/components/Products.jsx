import styled from 'styled-components';

import { Product } from './Product';
export function Products(props) {
	const data = props.productsData;

	{
		/* <StyledLink to={`${product.id}`} state={product} key={product.id}>
					
				</StyledLink> */
	}
	return (
		<Container>
			{data.map((el) => (
				<Product key={el.id} title={el.id} description={el.description} price={el.price} ol_price={el.ol_price} />
			))}
			{/* <Product productData={data} only={25} /> */}
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
