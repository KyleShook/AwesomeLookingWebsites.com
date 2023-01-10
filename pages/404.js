import styled from "styled-components";
import Container from "../components/container";
import Link from "next/link";

export default function Custom404() {
	const Text = styled.h1`
		font-size: 150px;
		font-weight: 900;
		text-transform: uppercase;
		text-align: center;
		line-height: 1;
		mix-blend-mode: difference;

		@media (max-width: 1260px) {
			font-size: 150px;
		}
		@media (max-width: 1000px) {
			font-size: 100px;
		}
		@media (max-width: 675px) {
			font-size: 55px;
		}
	`;

	const Home = styled.a`
		font-size: 50px;
		font-weight: 900;
		text-transform: uppercase;
		mix-blend-mode: difference;
		display: flex;
		justify-content: center;
		margin-top: 40px;
		text-decoration: underline;
		cursor: pointer;
		transition: background 0.3s;
		color: black;

		:hover {
			background: #b9ffa6d4;
		}

		@media (max-width: 1260px) {
			font-size: 150px;
		}
		@media (max-width: 1000px) {
			font-size: 100px;
		}
		@media (max-width: 675px) {
			font-size: 55px;
		}
	`;

	return (
		<Container>
			<Text>TOTALLY NOT AWESOME</Text>
			<Link href="/">
				<Home href="/">Let's go home.</Home>
			</Link>
		</Container>
	);
}
