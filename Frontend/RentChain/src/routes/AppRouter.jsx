import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AppLayout from "../layouts/AppLayout";
import Listings from "../pages/Listings";

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/listing" element={<Listings />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	);
}
