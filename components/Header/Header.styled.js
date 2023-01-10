import styled from "styled-components";

export const Menu = styled.nav`
	padding: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
`;

export const Logo = styled.a`
	color: ${({ theme }) => theme.color};
	font-family: ${({ theme }) => theme.sansFont};
	font-size: 28px;
	font-weight: 600;
	text-decoration: none;
`;

export const MenuLinksContainer = styled.ul`
	display: flex;
`;

export const MenuLinks = styled.li`
	margin: 0 16px;
	font-family: ${({ theme }) => theme.sansFont};

	:last-child {
		margin-right: 0;
	}

	a {
		color: ${({ theme }) => theme.color};
		font-weight: 600;
		text-decoration-color: transparent;
		text-underline-offset: 4px;
		text-decoration-thickness: 2px;
		transition: 0.3s;
	}

	a:hover {
		text-decoration-color: black;
	}
`;
