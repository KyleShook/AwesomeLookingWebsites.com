import React, { useState, useEffect } from "react";
import client from "../lib/sanity";
import { useRouter } from "next/router";
import PaginationControls from "./PaginationControls";
import { ImageContainer, Card } from "@components";
import {
	Container,
	Wrapper,
	Toggle,
	ToggleContainer,
	TotalCount,
} from "./Listings.styled ";

const Listings = ({ posts }) => {
	const [species, setSpecies] = useState();
	const [totalPosts, setTotalPosts] = useState([]);

	const [pageNum, setPageNum] = useState(1);
	const router = useRouter();

	const [grid, setGrid] = useState(false);

	const toggleGrid = () => {
		if (!grid) {
			setGrid(true);
		} else {
			setGrid(false);
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
			`
      *[_type == "post"] | order(publishedAt desc){
        ${postFields}
      }[0..12]
      [(($pageNum - 1) * 12)...($pageNum * 12)]
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
		<Container id="top" style={{ paddingTop: "30px" }}>
			<ToggleContainer>
				<Toggle onClick={toggleGrid}>
					{grid ? (
						<img src="/icons/bxs-rectangle.svg" alt="" />
					) : (
						<img src="/icons/bxs-grid.svg" alt="" />
					)}
				</Toggle>
			</ToggleContainer>
			<Wrapper style={{ paddingTop: "30px" }}>
				{totalPosts && <TotalCount> Current count: {totalPosts} </TotalCount>}
				<ImageContainer grid={grid}>
					{species &&
						species.map((post) => (
							<>
								<Card
									key={post.slug}
									title={post.title}
									coverImage={post.coverImage}
									slug={post.slug}
									toggleGrid={grid}
									websiteURL={post.url}
								/>
							</>
						))}
				</ImageContainer>

				<PaginationControls
					prevClick={prevClick}
					nextClick={nextClick}
					pageNum={pageNum}
					species={species}
					totalPosts={totalPosts}
					style={{ marginTop: "20px" }}
					anchor
				/>
			</Wrapper>
		</Container>
	);
};

export default Listings;
