import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	/* height: 0; */
	/* Formula is: (height / width * 100%) */
	/* padding-top: calc(1496 / 409 * 100%); */
	/* width: 100%; */

	button {
		font-size: 24px;
		font-weight: 500;
	}
`;
export const Wrapper = styled.div`
	/* position: absolute;
	top: 0;
	left: 0;
	max-width: 100%;
	height: auto; */
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
		width: 48px;
	}
`;
