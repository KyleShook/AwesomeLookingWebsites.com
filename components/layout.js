import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<main className="min-h-screen">
				<>{children}</>
			</main>
			<Footer />
		</>
	);
}
