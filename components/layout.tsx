import React from "react";
import Head from "next/head";
import DesktopNav from "./navigation/desktop";
import MobileNav from "./navigation/mobile";
import Footer from "./navigation/footer";
import styles from "../styles/Layout.module.css";


interface Props {
	children: JSX.Element | JSX.Element[]
}


const Layout = (props:Props) => {
	return (
		<div className={styles.container}>
			<Head>
				<script async src="/main.js" />
			</Head>

			<main className={styles.main}>
				<DesktopNav />
				<MobileNav />
				<div className="max-width">
					{props.children}
				</div>
			</main>

			<footer className={styles.footer}>
				<Footer />
			</footer>
		</div>
	);
};


export default Layout;