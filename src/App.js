import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
        <AnimatedRoutes/>
					{/* <Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} /> */}
			</div>
		</Router>
	);
}

export default App;
