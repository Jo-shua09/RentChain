import Banner from "../components/sections/home/Banner";
import GridShowcase from "../components/sections/home/Features";
import Hero from "../components/sections/home/Hero";

export default function Home() {
	return (
		<div className="w-full h-full">
			<Hero />
			<GridShowcase />
			<Banner />
		</div>
	);
}
