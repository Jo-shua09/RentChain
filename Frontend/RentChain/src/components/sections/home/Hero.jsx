import { FaSearch } from "react-icons/fa";
import { ButtonTwo } from "../../common/Button";
import { useTranslation } from "react-i18next";

export default function Hero() {
	const { t } = useTranslation();
	return (
		<div className="w-full h-full bg-primary section">
			<div className="section-page">
				<div className="md:w-[65%] text-center m-auto text-white">
					<h1 className="md:text-[7rem] text-8xl leading-none font-bold ">
						{t("hero.title")} <span className="text-yellow-500">RentChain</span>
					</h1>
					<p className="md:text-5xl text-4xl font-normal normal-case py-8">{t("hero.description")}</p>
					<div className="flex items-center gap-x-7 w-full sm:w-fit m-auto mt-10 sm:flex-nowrap flex-wrap gap-10">
						<ButtonTwo
							name={t("browse listings")}
							className="w-full flex items-center justify-center md:w-fit"
							icon={<FaSearch className="text-3xl" />}
						/>
						<ButtonTwo name={t("placeholder text")} className="w-full flex items-center justify-center md:w-fit" />
					</div>
					<div className="flex items-center sm:flex-nowrap flex-wrap gap-16 justify-between mt-20">
						<div className="space-y-1 w-full">
							<h3 className="text-6xl font-bold text-yellow-500">1,000+</h3>
							<p className="text-3xl font-medium">{t("hero.listed")}</p>
						</div>

						<div className="space-y-1 w-full">
							<h3 className="text-6xl font-bold text-yellow-500">500+</h3>
							<p className="text-3xl font-medium">{t("hero.tenants")}</p>
						</div>

						<div className="space-y-1 w-full">
							<h3 className="text-6xl font-bold text-yellow-500">50+</h3>
							<p className="text-3xl font-medium">{t("hero.cities")} </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
