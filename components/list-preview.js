import Date from "./date";
import ListImage from "./list-image";
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
				<ListTitle>{title}</ListTitle>
				<BottomContainer>
					<a href={websiteURL} target="_blank" rel="noopener noreferrer">
						View Website↗
					</a>
					<Date dateString={date} />
				</BottomContainer>
			</InfoContainer>
		</ListingContainer>
	);
}
