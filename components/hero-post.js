import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section>
			<div >
				<CoverImage
					slug={slug}
					imageObject={coverImage}
					title={title}
					url={coverImage}
				/>
			</div>
			<div>
				<div>
					<h3 >
						<Link as={`/posts/${slug}`} href="/posts/[slug]">
							<a >{title}</a>
						</Link>
					</h3>
					<div >
						<Date dateString={date} />
					</div>
				</div>
				{/* <div>
        
			</div>
		</section>
	);
}
