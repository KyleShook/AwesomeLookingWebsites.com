import { Previous, Next, Container } from "./PaginationControls.styled";

const PaginationControls = (props) => {
	const { pageNum, nextClick, prevClick, totalPosts, anchor } = props;

	const count = pageNum * 8;

	const totalPages = Math.ceil(totalPosts / 8);

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
			<p style={{ fontSize: "24px" }}>
				Page {pageNum} of {totalPages}
			</p>
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
