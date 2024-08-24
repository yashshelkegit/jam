import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"
import { FaHome, FaInfoCircle, FaTools, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ path: "/", name: "Home", icon: FaHome },
		{ path: "/about", name: "About", icon: FaInfoCircle },
		{ path: "/services", name: "Services", icon: FaTools },
		{ path: "/home", name: "Contact", icon: FaEnvelope },
	];

	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 flex justify-between items-center p-4">
				<div className="text-gray-200">
					<h2>My App</h2>
				</div>
				<div className="hidden md:flex space-x-4">
					{navItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) =>
								`${
									isActive
										? "bg-gray-900 text-white"
										: "text-gray-300 hover:bg-gray-700 hover:text-white"
								} px-3 py-2 rounded-md text-sm font-medium flex items-center`
							}
						>
							<item.icon className="mr-2" />
							{item.name}
						</NavLink>
					))}
				</div>
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="bg-gray-900 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
					>
						{isOpen ? (
							<HiX className="h-6 w-6" />
						) : (
							<HiMenu className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			{isOpen && (
				<motion.div
					className="md:hidden px-2 pt-2 pb-3 space-y-1"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.4}}
				>
					{navItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) =>
								`${
									isActive
										? "bg-gray-900 text-white"
										: "text-gray-300 hover:bg-gray-700 hover:text-white"
								} px-3 py-2 rounded-md text-base font-medium flex items-center`
							}
							onClick={() => setIsOpen(false)}
						>
							<item.icon className="mr-2" />
							{item.name}
						</NavLink>
					))}
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;
