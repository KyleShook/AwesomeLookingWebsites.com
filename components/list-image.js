import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
	width: 100%;
	max-width: 400px;
	min-width: 300px;
	transition: 0.5s;

	* {
		width: 100%;
		max-width: 400px;
		min-width: 300px;
		transition: 0.5s;
	}

	@media (max-width: 800px) {
		max-width: none;

		* {
			max-width: none;
		}
	}
	/* .custom-img {
		width: 100%;
		max-width: 600px;
		min-width: 600px;
		transition: 0.5s;
		/* mix-blend-mode: difference;
		filter: invert(1); 
	} */

	/* .custom-img {
		object-fit: contain;
		width: 100% !important;
		position: relative !important;
		height: unset !important;
		
		transition: 0.5s !important;
	}

	.unset-img {
		width: 100%;
	}
	.unset-img > div {
		position: unset !important;
	} */

	/* @media (max-width: 1280px) {
		img {
			max-width: 400px;
			min-width: 400px;
		}
	}
	@media (max-width: 1100px) {
		img {
			max-width: 300px;
			min-width: 300px;
		}
	}

	@media (max-width: 650px) {
		img {
			max-width: 600px;
			min-width: 300px;
		}
	} */
`;

export default function ListImage({
	title,
	url,
	imageObject,
	slug,
	toggleGrid,
}) {
	const router = useRouter();

	const isPostPage = router.pathname.includes("/posts");

	const isGrid = toggleGrid === 3 ? "280px" : "430px";

	// const image = (
	// 	<Image
	// 		quality={100}
	// 		// width="100%"
	// 		// height="100%"
	// 		// objectFit="contain"
	// 		alt={`Cover Image for ${title}`}
	// 		className={cn("shadow-small custom-img", {
	// 			"hover:shadow-medium transition-shadow duration-300": slug,
	// 		})}
	// 		src={imageBuilder(imageObject).url()}
	// 	/>

	// 	<img alt={`${title}'s website`} src={imageBuilder(imageObject).url()} />
	// );

	return (
		<Container>
			{/* {slug ? (
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)} */}
			<Image
				quality={100}
				width={400}
				height={245}
				layout="intrinsic"
				alt={`Cover Image for ${title}`}
				className={cn("shadow-small custom-img", {
					"hover:shadow-medium transition-shadow duration-300": slug,
				})}
				src={imageBuilder(imageObject).url()}
			/>
			{/* <img alt={`${title}'s website`} src={imageBuilder(imageObject).url()} /> */}
		</Container>
	);
}
