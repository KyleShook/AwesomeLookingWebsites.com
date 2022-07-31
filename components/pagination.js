import React, { useState, useEffect } from "react";
import client from "../lib/sanity";
import PostPreview from "../components/post-preview";
import { useRouter } from "next/router";
import { Container, Wrapper } from "./pagination.styled";
import Head from "next/head";

// Don't worry if you aren't used to React, focus on fetchSpecies
const EdibleSpecies = () => {
	const [species, setSpecies] = useState();
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

	async function fetchSpecies(posts) {
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
		const newSpecies = await client.fetch(
			// Notice how the query is static:
			`
      *[_type == "post"] | order(publishedAt desc){
        ${postFields}
      }[0..10]
      [(($pageNum - 1) *10)...($pageNum * 10)]
    `,
			{
				// The only thing we're changing is the pageNum param
				pageNum: posts,
			}
		);
		// With the data, change the state of this component:
		setSpecies(newSpecies);
	}

	const nextClick = () => {
		setPageNum(pageNum + 1);
	};

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
	return (
		<Container>
			{/* <Head>
				<title>Page {pageNum}</title>
			</Head> */}
			<Wrapper>
				<div className="mb-12">
					{/* {pageNum !== 1 && (
						<button
							disabled={pageNum === 1}
							onClick={() => setPageNum(pageNum - 1)}
							style={{ opacity: pageNum === 1 ? ".5" : "1" }}
						>
							⬅ Previous
						</button>
					)} */}
					<button
						disabled={pageNum === 1}
						onClick={() => setPageNum(pageNum - 1)}
						style={{ opacity: pageNum === 1 ? ".5" : "1" }}
					>
						Previous
					</button>

					{/* {species?.length === 3 && (
						<button
							onClick={nextClick}
							disabled={species?.length <= 2}
							style={{
								marginLeft: "12px",
								opacity: species?.length <= 2 ? ".5" : "1",
							}}
						>
							Next ▶
						</button>
					)} */}
					<button
						onClick={nextClick}
						disabled={species?.length <= 2}
						style={{
							marginLeft: "12px",
							opacity: species?.length <= 2 ? ".5" : "1",
						}}
					>
						Next
					</button>
					{/* <button style={{ marginLeft: " 36px" }} onClick={swap}>
						Swap
					</button> */}
				</div>

				<div
					className={`grid ${
						toggleGrid === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
					} ${
						toggleGrid === 3 ? "md:grid-cols-2" : "md:grid-cols-1"
					} md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32 gap-8`}
				>
					{species &&
						species.map((post) => (
							<PostPreview
								key={post.slug}
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								slug={post.slug}
								excerpt={post.excerpt}
								toggleGrid={toggleGrid}
							/>
						))}
				</div>
			</Wrapper>
		</Container>
	);
};

export default EdibleSpecies;
