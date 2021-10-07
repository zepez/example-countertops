import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>Countertop Solutions</title>
				<meta name="description" content="Description goes here" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<span>Hello world</span>
		</Layout>
	);
};


export default Home;
