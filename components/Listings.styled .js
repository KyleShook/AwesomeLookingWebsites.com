import styled from "styled-components";

export const Container = styled.div`
	position: relative;

	button {
		font-size: 24px;
		font-weight: 500;
	}
`;
export const Wrapper = styled.div``;
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
		width: 48px;
	}
`;
export const TotalCount = styled.p`
	text-align: center;
	margin: 24px auto;
	font-size: 24px;
	font-weight: 600;
	background: #000000cf;
	color: white;
	mix-blend-mode: color;
`;
