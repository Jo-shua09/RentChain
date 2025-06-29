import { Button } from "../Button";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

export default function Navbar() {
	return (
		<div className="w-full h-full">
			<div className="flex items-center justify-between py-7 px-10 shadow-xl">
				<div className="w-fit cursor-pointer">
					<h1 className="text-5xl font-bold">rentChain</h1>
				</div>

				<div className="w-full">
					<ul className="flex items-center justify-center gap-10">
						<li className="list-none text-[1.7rem] font-medium cursor-pointer">about</li>
						<li className="list-none text-[1.7rem] font-medium cursor-pointer text-nowrap">browse listings</li>
						<li className="list-none text-[1.7rem] font-medium cursor-pointer">contact</li>
					</ul>
				</div>

				<div className="w-fit flex items-center gap-x-10">
					<Button name="connect wallet" icon={<MdOutlineAccountBalanceWallet className="text-3xl" />} />
					<div className="flex border-secondary border py-4 px-6 items-center">
						<IoGlobeOutline />
					</div>
				</div>
			</div>
		</div>
	);
}
