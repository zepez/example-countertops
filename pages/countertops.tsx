import type { NextPage } from "next";
import Layout from "../components/layout";
import Link from "next/link";



const TopType = () => {
	return (
		<div className="flex flex-wrap mb-12">
			<div className="h-64 w-full md:w-1/4 mx-auto mb-8 md:mb-0" style={{ boxShadow: "1rem 1rem #FEF1F2", minWidth: 300 }}>
				<img className="w-full h-full object-cover rounded-sm" src="https://lirp.cdn-website.com/3ee1855a/dms3rep/multi/opt/sm-gallery_16-2880w.jpg" alt="" />
			</div>
			
			<div className="flex items-center w-3/4 pl-8">
				<span>
					<h2 className="mb-4 text-4xl font-semibold">Granite</h2>
					<p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem nihil corrupti nesciunt dolor, dolore fugit adipisci repellat recusandae vitae, nulla quo ipsum dolorum veritatis sunt labore asperiores voluptates laborum.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem nihil corrupti nesciunt dolor, dolore fugit adipisci repellat recusandae vitae, nulla quo ipsum dolorum veritatis sunt labore asperiores voluptates laborum.</p>
				</span>
			</div>
		</div>
	);
};



const Countertops: NextPage = () => {
	return (
		<Layout>
			<TopType />
			<TopType />
			<TopType />
		</Layout>
	);
};


export default Countertops;