export default function HeaderContainer({ children }) {
	return (
		<div className="xl:container md:mx-auto sm:mx-3 md:px-5">{children}</div>
		// Sticky Container
		// <div className="xl:container md:mx-auto sm:mx-3 px-5 sticky top-0 h-10 z-10">
		// 	{children}
		// </div>
	);
}
