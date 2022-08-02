import Link from "next/link";

export default function Header() {
	return (
		// <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 ">
		<>
			<Link href="/">
				{/* <a className="hover:underline">👀 alw</a> */}
				{/* <a className="hover:underline">👀</a> */}
				<a className="hover:underline text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 m-0">
					ALW
				</a>
			</Link>
			{/* <p>Showcasing awesome looking websites from all over the internet.</p> */}
		</>
	);
}
