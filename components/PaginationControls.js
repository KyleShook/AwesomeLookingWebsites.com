import { Previous, Next } from "./PaginationControls.styled";

const PaginationControls = (props) => {
	const { pageNum, nextClick, prevClick, totalPosts } = props;

	const count = pageNum * 10;

	const totalPages = Math.ceil(totalPosts / 10);

	const lastPage = count >= totalPosts;

	return (
		<div className="mb-3 justify-between flex">
			<Previous
				pageNum={pageNum}
				disabled={pageNum === 1}
				onClick={prevClick}
				style={{ textDecoration: pageNum === 1 ? "line-through" : "none" }}
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
				lastPage={lastPage}
				onClick={nextClick}
				disabled={lastPage}
				style={{
					textDecoration: lastPage ? "line-through" : "none",
				}}
			>
				Next
			</Next>
		</div>
	);
};

export default PaginationControls;
