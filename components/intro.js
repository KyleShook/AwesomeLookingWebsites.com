// import { CMS_NAME, CMS_URL } from "../lib/constants";
import { useEffect, useState } from "react";
import {
	IntroContainer,
	Title,
	TitleRight,
	Emoji,
	PreTitle,
	Letters,
	TitleContainer,
	PostTitle,
	VisuallyHidden,
} from "./intro.styled";

export default function Intro() {
	const [bgColor, setBgColor] = useState("");
	const [emojiPair, setEmojiPair] = useState("🔥🔥");

	const bgColors = [
		"#ffaeaeb3",
		"skyblue",
		"#b9ffa6d4",
		"yellow",
		"orange",
		"black",
		"antiquewhite",
		"transparent",
	];

	const emojis = ["👀", "🤘🤘", "🔥🔥", "💖💖", "🤯🤯", "👏👏"];

	const getRandomBgColor = () => {
		if (bgColors[Math.floor(Math.random() * bgColors.length)] !== bgColor) {
			setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)]);
		}
	};
	const getRandomEmoji = () => {
		if (emojis[Math.floor(Math.random() * emojis.length)] !== emojiPair) {
			setEmojiPair(emojis[Math.floor(Math.random() * emojis.length)]);
		}
	};
	const emojiClick = () => {
		getRandomEmoji();
		getRandomBgColor();
	};

	return (
		<>
			<VisuallyHidden>
				Sharing awesome looking websites from all over the internet.
			</VisuallyHidden>
			<IntroContainer aria-hidden="true">
				<PreTitle>Sharing</PreTitle>
				<TitleContainer>
					<Title bgColor={bgColor}>awesome</Title>
					<TitleRight bgColor={bgColor}>
						l<Emoji onClick={emojiClick}>{emojiPair}</Emoji>
						{/* <Emoji onClick={getRandomBgColor}>👀🔥👻🤯🥺🧐💎❤️💖🌐</Emoji> */}
						<Letters>oo</Letters>king
					</TitleRight>
					<Title bgColor={bgColor}>websites.</Title>
				</TitleContainer>
				<PostTitle>(from all over the internet)</PostTitle>
			</IntroContainer>
		</>
	);
}
