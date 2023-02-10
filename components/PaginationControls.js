import {
	Previous,
	Next,
	Container,
	PageNumber,
} from "./PaginationControls.styled";

const PaginationControls = (props) => {
	const { pageNum, nextClick, prevClick, totalPosts, anchor } = props;

	const count = pageNum * 12;

	const totalPages = Math.ceil(totalPosts / 12);

	const lastPage = count >= totalPosts;

	return (
		<Container>
			<Previous
				pageNum={pageNum}
				onClick={prevClick}
				style={{ textDecoration: pageNum <= 1 ? "line-through" : "none" }}
				href={pageNum <= 1 ? null : "#top"}
				as={pageNum <= 1 ? "span" : "a"}
			>
				Previous
			</Previous>

			<PageNumber>
				Page {pageNum} of {totalPages}
			</PageNumber>
			<Next
				lastPage={lastPage}
				onClick={nextClick}
				style={{
					textDecoration: lastPage ? "line-through" : "none",
				}}
				href={lastPage ? null : "#top"}
				as={lastPage ? "span" : "a"}
			>
				Next
			</Next>
		</Container>
	);
};

export default PaginationControls;
