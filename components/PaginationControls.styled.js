import styled from "styled-components";

export const Previous = styled.a`
	background: ${(props) => (props.pageNum <= 1 ? "#ffaeaeb3" : "#b9ffa6d4")};
	cursor: pointer;
	pointer-events: ${(props) => (props.pageNum <= 1 ? "none" : "auto")};
	text-align: left;
	width: 25%;
	mix-blend-mode: difference;
	font-size: 24px;
	padding-left: 8px;

	border: 4px solid transparent;
	border-bottom: none;
	border-left: none;
	transition: border 0.3s;

	&:hover {
		border-color: black;
	}
	@media (max-width: 600px) {
		mix-blend-mode: initial;
		background: ${(props) => (props.pageNum <= 1 ? "#ffaeae69" : "#b9ffa6a6")};
	}
	@media (max-width: 500px) {
		font-size: 20px;
	}
`;

export const Next = styled.a`
	background: ${(props) => (props.lastPage ? "#ffaeaeb3" : "#b9ffa6d4")};
	pointer-events: ${(props) => (props.lastPage ? "none" : "auto")};
	cursor: pointer;
	text-align: right;
	width: 25%;
	mix-blend-mode: difference;
	font-size: 24px;
	border: 4px solid transparent;
	border-bottom: none;
	border-right: none;
	transition: border 0.3s;
	padding-right: 8px;

	&:hover {
		border-color: black;
	}

	@media (max-width: 600px) {
		mix-blend-mode: initial;
		background: ${(props) => (props.lastPage ? "#ffaeae69" : "#b9ffa6a6")};
	}

	@media (max-width: 500px) {
		font-size: 20px;
	}
`;

export const Container = styled.div`
	width: 100%;
	@media (max-width: 1000px) {
		max-width: 800px;
		margin: auto auto 20px;
	}
`;
export const PageNumber = styled.p`
	font-size: 24px;

	@media (max-width: 500px) {
		font-size: 20px;
	}
`;
