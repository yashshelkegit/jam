import React from 'react'
import {motion} from "framer-motion"

const Home = () => {
  return (
		<motion.div
			initial={{ x: "-100vw", opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: "100vw", opacity: 0 }}
			transition={{ type: "spring", stiffness: 100 }}
			className="p-4"
		>
			Home Page
		</motion.div>
	);
}

export default Home
