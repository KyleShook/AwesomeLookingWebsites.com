import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import EdibleSpecies from "../components/pagination";

import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Listings from "../components/Listings";

export default function Index({ allPosts, preview }) {
	// console.log(allPosts);
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Awesome Looking Websites</title>
				</Head>
				<Container>
					<Intro />
					{/* <EdibleSpecies /> */}
					<Listings />
					{/* {heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)} */}
					{/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
				</Container>
			</Layout>
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
