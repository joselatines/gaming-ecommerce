import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ProductPage } from './pages/ProductPage';

export function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='product' element={<Navigate to='/' />} />
				<Route path=':idProduct' element={<ProductPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
