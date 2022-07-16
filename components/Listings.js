import React, { useState, useEffect } from "react";
import client from "../lib/sanity";
import ListPreview from "./list-preview";
import { useRouter } from "next/router";
import { Container, Wrapper } from "./pagination.styled";
import Head from "next/head";
import PaginationControls from "./PaginationControls";

// Don't worry if you aren't used to React, focus on fetchSpecies
const Listings = ({ posts }) => {
	const [species, setSpecies] = useState();
	const [totalPosts, setTotalPosts] = useState([]);
	const [pageNum, setPageNum] = useState(1);
	const [toggleGrid, setToggleGrid] = useState(3);
	const router = useRouter();

	const swap = () => {
		if (toggleGrid !== 2) {
			setToggleGrid(2);
		} else {
			setToggleGrid(3);
		}
	};

	async function fetchIds(posts) {
		const postFields = `
        _id,
`;
		const postIds = await client.fetch(
			`
      *[_type == "post"] {
        ${postFields}
      }
    `
		);

		setTotalPosts(postIds.length);
	}
	useEffect(() => {
		fetchIds();
	}, []);

	async function fetchSpecies(posts) {
		const postFields = `
        _id,
        name,
        title,
		url,
        'date': publishedAt,
        excerpt,
        'slug': slug.current,
        'coverImage': mainImage,
        'author': author->{name, 'picture': image.asset->url},
`;

		const newSpecies = await client.fetch(
			// Notice how the query is static:
			`
      *[_type == "post"] | order(publishedAt desc){
        ${postFields}
      }[0..10]
      [(($pageNum - 1) * 10)...($pageNum * 10)]
    `,

			{
				// The only thing we're changing is the pageNum param
				pageNum: posts,
			}
		);

		// With the data, change the state of this component:
		setSpecies(newSpecies);
	}

	useEffect(() => {
		if (pageNum >= 2) {
			router.replace(
				{
					pathname: router.pathname,
					query: { page: pageNum },
					shallow: false,
				},
				undefined,
				{ scroll: false }
			);
		} else {
			router.replace({ pathname: "/" }, undefined, { scroll: false });
		}
	}, [pageNum, router.pathname]);
	// console.log(toggleGrid);

	useEffect(() => {
		if (router.pathname === "/") {
			setPageNum(1);
		}
		// When the pageNum changes, let's re-fetch the data
	}, [router.pathname]);

	useEffect(() => {
		// When the pageNum changes, let's re-fetch the data
		fetchSpecies(pageNum);
	}, [pageNum]);

	const nextClick = () => {
		setPageNum(pageNum + 1);
	};

	const prevClick = () => {
		setPageNum(pageNum - 1);
	};

	return (
		<Container>
			{/* <Head>
				<title>Page {pageNum}</title>
			</Head> */}
			<Wrapper>
				<PaginationControls
					prevClick={prevClick}
					nextClick={nextClick}
					pageNum={pageNum}
					species={species}
					totalPosts={totalPosts}
				/>

				<div>
					{species &&
						species.map((post) => (
							<ListPreview
								key={post.slug}
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								slug={post.slug}
								excerpt={post.excerpt}
								toggleGrid={toggleGrid}
								websiteURL={post.url}
							/>
						))}
				</div>
				<PaginationControls
					prevClick={prevClick}
					nextClick={nextClick}
					pageNum={pageNum}
					species={species}
					totalPosts={totalPosts}
				/>
			</Wrapper>
		</Container>
	);
};

export default Listings;
