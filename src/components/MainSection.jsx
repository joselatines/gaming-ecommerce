import styled from 'styled-components';

import { Aside } from './Aside';
import { Products } from './Products';
export function MainSection() {
	return (
		<Container>
			<Aside />
			<Products />
		</Container>
	);
}

const Container = styled.main`
	display: grid;
	gap: 0px 13px;
	grid-template-areas: 'aside main';
	Aside {
		grid-area: aside;
	}
	Products {
		grid-area: main;
	}
`;
