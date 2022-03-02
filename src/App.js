import { Fragment } from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

export function App() {
	return (
		<Fragment>
			<Navigation />
			<Header />
		</Fragment>
	);
}
