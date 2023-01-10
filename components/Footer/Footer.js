import Link from "next/link";
import React from "react";
import { FooterContainer } from "./Footer.styled";

const Footer = () => {
	return (
		<FooterContainer>
			<Link passHref href="/">
				<a href="/">awesome. looking. websites.</a>
			</Link>
		</FooterContainer>
	);
};

export default Footer;
