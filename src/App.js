import { Fragment } from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Divider } from './components/Divider';

export function App() {
	return (
		<Fragment>
			<Navigation />
			<Header />
			<Divider />
		</Fragment>
	);
}
