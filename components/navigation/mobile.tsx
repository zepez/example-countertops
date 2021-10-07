import Link from "next/link";


const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Countertops", href: "/countertops" },
	{ name: "Care & Maintenance", href: "/care" }
];


const MobileNav = () => {
	return (
		<div className="hidden navbar-menu relative z-50">
			<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
			<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
				<div className="flex items-center mb-8">
					<button className="navbar-close">
						<svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
				<div>
					<ul>
						{navLinks.map((link, linkIndex) => {
							return <li key={linkIndex} className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded mb-1"><Link href={link.href}>{link.name}</Link></li>;
						})}
					</ul>
				</div>
				<div className="mt-auto">
					<div className="pt-6"><a className="block py-3 text-center text-sm leading-normal bg-red-50 hover:bg-red-100 text-red-300 font-semibold rounded transition duration-200" href="#">Contact Us</a></div>
					<p className="mt-6 mb-4 text-sm text-center text-gray-500">
						<span>© 2021 All rights reserved.</span>
					</p>
				</div>
			</nav>
		</div>
	);
};


export default MobileNav;