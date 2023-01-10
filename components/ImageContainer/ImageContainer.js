import Link from "next/link";
import React, { useState } from "react";
import { Container, ToggleContainer, Toggle } from "./ImageContainer.styled";
import { Card } from "@components";

const ImageContainer = ({ grid, children }) => {
	// const [grid, setGrid] = useState(false);

	// const toggleGrid = () => {
	// 	if (!grid) {
	// 		setGrid(true);
	// 	} else {
	// 		setGrid(false);
	// 	}
	// };

	// console.log(card);
	return (
		<>
			{/* <ToggleContainer>
				<Toggle onClick={toggleGrid}>
					{grid ? (
						<img src="/icons/bxs-rectangle.svg" alt="" />
					) : (
						<img src="/icons/bxs-grid.svg" alt="" />
					)}
				</Toggle>
			</ToggleContainer> */}

			<Container grid={grid}>{children}</Container>
		</>
	);
};

export default ImageContainer;
