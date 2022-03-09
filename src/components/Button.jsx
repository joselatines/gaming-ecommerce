import styled, { css } from 'styled-components';

// To use this component please pass a "content" and "color" props
export function Button(props) {
	return (
		<Container border={props.border} color={props.color}>
			{props.icon} {props.content}
		</Container>
	);
}

const Container = styled.button`
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
