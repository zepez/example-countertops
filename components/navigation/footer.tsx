


const Footer = () => {
	return (
		<div className="px-4 xl:px-10 bg-red-50 py-3 mt-16">
			{/* <img src="/waves.svg" alt="" style={{ height: 300, width: "100vw" }} /> */}
			<section className="py-12 my-12 px-8 rounded-sm mx-auto" style={{ maxWidth: 1200 }}>
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap justify-between items-center -mx-4">
						<div className="w-full lg:w-2/6 px-4">
							<a className="inline-block mb-6 text-lg font-semibold" href="#">
								<img className="h-16" src="/logo.svg" alt="" width="auto" />
							</a>
							<p className="hidden lg:block text-sm">All rights reserved © 2021</p>
						</div>
						<div className="w-full lg:w-4/6 px-4">
							<div className="flex flex-wrap items-center justify-end">
								<ul className="w-full lg:w-auto inline-flex flex-wrap mb-4 lg:mb-0 md:mr-6 lg:mr-12">
									<li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="#">About</a></li>
									<li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="#">Company</a></li>
									<li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="#">Services</a></li>
									<li className="mb-2 md:mb-0"><a className="text-sm font-medium" href="#">Testimonials</a></li>
								</ul>
								<a className="inline-block mr-auto lg:mr-0 py-4 px-8 text-sm font-medium text-white leafing-normal bg-red-400 hover:bg-red-300 rounded" href="#">Get in Touch</a>
							</div>
							<p className="mt-6 lg:hidden text-sm">All rights reserved © 2021</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};


export default Footer;