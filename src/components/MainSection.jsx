import { useState } from 'react';
import styled from 'styled-components';

import { Aside } from './Aside';
import { Products } from './Products';
export function MainSection(props) {
	const [data, setData] = useState(props.productsData.computers.gamers);

	const changeData = (productType, type) => {
		const blankSpaces = productType.replace(' ', '_');
		const minimized = blankSpaces.charAt(0).toLowerCase() + blankSpaces.slice(1);

		setData(props.productsData[type][minimized]);
	};
	return (
		<ContainerProductsMain>
			<Aside
				productsData={props.productsData}
				changeDataProducts={changeData}
			/>
			<Products productsData={data} />
		</ContainerProductsMain>
	);
}

export const ContainerProductsMain = styled.main`
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
