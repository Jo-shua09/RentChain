import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
	const { t } = useTranslation();

	return (
		<div className="w-full mt-32">
			<div className="bg-gray-900 w-full !py-20 section-page text-white">
				<div className="flex items-start gap-16 justify-between md:flex-nowrap flex-wrap">
					<div className="space-y-5 md:flex-[2]">
						<div className="w-fit cursor-pointer">
							<img src="/logo_white.png" alt="logo image" loading="lazy" className="w-[18rem] h-fit cursor-pointer" />
						</div>
						<p className="text-secondary max-w-4xl font-normal normal-case text-3xl">{t("footer.tagline")}</p>
					</div>

					<div className="w-full space-y-7 md:flex-1 flex place-content-end flex-col mx-auto">
						<h4 className="text-4xl font-medium">{t("footer.platform")}</h4>
						<ul className="flex flex-col gap-6">
							<li className="list-none text-secondary text-3xl font-normal text-nowrap hover:underline hover:text-white transition-colors duration-200 cursor-pointer w-fit">
								{t("footer.browse listings")}
							</li>
							<li className="list-none text-secondary text-3xl font-normal text-nowrap hover:underline hover:text-white transition-colors duration-200 cursor-pointer w-fit">
								{t("footer.dashboard")}
							</li>
							<li className="list-none text-secondary text-3xl font-normal text-nowrap hover:underline hover:text-white transition-colors duration-200 cursor-pointer w-fit">
								{t("footer.about us")}
							</li>
							<li className="list-none text-secondary text-3xl font-normal text-nowrap hover:underline hover:text-white transition-colors duration-200 cursor-pointer w-fit">
								{t("footer.contact")}
							</li>
						</ul>
					</div>

					<div className="w-full space-y-7 md:flex-1">
						<h4 className="text-4xl font-medium">{t("footer.legal")}</h4>
						<ul className="flex flex-col gap-6">
							<li className="list-none text-secondary text-3xl font-normal text-nowrap hover:underline hover:text-white transition-colors duration-200 cursor-pointer w-fit">
								{t("footer.terms of service")}
							</li>
							<li className="list-none text-secondary text-3xl font-normal text-nowrap hover:underline hover:text-white transition-colors duration-200 cursor-pointer w-fit">
								{t("footer.privacy policy")}
							</li>
							<li className="list-none text-secondary text-3xl font-normal text-nowrap hover:underline hover:text-white transition-colors duration-200 cursor-pointer w-fit">
								{t("footer.security")}
							</li>
							<li className="list-none text-secondary text-3xl font-normal text-nowrap hover:underline hover:text-white transition-colors duration-200 cursor-pointer w-fit">
								{t("footer.support")}
							</li>
						</ul>
					</div>
				</div>
				<hr className="w-full h-px bg-secondary my-20" />
				<div className="flex sm:justify-between sm:text-left text-center items-center sm:flex-nowrap  flex-wrap gap-10">
					<div className="text-2xl font-normal normal-case w-full">{t("footer.copyright")}</div>
					<div className="flex items-center gap-x-10 w-full sm:justify-end justify-center">
						<FaTwitter className="text-5xl cursor-pointer hover:text-secondary hover:scale-110" />
						<FaInstagram className="text-5xl cursor-pointer hover:text-secondary hover:scale-110" />
						<FaGithub className="text-5xl cursor-pointer hover:text-secondary hover:scale-110" />
					</div>
				</div>
			</div>
		</div>
	);
}
