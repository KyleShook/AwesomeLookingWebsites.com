import { CMS_NAME, CMS_URL } from "../lib/constants";
import { IntroContainer } from "./intro.styled";
import { useRef, useEffect } from "react";

export default function Intro() {
	// const containerRef = useRef(null);

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		if (containerRef?.current) {
	// 			const containerHeight = containerRef?.current?.window?.innerHeight;
	// 			console.log(containerHeight, "height");
	// 		}
	// 	}
	// 	// if (containerRef?.current?.window?.innerHeight) {
	// 	// 	const containerHeight = containerRef?.current?.window?.innerHeight;
	// 	// 	console.log(containerHeight, "height");
	// 	// }
	// }, [containerRef?.current]);

	return (
		<IntroContainer
			// ref={containerRef}
			className="flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12"
		>
			<h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
				We think these are
				<br />
				awesome looking websites.
			</h1>
			{/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Pssst!</h4> */}
		</IntroContainer>
	);
}
