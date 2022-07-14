import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
	width: 100%;

	& > span {
		position: unset !important;
	}

	.custom-img {
		object-fit: contain;
		width: 100% !important;
		position: relative !important;
		height: unset !important;
	}
`;

export default function CoverImage({
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
			<Image
				quality={100}
				layout="fill"
				alt={`Cover Image for ${title}`}
				className={cn("shadow-small custom-img", {
					"hover:shadow-medium transition-shadow duration-300": slug,
				})}
				src={imageBuilder(imageObject).url()}
			/>
		</Container>
	);

	return (
		<div
			className={cn("shadow-small -mx-5 sm:mx-0", {
				"hover:shadow-medium transition-shadow duration-300": slug,
			})}
			style={{
				maxHeight: isPostPage ? " none" : isGrid,
				overflow: "hidden",
			}}
		>
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
