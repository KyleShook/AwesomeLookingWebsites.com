// import { CMS_NAME, CMS_URL } from "../lib/constants";
import { useEffect, useState } from "react";
import {
	IntroContainer,
	Title,
	TitleRight,
	Eyes,
	PreTitle,
	Letters,
	TitleContainer,
} from "./intro.styled";
// import { useRef, useEffect } from "react";

export default function Intro() {
	const [bgColor, setBgColor] = useState("");

	const bgColors = [
		"#ffaeaeb3",
		"skyblue",
		"#b9ffa6d4",
		"yellow",
		"orange",
		"black",
		"antiquewhite",
		// "deeppink",
		"transparent",
	];

	const getRandomBgColor = () => {
		if (bgColors[Math.floor(Math.random() * bgColors.length)] !== bgColor) {
			setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)]);
		}
	};

	return (
		<IntroContainer className="flex-col md:flex-row flex mt-16 mb-16 md:mb-12 justify-end">
			{/* <Title
			// className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:pr-8"
			>
				<span>We think these are</span>
				<br />
				awesome looking websites.
			</Title> */}
			<PreTitle>We think these are</PreTitle>
			<TitleContainer>
				<Title bgColor={bgColor}>awesome</Title>
				<TitleRight bgColor={bgColor}>
					l<Eyes onClick={getRandomBgColor}>👀</Eyes>
					<Letters>oo</Letters>king
				</TitleRight>
				<Title bgColor={bgColor}>websites.</Title>
			</TitleContainer>

			{/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Pssst!</h4> */}
		</IntroContainer>
	);
}
