import Container from "./container";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="pt-12 pb-12 text-center text-xl ">
			<Container>
				<Link href="/">
					{/* <a className="hover:underline">👀 alw</a> */}
					<a className="font-bold underline hover:no-underline underline-offset-2">
						AWESOME LOOKING WEBSITES
					</a>
				</Link>
				{/* <br />
				2022 */}
			</Container>
		</footer>
	);
}
