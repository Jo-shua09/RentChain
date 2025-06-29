import { Button } from "./Button";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
	const { t } = useTranslation();

	return (
		<div className="w-full h-full">
			<div className="flex items-center justify-between py-2 px-20 shadow-xl">
				<div className="w-fit cursor-pointer">
					<img src="/logo.png" alt="logo image" loading="lazy" className="w-[25rem] h-fit cursor-pointer" />
				</div>

				<div className="w-full">
					<ul className="flex items-center justify-center gap-10">
						<li className="list-none text-[1.7rem] font-medium cursor-pointer hover:border-b-2 w-fit h-fit border-primary  transition-all duration-200">
							{t("about")}
						</li>
						<li className="list-none text-[1.7rem] font-medium cursor-pointer hover:border-b-2 w-fit h-fit border-primary  transition-all duration-200 text-nowrap">
							{t("browse listings")}
						</li>
						<li className="list-none text-[1.7rem] font-medium cursor-pointer hover:border-b-2 w-fit h-fit border-primary  transition-all duration-200">
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
	);
}
