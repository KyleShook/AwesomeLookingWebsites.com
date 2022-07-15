import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import { imageBuilder } from "../lib/sanity";
export default function PostHeader({ title, coverImage, date, author }) {
	return (
		<>
			<div className="max-w-2xl">
				<div className="mb-6 text-3xl">
					<Date dateString={date} />
				</div>
			</div>
			<PostTitle>{title}</PostTitle>
			<div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
				<CoverImage title={title} imageObject={coverImage} url={coverImage} />
			</div>
		</>
	);
}
