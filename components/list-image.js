import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
	img {
		width: 100%;
		max-width: 600px;
		min-width: 600px;
		transition: 0.5s;
		/* mix-blend-mode: difference;
		filter: invert(1); */
	}

	@media (max-width: 1280px) {
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
	}
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

	const image = (
		<Container>
			{/* <Image
				quality={100}
				width={"300px"}
				height={"250px"}
				layout="fill"
				alt={`Cover Image for ${title}`}
				className={cn("shadow-small custom-img", {
					"hover:shadow-medium transition-shadow duration-300": slug,
				})}
				src={imageBuilder(imageObject).url()}
			/> */}
			<img
				alt={`Cover Image for ${title}`}
				src={imageBuilder(imageObject).url()}
			/>
		</Container>
	);

	return (
		<div>
			{slug ? (
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
}
