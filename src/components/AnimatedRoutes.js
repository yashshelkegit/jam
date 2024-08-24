import { AnimatePresence } from "framer-motion";
import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Services"
import HomePage from "./HomePage";

const AnimatedRoutes = () => {
	return (
		<div>
			<AnimatePresence>
				<Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
			</AnimatePresence>
		</div>
	);
};

export default AnimatedRoutes;
