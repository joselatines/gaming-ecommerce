import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { addItemToCart } from '../pages/CartPage';
import { deleteItemToCart } from '../pages/CartPage';
import variables from './assets/variables.json';

// To use this component please pass a "content" and "color" props
export function Button(props) {
	const { border, color, dataItem, content, icon, deleteBtn } = props;

	return (
		<Fragment>
			{deleteBtn ? (
				<Container
					onClick={() => deleteItemToCart(dataItem)}
					border={border}
					color={color}
				>
					{icon} {content}
				</Container>
			) : (
				<Container
					onClick={() => addItemToCart(dataItem)}
					border={border}
					color={color}
				>
					{icon} {content}
				</Container>
			)}
		</Fragment>
	);
}

const Container = styled.button`
	transition: ${variables.transitions.short};
	color: ${(props) => (props.color ? props.color : 'green')};
	border-radius: 3px;
	display: grid;
	grid-template-columns: repeat(2, auto);
	gap: 10px;
	align-items: center;
	justify-content: center;
	padding: 5px 10px;
	border: solid 1px ${(props) => (props.color ? props.color : 'green')};
	outline: none;
	background: transparent;
	text-align: center;
	cursor: pointer;

	${(props) =>
		props.border &&
		css`
			background: ${(props) => (props.color ? props.color : 'green')};
			color: #fff;
		`}
	&:hover {
		background-color: ${(props) => props.color};
		color: #fff;
	}
`;
