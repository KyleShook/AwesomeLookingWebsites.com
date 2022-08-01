import Header from "../components/header";
import HeaderContainer from "../components/headerContainer";
import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />

				<meta
					name="description"
					content="Showcasing awesome looking websites from all over the internet."
				/>

				<meta
					property="og:url"
					content="https://www.awesomelookingwebsites.com/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Awesome Looking Websites" />
				<meta
					property="og:description"
					content="Showcasing awesome looking websites from all over the internet."
				/>
				<meta property="og:image" content="%PUBLIC_URL%/images/social.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="awesomelookingwebsites.com" />
				<meta
					property="twitter:url"
					content="https://www.awesomelookingwebsites.com/"
				/>
				<meta name="twitter:title" content="Awesome Looking Websites" />
				<meta
					name="twitter:description"
					content="Showcasing awesome looking websites from all over the internet."
				/>
				<meta name="twitter:image" content="%PUBLIC_URL%/images/social.png" />
			</Head>
			<HeaderContainer>
				<Header />
			</HeaderContainer>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
