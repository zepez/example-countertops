import type { NextPage } from "next";
import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";


const Home: NextPage = () => {
	return (
		<Layout>
			<section className="flex mx-4 justify-center h-auto mb-12 lg:mb-0">
				<div className="hidden lg:block lg:w-2/5 z-10">
					<Image width="100%" height="130vh" layout="responsive" objectFit="cover" className="rounded-md" src="/home/section1.webp" alt="" />
				</div>

				<div className="w-full lg:w-3/5">
					<div className="lg:p-8 mt-8 max-w-md mx-auto lg:max-w-none bg-white rounded-sm">
						<h2 className="mb-2 lg:mb-4 text-4xl lg:text-5xl font-bold">Transform Your Kitchen.</h2>
						<h3 className="mb-4 lg:mb-6 text-2xl lg:text-3xl">Support your local community.</h3>
						<p className="max-w-md mb-6 lg:mb-14 text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem harum amet maiores officiis hic vel, officia debitis minima, neque iusto velit reiciendis? Alias sit tenetur quam nam culpa commodi reiciendis.</p>
						
						<div className="flex flex-wrap">
							<a className="block w-full md:w-auto text-center mb-2 py-4 px-8 md:mr-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200" href="/contact">
								Get a quote
							</a>
							<a className="block w-full md:w-auto text-center mb-2 py-4 px-8 text-sm font-medium rounded border hover:border-gray-300" href="/about">
								Learn more
							</a>
						</div>
					</div>
				</div>
			</section>


			<section className="lg:-mt-16" style={{ marginBottom: 400 }}>
				<div className="lg:py-20 py-10 bg-red-50 rounded-md">
					<div className="container px-4 mb-6 pb-12 lg:pb-5 mx-auto bg-red-50 rounded-md">
						<div className="max-w-3xl mx-auto text-center">
							<span className="text-red-500">Committed to you</span>
							<h2 className="mt-8 mb-6 lg:mb-10 text-4xl font-semibold">Serving the Wake Forest Community</h2>
							<p className="text-xl text-gray-500">Give your home a look that’s uniquely yours with high-quality custom countertops from Countertop Solutions, based in Clymer, NY. Countertop Solutions has been transforming homes all over the Wake Forest area.</p>
						</div>
					</div>
					<div className="max-w-4xl mx-auto px-4" style={{ marginBottom: -400 }}>
						<Image width="100%" height="48rem" layout="responsive" objectFit="cover" className="mx-auto rounded-md object-cover" src="/home/section2.jpg" alt="" />
					</div>
				</div>
			</section>


			<section>
				<h2 className="mb-10 text-center text-4xl font-semibold">Why choose us?</h2>

				<div className="grid grid-cols-1 md:grid-cols-2">
					<Why name="Quality servce ⭐️⭐️⭐️⭐️⭐️" link="/about" image={{ src: "/home/section3_1.webp", alt: "" }} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, explicabo. Optio, quae neque non, aut perspiciatis ea consectetur aliquid saepe fuga molestias deleniti dignissimos exercitationem, excepturi laborum incidunt voluptatum recusandae." />
					<Why name="A price you can afford 💸" link="/pricing" image={{ src: "/home/section3_2.webp", alt: "" }} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, explicabo. Optio, quae neque non, aut perspiciatis ea consectetur aliquid saepe fuga molestias deleniti dignissimos exercitationem, excepturi laborum incidunt voluptatum recusandae." />
				</div>
			</section>
		</Layout>
	);
};


interface WhyProps {
	name: string,
	description: string,
	image: {
		src: string
		alt: string
	}
	link: string
}


const Why = (props:WhyProps) => {
	return (
		<Link href={props.link} passHref>
			<div className="flex flex-wrap items-center px-4 mb-8 cursor-pointer">
				<div className="w-full lg:w-2/5 lg:pr-8 mb-4 lg:mb-0">
					<img className="rounded-md object-cover h-64 mx-auto" src={props.image.src} alt={props.image.alt} />
				</div>
				<div className="w-full lg:w-3/5 flex-shrink">
					<p className="text-2xl font-bold mb-1">{props.name}</p>
					<p>{props.description}</p>
					<p className="text-sm text-blue-400 mt-2">Learn more...</p>
				</div>
			</div>
		</Link>
	);
};


export default Home;