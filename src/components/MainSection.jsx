import styled from 'styled-components';

import { Aside } from './Aside';
import { Products } from './Products';
export function MainSection(props) {
	
	return (
		<Container>
			<Aside productsData={props.productsData} setDataProducts={props.setDataProducts} />
			<Products productsData={props.productsData} />
		</Container>
	);
}

const Container = styled.main`
	display: grid;
	gap: 0px 13px;
	grid-template-columns: auto 1fr;
	grid-template-areas: 'aside main';
	Aside {
		grid-area: aside;
	}
	Products {
		grid-area: main;
	}
`;
