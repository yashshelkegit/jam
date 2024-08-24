import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import MyComponents from "./MyComponents";

const HomePage = () => {
	const [headerRef, headerInView] = useInView({
		triggerOnce: false,
		threshold: 0.9,
	});
	const [aboutRef, aboutInView] = useInView({
		triggerOnce: false,
		threshold: 0.9,
	});
	const [servicesRef, servicesInView] = useInView({
		triggerOnce: false,
		threshold: 0.9,
	});
	const [contactRef, contactInView] = useInView({
		triggerOnce: false,
		threshold: 0.9,
	});

	return (
		<>
			<div className="min-h-screen bg-gray-100 text-gray-900">
				{/* Header Section */}
				<section className="min-h-screen bg-blue-500 flex items-center justify-center">
					<motion.div
						ref={headerRef}
						initial={{ opacity: 0, y: -100 }}
						animate={{
							opacity: headerInView ? 1 : 0,
							y: headerInView ? 0 : -100,
						}}
						transition={{ duration: 1 }}
						className="text-center text-white"
					>
						<h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
						<p className="text-lg">
							A place where creativity meets technology.
						</p>
					</motion.div>
				</section>

				{/* About Section */}
				<section className="min-h-screen bg-white flex items-center justify-center">
					<motion.div
						ref={aboutRef}
						initial={{ opacity: 0, x: -100 }}
						animate={{
							opacity: aboutInView ? 1 : 0,
							x: aboutInView ? 0 : -100,
						}}
						transition={{ duration: 1 }}
						className="max-w-3xl p-8 text-center"
					>
						<h2 className="text-4xl font-bold mb-4">About Us</h2>
						<p className="text-lg">
							We are a team of passionate developers, designers, and creators
							dedicated to building amazing web experiences.
						</p>
					</motion.div>
				</section>
				<MyComponents />
				{/* Services Section */}
				<section className="min-h-screen bg-green-500 flex items-center justify-center">
					<motion.div
						ref={servicesRef}
						initial={{ opacity: 0, y: 50 }}
						animate={{
							opacity: servicesInView ? 1 : 0,
							y: servicesInView ? 0 : 50,
						}}
						transition={{ duration: 1 }}
						className="max-w-4xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white"
					>
						<div className="p-6 bg-green-700 rounded-lg shadow-lg">
							<h3 className="text-2xl font-bold mb-2">Web Design</h3>
							<p>Crafting visually stunning and user-friendly websites.</p>
						</div>
						<div className="p-6 bg-green-700 rounded-lg shadow-lg">
							<h3 className="text-2xl font-bold mb-2">Development</h3>
							<p>Building robust and scalable web applications.</p>
						</div>
						<div className="p-6 bg-green-700 rounded-lg shadow-lg">
							<h3 className="text-2xl font-bold mb-2">SEO Optimization</h3>
							<p>Ensuring your website ranks high on search engines.</p>
						</div>
					</motion.div>
				</section>

				{/* Contact Section */}
				<section className="min-h-screen bg-gray-800 flex items-center justify-center">
					<motion.div
						ref={contactRef}
						initial={{ opacity: 0, x: 100 }}
						animate={{
							opacity: contactInView ? 1 : 0,
							x: contactInView ? 0 : 100,
						}}
						transition={{ duration: 1 }}
						className="max-w-lg p-8 bg-gray-900 text-center text-white rounded-lg shadow-lg"
					>
						<h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
						<p className="text-lg mb-6">
							We would love to hear from you! Reach out to us for any inquiries
							or collaborations.
						</p>
						<button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold">
							Contact Us
						</button>
					</motion.div>
				</section>
			</div>
		</>
	);
};

export default HomePage;
