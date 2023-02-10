import Container from "../components/container";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import Listings from "../components/Listings";
import styled from "styled-components";

const HeaderContainer = styled.div`
	padding: 72px 0;
	text-align: center;

	h1 {
		line-height: 1.3;
		max-width: 1040px;
		margin: auto;
	}

	@media (max-width: 1100px) {
		h1 {
			max-width: 800px;
		}
	}
`;

export default function Index({ allPosts, preview }) {
	return (
		<>
			<Head>
				<title>Awesome Looking Websites</title>
			</Head>
			<Container>
				<HeaderContainer>
					<h1>We think these are awesome. looking. websites.</h1>
				</HeaderContainer>

				<Listings />
			</Container>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);

	return {
		props: { allPosts, preview },
		revalidate: 1,
	};
}
