import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (max-width: 1100px) {
		justify-content: center;
	}
`;

export const ToggleContainer = styled.div`
	text-align: center;
	position: fixed;
	bottom: 14px;
	border-radius: 100%;
	left: 14px;

	@media (max-width: 1100px) {
		display: none;
	}
`;

export const Toggle = styled.button`
	padding: 0;
	border: none;
	background: transparent;
	cursor: pointer;
	display: flex;
	justify-content: center;
	margin: auto;
	font-size: 20px;

	span {
		margin-left: -15px;
	}

	img {
		width: 36px;
	}
`;
