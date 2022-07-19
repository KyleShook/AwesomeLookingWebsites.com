import styled from "styled-components";

export const Previous = styled.a`
	background: ${(props) => (props.pageNum <= 1 ? "#ffaeaeb3" : "#b9ffa6d4")};
	cursor: pointer;
	pointer-events: ${(props) => (props.pageNum <= 1 ? "none" : "auto")};
	text-align: left;
	width: 25%;
	mix-blend-mode: difference;
	font-size: 24px;
`;

export const Next = styled.a`
	background: ${(props) => (props.lastPage ? "#ffaeaeb3" : "#b9ffa6d4")};
	pointer-events: ${(props) => (props.lastPage ? "none" : "auto")};
	cursor: pointer;
	text-align: right;
	width: 25%;
	mix-blend-mode: difference;
	font-size: 24px;
`;
