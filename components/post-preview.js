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
}) {
	return (
		<div>
			<div className="mb-5">
				<CoverImage
					slug={slug}
					title={title}
					imageObject={coverImage}
					url={imageBuilder(coverImage).url()}
				/>
			</div>
			<div className="text-lg mb-4">
				<h3 className="text-3xl mb-3 leading-snug fb">
					<Link as={`/posts/${slug}`} href="/posts/[slug]">
						<a className="hover:underline">{title}</a>
					</Link>
				</h3>
				<Date dateString={date} />
			</div>
			<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
			{/* <Avatar name={author?.name} picture={author?.picture} /> */}
		</div>
	);
}
