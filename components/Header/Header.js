import Link from "next/link";
import React from "react";
import { Menu, Logo, MenuLinksContainer, MenuLinks } from "./Header.styled";

const Header = () => {
	return (
		<header>
			<Menu>
				<Link passHref href="/">
					<Logo>👀 alw</Logo>
				</Link>
				<MenuLinksContainer>
					{/* <MenuLinks>
						<Link href="/">
							<a>| | |</a>
						</Link>
					</MenuLinks> */}
					{/* <MenuLinks>
						<Link href="/pageTwo">
							<a>About</a>
						</Link>
					</MenuLinks>
					<MenuLinks>
						<Link href="/pageThree">
							<a>Submit Website</a>
						</Link>
					</MenuLinks> */}
				</MenuLinksContainer>
			</Menu>
		</header>
	);
};

export default Header;
