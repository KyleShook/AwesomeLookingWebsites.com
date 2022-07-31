import {
	Previous,
	Next,
	Container,
	PageNumber,
} from "./PaginationControls.styled";

const PaginationControls = (props) => {
	const { pageNum, nextClick, prevClick, totalPosts, anchor } = props;

	const count = pageNum * 10;

	const totalPages = Math.ceil(totalPosts / 10);

	const lastPage = count >= totalPosts;

	return (
		<Container className="mb-3 justify-between flex">
			<Previous
				pageNum={pageNum}
				disabled={pageNum <= 1}
				onClick={prevClick}
				style={{ textDecoration: pageNum <= 1 ? "line-through" : "none" }}
				href={"#prev"}
			>
				Previous
			</Previous>
			{/* <button style={{ marginLeft: " 36px" }} onClick={swap}>
                        Grid
                    </button> */}
			<PageNumber>
				Page {pageNum} of {totalPages}
			</PageNumber>
			<Next
				href={"#next"}
				lastPage={lastPage}
				onClick={nextClick}
				disabled={lastPage}
				style={{
					textDecoration: lastPage ? "line-through" : "none",
				}}
			>
				Next
			</Next>
		</Container>
	);
};

export default PaginationControls;
