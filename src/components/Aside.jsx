import styled from 'styled-components';
import variables from './assets/variables.json';

export function Aside() {
	return (
		<Container>
			<Header>Products</Header>
			<div>
				<ul>
					Computers
					<li>Gamers</li>
					<li>Office</li>
					<li>Kids</li>
				</ul>
				<ul>
					RAMS
					<li>Intel</li>
					<li>Envidia</li>
					<li>AMD</li>
				</ul>
			</div>
		</Container>
	);
}

const Container = styled.aside`
	background-color: red;
`;

const Header = styled.header`
	border: solid 1px ${variables.colors.primary};
	border-radius: 25px;
`;
