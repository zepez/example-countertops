import Link from "next/link";


const Footer = () => {
	return (
		<section className="max-wdith flex flex-wrap justify-around w-full py-8 mt-16 bg-red-50">

			<div className="">
				<Link href="/" passHref>
					<img className="h-12 mb-4 mx-auto cursor-pointer" src="/logo.svg" alt="" width="auto" />
				</Link>
				<p className="hidden lg:block text-sm">All rights reserved © 2021</p>
			</div>

			<div className="flex items-center text-center text-sm">
				<ul className="flex flex-wrap justify-center">
					<li className="px-4 py-1 my-2"><a className=" font-medium" href="#">Home</a></li>
					<li className="px-4 py-1 my-2"><a className="" href="#">About</a></li>
					<li className="px-4 py-1 my-2"><a className="" href="#">Countertops</a></li>
					<li className="px-4 py-1 my-2"><a className="" href="#">Care & Maintenance</a></li>
					<li className="px-4 py-1 my-2 bg-red-400 hover:bg-red-300 rounded-lg text-white"><a className="" href="#">Get in touch</a></li>
				</ul>
			</div>

		</section>
	);
};


export default Footer;