import React from "react";
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion';
import Loader from "./loader/loader"

const MyComponents = () =>{
    const [ref, inView] = useInView({triggerOnce: false, threshold: 0.1});
    const [isLoading, setIsLoading] = React.useState(true);

		React.useEffect(() => {
			// Simulate a loading process
			setTimeout(() => setIsLoading(false), 5000);
		}, []);

    return (
			<div>
				{isLoading ? (
					<Loader/>
				) : (
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
						ref={ref}
						transition={{ duration: 1 }}
						className="h-1/2 bg-orange-400 min-h-screen flex items-center text-white justify-center"
					>
						<h1>Yash Shelke</h1>
					</motion.div>
				)}
			</div>
		);
}

export default MyComponents;