import styled from "styled-components";

export const ListingContainer = styled.div`
	display: flex;
	flex-direction: row;

	/* width: 100%; */

	border-top: 4px solid black;
	padding: 20px 0;
	z-index: 10;

	&:last-child {
		border-bottom: 4px solid black;
		margin-bottom: 20px;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		max-width: 700px;
		margin: auto;
	}
`;

export const InfoContainer = styled.div`
	padding: 0 20px;
	margin-top: -6px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* width: 100%; */
	flex-grow: 1;

	@media (max-width: 1000px) {
		padding: 20px 0;
		flex-direction: row;
		align-items: center;
	}

	@media (max-width: 500px) {
		padding: 20px 0 0;
		flex-direction: column;
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
	@media (max-width: 500px) {
		text-align: center;
	}
`;

export const BottomContainer = styled.div`
	margin-bottom: -6px;

	font-size: 25px;

	@media (min-width: 1000px) {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	@media (max-width: 650px) {
		/* flex-direction: column; */
		margin-top: 12px;

		a {
			text-decoration: underline;
		}
	}

	@media (max-width: 400px) {
		font-size: 20px;
	}

	@media (max-width: 1000px) {
		time {
			display: none;
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
	/* line-height: 3rem; */
	margin-top: -12px;

	@media (max-width: 650px) {
		display: initial;
		width: 100%;
	}

	@media (max-width: 400px) {
		font-size: 40px;
	}
`;
