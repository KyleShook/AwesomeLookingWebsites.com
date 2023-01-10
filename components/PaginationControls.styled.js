import styled from "styled-components";

export const Previous = styled.a`
	background: none;
	cursor: pointer;
	pointer-events: ${(props) => (props.pageNum <= 1 ? "none" : "auto")};
	text-align: left;
	width: fit-content;
	text-decoration: underline;
	mix-blend-mode: difference;
	font-size: 24px;
	color: black;
	padding: 0 12px;
	border: 1px solid black;
	border-bottom: none;
	border-left: none;
	transition: background 0.3s, color 0.3s;

	&:hover {
		background: black;
		color: white;
	}

	&:focus-visible {
		border: 2px solid black;
	}
	@media (max-width: 600px) {
		mix-blend-mode: initial;
		/* background: ${(props) =>
			props.pageNum <= 1 ? "#ffaeae69" : "#b9ffa6a6"}; */
	}
	@media (max-width: 500px) {
		font-size: 20px;
	}
`;

export const Next = styled.a`
	background: none;
	pointer-events: ${(props) => (props.lastPage ? "none" : "auto")};
	cursor: pointer;
	text-align: right;
	width: fit-content;
	mix-blend-mode: difference;
	font-size: 24px;
	border: 1px solid black;
	border-bottom: none;
	border-right: none;
	transition: background 0.3s, color 0.3s;
	color: black;
	padding: 0 12px;

	&:hover {
		background: black;
		color: white;
	}

	&:focus-visible {
		border: 2px solid black;
	}

	@media (max-width: 600px) {
		mix-blend-mode: initial;
		/* background: ${(props) =>
			props.lastPage ? "#ffaeae69" : "#b9ffa6a6"}; */
	}

	@media (max-width: 500px) {
		font-size: 20px;
	}
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	@media (max-width: 1100px) {
		max-width: 800px;
		margin: auto;
	}
`;
export const PageNumber = styled.p`
	font-size: 24px;
	width: 200px;

	@media (max-width: 500px) {
		font-size: 20px;
	}
`;
