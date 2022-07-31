import React, { useState, useEffect } from "react";
import client from "../lib/sanity";
import ListPreview from "./list-preview";
import { useRouter } from "next/router";
import { Container, Wrapper } from "./pagination.styled";
import Head from "next/head";
import PaginationControls from "./PaginationControls";

const Listings = ({ posts }) => {
	const [species, setSpecies] = useState();
	const [totalPosts, setTotalPosts] = useState([]);

	const [pageNum, setPageNum] = useState(1);

	const [toggleGrid, setToggleGrid] = useState(3);
	const router = useRouter();

	// const swap = () => {
	// 	if (toggleGrid !== 2) {
	// 		setToggleGrid(2);
	// 	} else {
	// 		setToggleGrid(3);
	// 	}
	// };

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
			`
      *[_type == "post"] | order(publishedAt desc){
        ${postFields}
      }[0..8]
      [(($pageNum - 1) * 8)...($pageNum * 8)]
    `,

			{
				pageNum: posts,
			}
		);
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

	useEffect(() => {
		fetchSpecies(pageNum);
	}, [pageNum]);

	useEffect(() => {
		const data = window.localStorage.getItem("ALW_PAGE_NUMBER");

		if (data !== null) {
			setPageNum(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem("ALW_PAGE_NUMBER", JSON.stringify(pageNum));
	}, [pageNum]);

	const nextClick = () => {
		setPageNum(pageNum + 1);
	};

	const prevClick = () => {
		setPageNum(pageNum - 1);
	};

	return (
		<Container id={"next"} style={{ paddingTop: "30px", marginTop: "-30px" }}>
			{/* <Head>
				<title>Page {pageNum}</title>
			</Head> */}
			<Wrapper id={"prev"} style={{ paddingTop: "30px", marginTop: "-30px" }}>
				<PaginationControls
					prevClick={prevClick}
					nextClick={nextClick}
					pageNum={pageNum}
					species={species}
					totalPosts={totalPosts}
					anchor
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
