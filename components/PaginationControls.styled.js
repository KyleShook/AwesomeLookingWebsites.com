import styled from "styled-components";

export const Previous = styled.button`
	/* background: #f5babad4; */
	background: ${(props) => (props.pageNum === 1 ? "#ffaeaeb3" : "#b9ffa6d4")};
	text-align: left;
	width: 25%;
	mix-blend-mode: difference;
`;

export const Next = styled.button`
	/* background: #c7f5bad4; */
	background: ${(props) => (props.lastPage ? "#ffaeaeb3" : "#b9ffa6d4")};
	text-align: right;
	width: 25%;
	mix-blend-mode: difference;
`;
