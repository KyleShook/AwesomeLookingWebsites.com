import Avatar from "./avatar";
import Date from "./date";
import ListImage from "./list-image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import {
	ListingContainer,
	InfoContainer,
	ListTitle,
	BottomContainer,
} from "./list-preview.styled";
export default function ListPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
	websiteURL,
	toggleGrid,
}) {
	return (
		<ListingContainer>
			<div>
				<ListImage
					slug={slug}
					title={title}
					imageObject={coverImage}
					url={imageBuilder(coverImage).url()}
					toggleGrid={toggleGrid}
				/>
			</div>
			<InfoContainer>
				<ListTitle className="text-4xl mb-3 fb">
					<Link as={`/posts/${slug}`} href="/posts/[slug]">
						<a className="hover:underline">{title}</a>
					</Link>
				</ListTitle>
				<BottomContainer>
					<a
						style={{ fontSize: "30px" }}
						href={websiteURL}
						target="_blank"
						rel="noopener noreferrer"
					>
						View Website↗
					</a>
					<Date dateString={date} />
				</BottomContainer>
			</InfoContainer>
			<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
		</ListingContainer>
	);
}
