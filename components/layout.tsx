import React from "react";
import styles from "../styles/Layout.module.css";


interface Props {
	children: JSX.Element | JSX.Element[]
}


const Layout = (props:Props) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				{props.children}
			</main>

			<footer className={styles.footer}>
				<a href="#" target="_blank" rel="noopener noreferrer">
          Powered by businessnamehere
				</a>
			</footer>
		</div>
	);
};


export default Layout;