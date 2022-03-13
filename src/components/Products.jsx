import styled from 'styled-components';
import { StyledLink } from './ReactRouterStyled';

import { Product } from './Product';
export function Products(props) {
	const data = props.productsData;

	return (
		<Container>
			<Product productData={array2} only={25} itemAdded={props.itemAdded} />
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
