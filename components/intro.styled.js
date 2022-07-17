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
	transition: font-size 0.3s;

	@media (max-width: 1260px) {
		font-size: 75px;
	}
	@media (max-width: 1000px) {
		font-size: 55px;
	}
	@media (max-width: 675px) {
		max-width: 325px;
	}
`;

export const Title = styled.h1`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
	transition: font-size 0.3s;

	@media (max-width: 1260px) {
		font-size: 150px;
	}
	@media (max-width: 1000px) {
		font-size: 100px;
	}
	@media (max-width: 675px) {
		font-size: 55px;
	}
`;

export const Eyes = styled.span`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
	display: none;
	transition: font-size 0.3s;

	@media (max-width: 1260px) {
		font-size: 150px;
	}

	@media (max-width: 1000px) {
		font-size: 100px;
	}
	@media (max-width: 675px) {
		font-size: 55px;
	}
`;

export const Letters = styled.span`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
	transition: font-size 0.3s;

	@media (max-width: 1260px) {
		font-size: 150px;
	}

	@media (max-width: 1000px) {
		font-size: 100px;
	}
	@media (max-width: 675px) {
		font-size: 55px;
	}
`;

export const TitleRight = styled.h1`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
	text-align: right;
	transition: 0.3s;

	@media (max-width: 1260px) {
		font-size: 150px;
	}

	@media (max-width: 1000px) {
		font-size: 100px;
		text-align: left;
	}
	@media (max-width: 675px) {
		font-size: 55px;
	}

	&:hover ${Eyes} {
		display: initial;
	}
	&:hover ${Letters} {
		display: none;
	}
`;
