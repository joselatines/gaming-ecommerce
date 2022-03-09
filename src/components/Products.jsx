import styled from 'styled-components';
import { StyledLink } from './ReactRouterStyled';

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
				<StyledLink
					to={`product/${el.id}`}
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
				</StyledLink>
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
