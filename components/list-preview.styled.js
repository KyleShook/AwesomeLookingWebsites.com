import styled from "styled-components";

export const ListingContainer = styled.div`
	display: flex;
	flex-direction: row;

	/* width: 100%; */

	border-top: 4px solid black;
	padding: 20px 0;

	&:last-child {
		border-bottom: 4px solid black;
		margin-bottom: 1rem;
	}

	@media (max-width: 650px) {
		flex-direction: column;
	}
`;

export const InfoContainer = styled.div`
	padding: 0 0 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* width: 100%; */
	flex-grow: 1;

	@media (max-width: 650px) {
		padding: 0;
		/* flex-direction: row; */
	}
`;

export const ListTitle = styled.h3`
	font-size: 60px;
	font-weight: 900;
	/* padding-top: 5px; */
	line-height: 3rem;

	@media (max-width: 1275px) {
		font-size: 50px;
	}

	@media (max-width: 650px) {
		display: none;

		/* a {
			text-decoration: underline;
		} */
	}
`;

export const BottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: -6px;

	font-size: 30px;

	@media (max-width: 1100px) {
		font-size: 20px;
	}
	@media (max-width: 650px) {
		/* flex-direction: column; */
		margin-top: 12px;

		a {
			text-decoration: underline;
		}
	}

	a:hover {
		text-decoration: underline;
	}
`;

export const MobileListTitle = styled.h3`
	display: none;
	font-size: 60px;
	font-weight: 900;
	line-height: 3rem;

	@media (max-width: 650px) {
		display: initial;
		width: 100%;
		padding-top: 12px;
	}
`;
