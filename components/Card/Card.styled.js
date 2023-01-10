import styled from "styled-components";

export const CardContainer = styled.div`
	margin: 0 0 16px;
	border: 1px solid;
	/* min-width: 300px; */
	/* max-height: 350px; */
	flex-basis: ${(props) => (!props.grid ? " 49.3%" : "100%")};
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 345px;
	overflow: hidden;
	max-width: 1200px;
	transition: max-width 0.3s;
	position: relative;

	@media (max-width: 1100px) {
		flex-basis: 100%;
		max-width: 800px;
	}
`;

export const LatestCard = styled.div`
	margin: 0 auto 96px;
	width: 100%;
	display: flex;
	justify-content: center;
	max-width: 900px;
	border: 1px solid black;

	img {
		max-width: 900px;
	}
`;

export const CardImageContainer = styled.div`
	@media (min-width: 1101px) {
		height: ${(props) => (!props.grid ? "300px" : "auto")};
	}
	position: relative;
	overflow: hidden;

	span {
		height: auto !important;
		position: initial !important;
	}

	img {
		height: auto !important;
		position: initial !important;
	}
`;

export const LinkIcon = styled.a`
	display: flex;
	align-items: center;
	color: black;
	transition: color 0.3s;
	font-size: 14px;
	text-underline-offset: 2px;

	:hover {
		color: darkblue;
	}

	img {
		width: 16px;
		margin-left: 4px;
	}
`;

export const CardInfo = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: baseline;
	padding: 8px;
	border-top: 1px solid black;
	background: white;
	justify-content: space-between;

	p {
		font-size: 20px;
		margin-right: 24px;
		font-weight: 600;
	}
`;
