import styled, { keyframes } from "styled-components";

// const fontAnimation = keyframes`
//  0% { font-family: sans-serif; font-weight: 400; }
//  10% { font-family: fantasy; font-weight: 400;}
//  20% { font-family: monospace; font-weight: 400;}
//  30% { font-family: serif; font-weight: 400;}
//  40% { font-family: system-ui; font-weight: 400;}
//  50% { font-family: cursive; font-weight: 400;}
//  60% { font-family: system-ui; font-weight: 500;}
//  70% { font-family: serif; font-weight: 600;}
//  80% { font-family: monospace; font-weight: 700;}
//  90% { font-family: fantasy; font-weight: 800;}
//  100% { font-family: sans-serif; font-weight: 900;}

// `;

// const fontAnimation = keyframes`
//  0%, 100% {  font-weight: 900; }
//  25%, 75% {  font-weight: 600;}
//  50% {  font-weight: 400;}
// `;

export const IntroContainer = styled.section`
	/* height: calc(100vh - 164px);
	height: calc(100vh - 164px); */
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		/* align-items: center; */
	}
`;
export const PreTitle = styled.span`
	text-transform: none;
	font-size: 100px;
	color: transparent;
	-webkit-text-stroke: 2px black;
	font-weight: 900;
	line-height: 1;
	/* transition: font-size 0.3s; */

	@media (max-width: 1260px) {
		font-size: 75px;
		transition: font-size 0.5s;
	}
	@media (max-width: 1000px) {
		font-size: 55px;
	}
	@media (max-width: 675px) {
		max-width: 325px;
	}
`;
export const TitleContainer = styled.div``;

export const Title = styled.h1`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
	/* transition: font-size 0.5s; */
	mix-blend-mode: difference;
	background: ${(props) => (props.bgColor ? props.bgColor : "transparent")};

	@media (max-width: 1260px) {
		font-size: 150px;
		transition: font-size 0.5s;
	}
	@media (max-width: 1000px) {
		font-size: 130px;
	}
	@media (max-width: 768px) {
		font-size: 85px;
		mix-blend-mode: initial;
	}
	@media (max-width: 550px) {
		font-size: 50px;
	}
`;

export const Emoji = styled.span`
	font-size: 170px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
	display: none;
	/* transition: font-size 0.3s; */
	cursor: pointer;
	letter-spacing: -15px;

	@media (max-width: 1260px) {
		font-size: 150px;
		transition: font-size 0.5s;
	}

	@media (max-width: 1000px) {
		font-size: 130px;
	}
	@media (max-width: 768px) {
		font-size: 85px;
		mix-blend-mode: initial;
	}
	@media (max-width: 550px) {
		font-size: 50px;
	}
`;

export const Letters = styled.span`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1;
	/* transition: font-size 0.3s; */

	@media (max-width: 1260px) {
		font-size: 150px;
		transition: font-size 0.5s;
	}

	@media (max-width: 1000px) {
		font-size: 130px;
	}
	@media (max-width: 768px) {
		font-size: 85px;
		mix-blend-mode: initial;
	}
	@media (max-width: 550px) {
		font-size: 50px;
	}
`;

export const TitleRight = styled.h1`
	font-size: 200px;
	font-weight: 900;
	text-transform: uppercase;
	line-height: 1.3;
	text-align: right;
	/* transition: font-size 0.5s; */
	mix-blend-mode: difference;
	background: ${(props) => (props.bgColor ? props.bgColor : "transparent")};

	@media (max-width: 1260px) {
		font-size: 150px;
		transition: font-size 0.5s;
	}

	@media (max-width: 1000px) {
		font-size: 130px;
		text-align: center;
	}
	@media (max-width: 768px) {
		font-size: 85px;
		mix-blend-mode: initial;
	}

	@media (max-width: 550px) {
		text-align: left;
		font-size: 50px;
	}

	&:hover ${Emoji} {
		display: initial;
	}
	&:hover ${Letters} {
		display: none;
	}
`;

export const PostTitle = styled.span`
	text-transform: none;
	font-size: 40px;
	font-weight: 900;
	line-height: 1;
	/* transition: font-size 0.3s; */

	@media (max-width: 1260px) {
		font-size: 45px;
		transition: font-size 0.5s;
	}
	@media (max-width: 1000px) {
		font-size: 35px;
	}
	@media (max-width: 768px) {
		font-size: 30px;
	}
	@media (max-width: 675px) {
		max-width: 325px;
		font-size: 20px;
	}
`;
export const VisuallyHidden = styled.span`
	position: absolute !important;
	width: 1px !important;
	height: 1px !important;
	padding: 0 !important;
	margin: -1px !important;
	overflow: hidden !important;
	clip: rect(0, 0, 0, 0) !important;
	white-space: nowrap !important;
	border: 0 !important;
`;
