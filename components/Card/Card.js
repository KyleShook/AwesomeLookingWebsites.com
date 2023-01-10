import Link from "next/link";
import Image from "next/image";
import {
	CardContainer,
	LinkIcon,
	CardInfo,
	CardImageContainer,
} from "./Card.styled";
import React from "react";
import { imageBuilder } from "../../lib/sanity";

function Card({ title, coverImage, websiteURL, toggleGrid }) {
	return (
		<CardContainer grid={toggleGrid}>
			<CardImageContainer grid={toggleGrid}>
				<Image
					grid={toggleGrid}
					src={imageBuilder(coverImage).url()}
					alt={title + " website"}
					layout="fill"
				/>
			</CardImageContainer>
			<CardInfo>
				<p>{title}</p>
				<Link passHref href={websiteURL}>
					<LinkIcon target={"_blank"} rel="noopener noreferrer">
						View Website
						<img src="/icons/external.png" alt="" />
					</LinkIcon>
				</Link>
			</CardInfo>
		</CardContainer>
	);
}

export default Card;
