import styled from 'styled-components';
import { StyledLink } from '../components/ReactRouterStyled';

import variables from './assets/variables.json';

export function GoHome() {
	return (
		<StyledLink to='/'>
			<Container>
				<ion-icon name='arrow-back-outline'></ion-icon>Go home
			</Container>
		</StyledLink>
	);
}

const Container = styled.div`
	color: ${variables.colors.font_gray};
	transition: left ${variables.transitions.short};
	display: flex;
	align-items: center;
	position: relative;
	left: 0;
	width: fit-content;
	margin: 15px 0;
	cursor: pointer;
	&:hover {
		left: -10px;
	}
`;

/* const StyledLink = styled(Link)`
	color: none;
	text-decoration: none;
`; */
