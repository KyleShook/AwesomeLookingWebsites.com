import Link from "next/link";
import React from "react";
import { Container } from "./ImageContainer.styled";

const ImageContainer = ({ grid, children }) => {
	return (
		<>
			<Container grid={grid}>{children}</Container>
		</>
	);
};

export default ImageContainer;
