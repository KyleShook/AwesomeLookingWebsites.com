import Header from "../components/header";
import Container from "../components/container";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Container>
				<Header />
			</Container>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
