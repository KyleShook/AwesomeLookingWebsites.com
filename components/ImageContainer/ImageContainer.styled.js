import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (max-width: 1100px) {
		justify-content: center;
	}
`;
