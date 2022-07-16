import styled from "styled-components";

export const ListingContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	border-top: 4px solid black;
	padding: 20px 0;

	&:last-child {
		border-bottom: 4px solid black;
		margin-bottom: 1rem;
	}
`;

export const InfoContainer = styled.div`
	padding: 0 0 0 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;

	time {
		font-size: 30px;
		/* margin-bottom: -10px; */
	}
`;

export const ListTitle = styled.h3`
	font-size: 60px;
	font-weight: 900;
	padding-top: 5px;
`;

export const BottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: -6px;

	a:hover {
		text-decoration: underline;
	}
`;
