import { Button } from "./Button";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoClose, IoGlobeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";

export default function Navbar() {
	const { t } = useTranslation();
	const isDesktop = window.innerWidth > 768;
	const [isOpen, setIsOpen] = useState(false);

	window.onscroll = () => {
		setIsOpen(false);
	};

	return isDesktop ? (
		<div className="w-full h-full">
			<div className="flex items-center justify-between py-2 px-20 shadow-xl z-10 fixed w-full bg-white">
				<div className="w-fit cursor-pointer">
					<img src="/logo.png" alt="logo image" loading="lazy" className="w-[25rem] h-fit cursor-pointer" />
				</div>

				<div className="w-full">
					<ul className="flex items-center justify-center gap-16">
						<li className="list-none text-[1.7rem] font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200">
							{t("about")}
						</li>
						<li className="list-none text-[1.7rem] font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200 text-nowrap">
							{t("browse listings")}
						</li>
						<li className="list-none text-[1.7rem] font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200">
							{t("contact")}
						</li>
					</ul>
				</div>

				<div className="w-fit flex items-center gap-x-10">
					<div className="flex rounded-xl cursor-pointer px-8 py-6 border-secondary border gap-x-3 items-center">
						<IoGlobeOutline className="text-3xl" />
						<LanguageSelector />
					</div>
					<Button name={t("connect wallet")} icon={<MdOutlineAccountBalanceWallet className="text-3xl" />} />
				</div>
			</div>
		</div>
	) : (
		<div className="w-full shadow-xl z-10 fixed px-12 sm:px-20 bg-white">
			<div className="flex items-center w-full justify-between">
				<div className="w-full cursor-pointer">
					<img src="/logo.png" alt="logo image" loading="lazy" className="w-[15rem] h-fit cursor-pointer" />
				</div>
				<div className="w-full flex place-content-end">
					{!isOpen ? (
						<RiMenu2Fill className="text-6xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
					) : (
						<IoClose className="text-6xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
					)}
				</div>
			</div>
			<div
				className={`w-full bg-white ${
					isOpen ? "opacity-100 translate-y-0 h-full pb-14" : "opacity-0 -translate-y-8 h-0"
				}`}
			>
				<hr className="w-full h-px bg-secondary my-2 mb-8" />

				<ul className="flex flex-col justify-start gap-16">
					<li className="list-none text-3xl font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200">
						{t("about")}
					</li>
					<li className="list-none text-3xl font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200 text-nowrap">
						{t("browse listings")}
					</li>
					<li className="list-none text-3xl font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200">
						{t("contact")}
					</li>
				</ul>
				<hr className="w-full h-px bg-secondary mt-16 mb-7" />
				<div className="w-full md:w-fit flex flex-col gap-y-10">
					<div className="flex rounded-xl w-fit cursor-pointer px-8 py-6 border-secondary border gap-x-3 items-center">
						<IoGlobeOutline className="text-3xl" />
						<LanguageSelector />
					</div>
					<Button
						name={t("connect wallet")}
						className="w-full flex items-center justify-center md:w-fit h-[5rem]"
						icon={<MdOutlineAccountBalanceWallet className="text-3xl" />}
					/>
				</div>
			</div>
		</div>
	);
}
