// import { CMS_NAME, CMS_URL } from "../lib/constants";
import {
	IntroContainer,
	Title,
	TitleRight,
	Eyes,
	PreTitle,
	Letters,
} from "./intro.styled";
// import { useRef, useEffect } from "react";

export default function Intro() {
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
			<>
				<Title>awesome</Title>
				<TitleRight>
					l<Eyes>👀</Eyes>
					<Letters>oo</Letters>king
				</TitleRight>
				<Title>websites.</Title>
			</>

			{/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Pssst!</h4> */}
		</IntroContainer>
	);
}
