import { Fragment } from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Divider } from './components/Divider';
import { MainSection } from './components/MainSection';
import products from './components/assets/products.json';

export function App() {
	return (
		<Fragment>
			<Navigation />
			<Header />
			<Divider />
			<MainSection productsData={products} />
		</Fragment>
	);
}
