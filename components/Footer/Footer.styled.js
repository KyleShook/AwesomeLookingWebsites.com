import styled from "styled-components";

export const FooterContainer = styled.footer`
	margin: 48px auto;
	font-size: 36px;
	text-align: center;
	font-weight: 900;
	line-height: 1.15;

	a {
		display: flex;
		margin: 0 auto;
		color: black;

		text-decoration-color: transparent;
		transition: text-decoration-color 0.3s;
		width: fit-content;
	}

	a:hover {
		text-decoration-color: black;
	}

	@media (max-width: 600px) {
		a {
			font-size: 24px;
		}
	}
`;
