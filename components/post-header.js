import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import { imageBuilder } from "../lib/sanity";
import Link from "next/link";
export default function PostHeader({ title, coverImage, date, author }) {
	return (
		<>
			<div className="mb-4 md:mb-8 -mx-5 sm:mx-0">
				<CoverImage title={title} imageObject={coverImage} url={coverImage} />
			</div>

			<div className="flex justify-between items-center">
				<PostTitle>{title}</PostTitle>
				<div className="mb-6 text-3xl">
					{/* <Date dateString={date} /> */}
					<Link href="/">
						<a style={{ color: "black" }} className="hover:underline">
							View Website↗
						</a>
					</Link>
					<br />
					<Link href="/">
						<a style={{ color: "black" }} className="hover:underline">
							Return Home
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
