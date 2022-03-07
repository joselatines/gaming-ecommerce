import { useState } from 'react';
import styled from 'styled-components';

import { Aside } from './Aside';
import { Products } from './Products';
export function MainSection(props) {
	const [data, setData] = useState(props.productsData.computers.gamers);

	const changeData = (productType) => {
		const minimized = productType.charAt(0).toLowerCase() + productType.slice(1);
		switch (minimized) {
			case 'gamers':
				setData(props.productsData.computers.gamers);
				break;

			case 'offices':
				setData(props.productsData.computers.offices);
				break;
			case 'kids':
				setData(props.productsData.computers.kids);
				break;
			case 'processors':
				setData(props.productsData.components.processors);
				break;
			case 'rams':
				setData(props.productsData.components.rams);
				break;
			case 'lights':
				setData(props.productsData.accessories.lights);
				break;
			case 'chairs':
				setData(props.productsData.accessories.chairs);
				break;

			default:
				break;
		}
		console.log('state changed');
	};
	return (
		<Container>
			<Aside
				productsData={props.productsData}
				changeDataProducts={changeData}
			/>
			<Products productsData={data} />
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
