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

// Import Pagination
import Pagination from "react-sanity-pagination";

// Import Querying tool
import client from "../lib/sanity";

const itemsToSend = [];
export default function Index({ allPosts, preview }) {
	// console.log(allPosts);
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);

	// const postsPerPage = 2;
	// // Create state which will be updated every time you paginate
	// const [items, setItems] = useState([]);

	// // Fetch your all data initially
	// useEffect(() => {
	// 	client
	// 		.fetch('*[_type == "post"] | order(publishedAt desc) {preview} ')
	// 		.then((res) => {
	// 			console.log("😎 Initial Data: ", res);
	// 			// Push your data to the static array
	// 			itemsToSend.push(...res);
	// 		});
	// }, []);

	// // Create an action which will be called on paginate
	// // This will return the current Page, Range of items and the Items to render
	// const action = (page, range, items) => {
	// 	console.log(`📄 Page: ${page}, 🌀 Items: `, items);
	// 	// Update State
	// 	setItems(items);
	// };
	const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;

	const query = `*[_type == "post"] | order(publishedAt desc){ 
  _id, 
  title, 
  name, 
  'date': publishedAt, 
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url}[0..1]}`;

	const params = { minPages: 2 };

	client.fetch(query, params).then((posts) => {
		console.log(posts);
		posts.forEach((post) => {
			console.log(post);
			<p>post.title</p>;
		});
	});

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Next.js Blog Example with {CMS_NAME}</title>
				</Head>
				<Container>
					<Intro />
					<EdibleSpecies />
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
