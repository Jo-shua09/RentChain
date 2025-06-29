import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";

export default function AppLayout() {
	return (
		<div className="w-full min-h-screen m-auto max-w-[185rem]">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}
