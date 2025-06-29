import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppLayout() {
	return (
		<div className="w-full min-h-screen m-auto max-w-[180rem]">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}
