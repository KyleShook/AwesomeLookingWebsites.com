import Header from "../components/header";
import HeaderContainer from "../components/headerContainer";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<HeaderContainer>
				<Header />
			</HeaderContainer>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
