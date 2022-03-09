import styled from 'styled-components';
import { GoHome } from '../components/GoHome';

export function NotFound() {
	return (
		<Container>
			<h1>
				Error 404 not found <GoHome />
			</h1>
		</Container>
	);
}

const Container = styled.div`
	padding: 5rem;
`;
