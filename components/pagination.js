import React, { useState } from "react";
import client from "../lib/sanity";
import PostPreview from "../components/post-preview";

// Don't worry if you aren't used to React, focus on fetchSpecies
const EdibleSpecies = () => {
	const [species, setSpecies] = useState();
	const [pageNum, setPageNum] = useState(1);
	const [toggleGrid, setToggleGrid] = useState("3");

	const swap = () => {
		if (toggleGrid !== 2) {
			setToggleGrid(2);
		} else {
			setToggleGrid(3);
		}
	};

	React.useEffect(() => {
		// When the pageNum changes, let's re-fetch the data
		fetchSpecies(pageNum);
	}, [pageNum]);

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
      }[0..6]
      [(($pageNum - 1) * 6)...($pageNum * 6)]
    `,
			{
				// The only thing we're changing is the pageNum param
				pageNum: posts,
			}
		);
		// With the data, change the state of this component:
		setSpecies(newSpecies);
	}
	console.log(pageNum, species);
	return (
		<>
			<button disabled={pageNum === 1} onClick={() => setPageNum(pageNum - 1)}>
				Prev page
			</button>
			<button
				style={{ marginLeft: " 12px" }}
				disabled={species?.length <= 5}
				onClick={() => setPageNum(pageNum + 1)}
			>
				Next page
			</button>
			<button style={{ marginLeft: " 36px" }} onClick={swap}>
				Swap
			</button>
			<div
				className={`grid grid-cols-1 md:grid-cols-${toggleGrid} md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32 gap-8`}
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
						/>
					))}
			</div>
		</>
	);
};

export default EdibleSpecies;
