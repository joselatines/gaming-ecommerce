import styled from 'styled-components';

// To use this component please pass a "content" and "color" props
export function Button(props) {
	return (
		<Container color={props.color}>
			{props.icon} {props.content}
		</Container>
	);
}

const Container = styled.button`
	color: ${(props) => (props.color ? props.color : 'green')};
	border-radius: 5px;
	text-align: center;
	padding: 5px 0;
	border: solid 1px ${(props) => (props.color ? props.color : 'green')};
	outline: none;
	background: unset;
	text-align: center;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.color};
		color: #fff;
	}
`;
