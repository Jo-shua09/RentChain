import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="bg-gray-900 w-full !py-20 section-page text-white">
        <div className="flex flex-wrap items-start justify-between gap-16 md:flex-nowrap">
          <div className="space-y-5 md:flex-[2]">
            <div className="cursor-pointer w-fit">
              <img src="/logo_white.png" alt="logo image" loading="lazy" className="w-[18rem] h-fit cursor-pointer" />
            </div>
            <p className="max-w-4xl text-3xl font-normal normal-case text-secondary">{t("footer.tagline")}</p>
          </div>

          <div className="flex flex-col w-full mx-auto space-y-7 md:flex-1 place-content-end">
            <h4 className="text-4xl font-medium">{t("footer.platform")}</h4>
            <ul className="flex flex-col gap-6">
              <li className="text-3xl font-normal list-none transition-colors duration-200 cursor-pointer text-secondary text-nowrap hover:underline hover:text-white w-fit">
                {t("footer.browse listings")}
              </li>
              <li className="text-3xl font-normal list-none transition-colors duration-200 cursor-pointer text-secondary text-nowrap hover:underline hover:text-white w-fit">
                {t("footer.dashboard")}
              </li>
              <li className="text-3xl font-normal list-none transition-colors duration-200 cursor-pointer text-secondary text-nowrap hover:underline hover:text-white w-fit">
                {t("footer.about us")}
              </li>
              <li className="text-3xl font-normal list-none transition-colors duration-200 cursor-pointer text-secondary text-nowrap hover:underline hover:text-white w-fit">
                {t("footer.contact")}
              </li>
            </ul>
          </div>

          <div className="w-full space-y-7 md:flex-1">
            <h4 className="text-4xl font-medium">{t("footer.legal")}</h4>
            <ul className="flex flex-col gap-6">
              <li className="text-3xl font-normal list-none transition-colors duration-200 cursor-pointer text-secondary text-nowrap hover:underline hover:text-white w-fit">
                {t("footer.terms of service")}
              </li>
              <li className="text-3xl font-normal list-none transition-colors duration-200 cursor-pointer text-secondary text-nowrap hover:underline hover:text-white w-fit">
                {t("footer.privacy policy")}
              </li>
              <li className="text-3xl font-normal list-none transition-colors duration-200 cursor-pointer text-secondary text-nowrap hover:underline hover:text-white w-fit">
                {t("footer.security")}
              </li>
              <li className="text-3xl font-normal list-none transition-colors duration-200 cursor-pointer text-secondary text-nowrap hover:underline hover:text-white w-fit">
                {t("footer.support")}
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-full h-px my-20 bg-secondary" />
        <div className="flex flex-wrap items-center gap-10 text-center sm:justify-between sm:text-left sm:flex-nowrap">
          <div className="w-full text-2xl font-normal normal-case">{t("footer.copyright")}</div>
          <div className="flex items-center justify-center w-full gap-x-10 sm:justify-end">
            <FaTwitter className="text-5xl cursor-pointer hover:text-secondary hover:scale-110" />
            <FaInstagram className="text-5xl cursor-pointer hover:text-secondary hover:scale-110" />
            <FaGithub className="text-5xl cursor-pointer hover:text-secondary hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
}
