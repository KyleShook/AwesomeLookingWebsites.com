import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
	toggleGrid,
}) {
	return (
		<div>
			<div>
				<CoverImage
					slug={slug}
					title={title}
					imageObject={coverImage}
					url={imageBuilder(coverImage).url()}
					toggleGrid={toggleGrid}
				/>
			</div>
			<div>
				<h3>
					<Link as={`/posts/${slug}`} href="/posts/[slug]">
						<a>{title}</a>
					</Link>
				</h3>
				<Date dateString={date} />
			</div>
			<p>{excerpt}</p>
		</div>
	);
}
