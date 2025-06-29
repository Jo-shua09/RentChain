import { FaSearch } from "react-icons/fa";
import { ButtonTwo } from "../common/Button";
import { useTranslation } from "react-i18next";

export default function Hero() {
	const { t } = useTranslation();
	return (
		<div className="w-full h-full bg-primary section">
			<div className="w-[60%] text-center m-auto text-white">
				<h1 className="text-[7rem] font-bold ">
					Rent Smarter with <span className="text-yellow-500">RentChain</span>
				</h1>
				<p className="text-5xl font-normal normal-case py-8">
					Secure, transparent rentals for houses and offices on the blockchain. Build your rental credit while enjoying
					decentralized payments and global accessibility.
				</p>
				<div className="flex items-center gap-x-7 w-fit m-auto mt-10">
					<ButtonTwo name={t("browse listings")} icon={<FaSearch className="text-3xl" />} />
					<ButtonTwo name={t("placeholder text")} />
				</div>
				<div className="flex items-center justify-between mt-20">
					<div className="space-y-1">
						<h3 className="text-6xl font-bold text-yellow-500">1,000+</h3>
						<p className="text-3xl font-medium">Properties Listed</p>
					</div>

					<div className="space-y-1">
						<h3 className="text-6xl font-bold text-yellow-500">500+</h3>
						<p className="text-3xl font-medium">Happy Tenants</p>
					</div>

					<div className="space-y-1">
						<h3 className="text-6xl font-bold text-yellow-500">50+</h3>
						<p className="text-3xl font-medium">Cities Worldwide</p>
					</div>
				</div>
			</div>
		</div>
	);
}
