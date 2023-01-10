import Link from "next/link";
import React from "react";
import {
	Menu,
	Logo,
	MenuLinksContainer,
	MenuLinks,
	FooterContainer,
} from "./Footer.styled";

const Footer = () => {
	return (
		<FooterContainer>
			{/* No fluff. Just... */}
			<a href="/">awesome. looking. websites.</a>
		</FooterContainer>
	);
};

export default Footer;
