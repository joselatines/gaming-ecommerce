import styled from 'styled-components';
// To use this component please pass a "content" and "color" props
export function Button(props) {
	return <Container color={props.color}> {props.content} </Container>;
}

const Container = styled.button`
	color: ${(props) => (props.color ? props.color : 'green')};
	border-radius: 5px;
	padding: 5px 10px;
	text-align: center;
	border: solid 1px ${(props) => (props.color ? props.color : 'green')};
	outline: none;
	background: unset;
`;
