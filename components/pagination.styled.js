import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	height: 0;
	/* Formula is: (height / width * 100%) */
	padding-top: calc(1496 / 409 * 100%);
	width: 100%;

	button {
		font-size: 24px;
		font-weight: 500;
	}
`;
export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	max-width: 100%;
	height: auto;
`;
