import type { NextPage } from "next";
import Layout from "../components/layout";
import Link from "next/link";


interface ContactInfoProps {
	emoji: string
	type: string
	method: string
	link: string
}


const ContactInfo = (props:ContactInfoProps) => {
	return (
		<div className="text-center mx-auto mb-12" style={{ maxWidth: 400 }}>
			<span className="rounded-full text-3xl py-2 px-4 bg-red-50">{props.emoji}</span>
			<p className="mt-8 text-sm text-gray-400">{props.type}</p>
			<p className="mt-2 text-sm">
				<Link href={props.link} passHref>{props.method}</Link>
			</p>
		</div>
	);
};


const Contact: NextPage = () => {
	return (
		<Layout>
			<section className="max-width grid grid-cols-1 md:grid-cols-3">
				<ContactInfo emoji="📨" type="Email" method="contact​@countertopsolutions.com" link="mailto:contact@countertopsolutions.com"/>
				<ContactInfo emoji="🗺" type="Office" method="510 Glenwood Ave #10, Raleigh, NC 27603" link="https://www.google.com/maps/dir//wake+forest+piano+bar/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89ac5f42d47cc11f:0x9db9498eccf7767d?sa=X&ved=2ahUKEwignLvg97jzAhVqoHIEHft5Cb4Q9Rd6BAgJEAU"/>
				<ContactInfo emoji="☎️" type="Call" method="252-123-4567" link="tel:252-123-4567"/>
			</section>

			<section className="max-width bg-red-50 w-full p-8 rounded-md" style={{ paddingBottom: 250 }}>
			</section>

			<section className="bg-white mx-auto p-8 rounded-md shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: 1200, marginTop: -200 }}>
				<div>
					<h2 className="text-3xl text-center mb-2">Give us a visit</h2>
					<p className="text-sm text-center mb-8">Monday - Friday: 8am - 4pm</p>
					<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d827939.2130302456!2d-78.84174495314153!3d35.84563058241636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d35.7928658!2d-77.91674499999999!4m5!1s0x89ac5f42d47cc11f%3A0x9db9498eccf7767d!2swake%20forest%20piano%20bar!3m2!1d35.7872172!2d-78.6470415!5e0!3m2!1sen!2sus!4v1633633955516!5m2!1sen!2sus" width="100%" height="500" style={{border: "0"}} allowFullScreen={true} loading="lazy"></iframe>
				</div>
				<div>
					<h2 className="text-3xl text-center mb-2">Send us a message</h2>
					<p className="text-sm text-center mb-8">We&apos;ll get back to you soon</p>
					<form className="flex flex-col">
						<label>Email</label>
						<input className="bg-gray-100 mb-4" />
						<label>Phone</label>
						<input className="bg-gray-100 mb-4" />
						<label>Subject</label>
						<input className="bg-gray-100 mb-4" />
						<label>Message</label>
						<input className="bg-gray-100 mb-4" />

						<button type="submit" className="bg-red-400 rounded-md text-white py-2 mt-4 text-sm">Send</button>
					</form>
				</div>
			</section>
		</Layout>
	);
};


export default Contact;