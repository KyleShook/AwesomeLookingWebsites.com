import styled from "styled-components";

export const IntroContainer = styled.section`
	height: calc(100vh - 164px);
	display: flex;
	flex-direction: column;
`;
export const PreTitle = styled.span`
	text-transform: none;
	font-size: 100px;
	color: transparent;
	-webkit-text-stroke: 2px black;
	font-weight: 900;
	/* text-transform: uppercase; */
	line-height: 1;
`;

export const Title = styled.h1`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
`;

export const Eyes = styled.span`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
	display: none;
`;

export const Letters = styled.span`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
`;

export const TitleRight = styled.h1`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
	text-align: right;

	&:hover ${Eyes} {
		display: initial;
	}
	&:hover ${Letters} {
		display: none;
	}
`;
