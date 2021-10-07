import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import DesktopNav from "../components/navigation/desktop";
import MobileNav from "../components/navigation/mobile";
import Footer from "../components/navigation/footer";
import Image from "next/image";


const Home: NextPage = () => {
	return (
		<>
			<Head>
				<script async src="/main.js" />
			</Head>
			<section className="relative overflow-y-hidden">
				<div className="hidden lg:block absolute top-0 left-0 w-2/5 h-full z-10">
					<Image layout="fill" className="object-cover" src="/home/section1.webp" alt="" />
				</div>
				<div className="relative z-20">
					<DesktopNav />
				</div>
				<div className="relative container px-4 mx-auto pb-20">
					<div className="w-full lg:w-3/5 lg:pl-16 ml-auto">
						<div className="mt-10 lg:mt-20 max-w-2xl lg:pr-10">
							<div className="max-w-xl">
								<h2 className="mb-2 lg:mb-4 text-4xl lg:text-5xl font-bold">Transform Your Kitchen.</h2>
								<h3 className="mb-4 lg:mb-6 text-2xl lg:text-3xl">Support your local community.</h3>
								<p className="max-w-md mb-6 lg:mb-14 text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem harum amet maiores officiis hic vel, officia debitis minima, neque iusto velit reiciendis? Alias sit tenetur quam nam culpa commodi reiciendis.</p>
							</div>
						</div>
						<div className="flex flex-wrap mb-16 lg:mb-20">
							<a className="block w-full md:w-auto text-center mb-2 py-4 px-8 md:mr-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200" href="#">
								Get a quote
							</a>
							<a className="block w-full md:w-auto text-center mb-2 py-4 px-8 text-sm font-medium rounded border hover:border-gray-300" href="#">
								Learn more
							</a>
						</div>
					</div>
				</div>

				<MobileNav />
			</section>


			<section className="lg:-mt-16">
				<div className="pt-20 pb-20 bg-red-50">
					<div className="container px-4 mb-10 mx-auto">
						<div className="max-w-3xl mx-auto text-center">
							<span className="text-red-500">Committed to you</span>
							<h2 className="mt-8 mb-6 lg:mb-10 text-4xl font-semibold">Serving the Wake Forest Community</h2>
							<p className="text-xl text-gray-500">Give your home a look that’s uniquely yours with high-quality custom countertops from Countertop Solutions, based in Clymer, NY. Countertop Solutions has been transforming homes all over the Wake Forest area.</p>
						</div>
					</div>
					<div className="max-w-4xl mx-auto px-4">
						<img className="mx-auto rounded-lg object-cover" src="/home/section2.jpg" alt="" />
					</div>
				</div>
			</section>


			<section className="relative pt-20">
				<div className="container px-5 mx-auto">
					<div className="max-w-3xl mx-auto mb-12 lg:mb-20 text-center">
						<span className="text-xs text-blue-400 font-semibold">What's new at Shuffle</span>
						<h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">Lorem ipsum dolor sit amet consectutar</h2>
						<p className="text-xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
					</div>
					<div className="flex flex-wrap -m-3">
						<div className="w-full lg:w-1/2 p-3">
							<div className="p-6 border rounded-xl">
								<div className="flex flex-wrap items-center -mx-5">
									<div className="w-full md:w-1/3 px-5 mb-4 lg:mb-0">
										<img className="w-full md:w-40 h-52 object-cover rounded-xl" src="https://images.unsplash.com/photo-1544717305-f9c88f2897bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
									</div>
									<div className="w-full md:w-2/3 px-5">
										<h3 className="text-2xl font-semibold font-heading mb-1">Esther Howard</h3>
										<p className="mb-6 text-gray-500">CEO &amp; Founder</p>
										<p className="text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full lg:w-1/2 p-3">
							<div className="p-6 border rounded-xl">
								<div className="flex flex-wrap items-center -mx-5">
									<div className="w-full md:w-1/3 px-5 mb-4 lg:mb-0">
										<img className="w-full md:w-40 h-52 object-cover rounded-xl" src="https://images.unsplash.com/photo-1525129498994-580709352e20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
									</div>
									<div className="w-full md:w-2/3 px-5">
										<h3 className="text-2xl font-semibold font-heading mb-1">Cameron Williamson</h3>
										<p className="mb-6 text-gray-500">CEO &amp; Founder</p>
										<p className="text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full lg:w-1/2 p-3">
							<div className="p-6 border rounded-xl">
								<div className="flex flex-wrap items-center -mx-5">
									<div className="w-full md:w-1/3 px-5 mb-4 lg:mb-0">
										<img className="w-full md:w-40 h-52 object-cover rounded-xl" src="https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt="" />
									</div>
									<div className="w-full md:w-2/3 px-5">
										<h3 className="text-2xl font-semibold font-heading mb-1">Ralph Edwards</h3>
										<p className="mb-6 text-gray-500">CEO &amp; Founder</p>
										<p className="text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full lg:w-1/2 p-3">
							<div className="p-6 border rounded-xl">
								<div className="flex flex-wrap items-center -mx-5">
									<div className="w-full md:w-1/3 px-5 mb-4 lg:mb-0">
										<img className="w-full md:w-40 h-52 object-cover rounded-xl" src="https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
									</div>
									<div className="w-full md:w-2/3 px-5">
										<h3 className="text-2xl font-semibold font-heading mb-1">Ralph Howard</h3>
										<p className="mb-6 text-gray-500">CEO &amp; Founder</p>
										<p className="text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};


export default Home;


{/* <Layout>
	<Head>
		<title>Countertop Solutions</title>
		<meta name="description" content="Description goes here" />
		<link rel="icon" href="/favicon.ico" />
	</Head>
	<div className="main-background w-full mx-auto p-4 rounded-sm">
		<h1 className="text-5xl text-center mt-16 text-bold">Transform Your Kitchen</h1>
		<p className="text-center mt-4">GRANITE, QUARTZ, MARBLE, SOAPSTONE COUNTERTOPS</p>
	</div>
</Layout> */}