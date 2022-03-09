import { Fragment, useState } from 'react';

import { Header } from '../components/Header';
import { Divider } from '../components/Divider';
import { MainSection } from '../components/MainSection';
import products from '../components/assets/products.json';

export function Home() {
	const [dataProducts, changeDataProducts] = useState(products);

	return (
		<Fragment>
			<Header />
			<Divider />
			<MainSection
				productsData={dataProducts}
				changeDataProducts={changeDataProducts}
			/>
		</Fragment>
	);
}
