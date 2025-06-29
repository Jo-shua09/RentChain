import { Button } from "../Button";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";

export default function Navbar() {
	const { t } = useTranslation();

	return (
		<div className="w-full h-full">
			<div className="flex items-center justify-between py-7 px-10 shadow-xl">
				<div className="w-fit cursor-pointer">
					<h1 className="text-5xl font-bold">rentChain</h1>
				</div>

				<div className="w-full">
					<ul className="flex items-center justify-center gap-10">
						<li className="list-none text-[1.7rem] font-medium cursor-pointer">{t("about")}</li>
						<li className="list-none text-[1.7rem] font-medium cursor-pointer text-nowrap">{t("browse listings")}</li>
						<li className="list-none text-[1.7rem] font-medium cursor-pointer">{t("contact")}</li>
					</ul>
				</div>

				<div className="w-fit flex items-center gap-x-10">
					<Button name={t("connect wallet")} icon={<MdOutlineAccountBalanceWallet className="text-3xl" />} />
					<div className="flex rounded-xl cursor-pointer border-secondary border py-4 px-6 gap-x-3 items-center">
						<IoGlobeOutline className="text-3xl" />
						<LanguageSelector />
					</div>
				</div>
			</div>
		</div>
	);
}
