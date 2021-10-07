import Image from "next/image";
import Link from "next/link";


const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Countertops", href: "/countertops" },
	{ name: "Care & Maintenance", href: "/care" }
];


const DesktopNav = () => {
	return (
		<div className="bg-white py-3 px-4 xl:px-10 mb-8 md:mb-12" style={{ borderBottom: "2px solid gray" }}>
			<nav className="flex justify-between items-center mx-auto px-8 my-3 rounded-sm" style={{ maxWidth: 1200 }}>
				<Link href="/" passHref>
					<img src="/logo.svg" className="h-10 md:h-16" alt="" />
				</Link>
				<div className="lg:hidden ml-auto">
					<button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
						<svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<div className="hidden lg:flex w-auto lg:w-4/5 lg:pl-16 ml-auto">
					<ul className="flex items-center space-x-12">
						{navLinks.map((link, linkIndex) => {
							return <li key={linkIndex} className="text-sm font-medium"><Link href={link.href}>{link.name}</Link></li>;
						})}
					</ul>
					<div className="ml-auto"><a className="inline-block py-1 px-8 text-sm leading-normal font-medium bg-red-400 hover:bg-red-300 text-white rounded transition duration-200" href="/contact">Contact Us</a></div>
				</div>
			</nav>
		</div>
	);
};


export default DesktopNav;