import { FaSearch } from "react-icons/fa";
import { ButtonTwo } from "../../common/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full bg-primary section">
      <div className="section-page mt-28">
        <div className="md:w-[65%] text-center m-auto text-white">
          <h1 className="md:text-[7rem] text-8xl leading-none font-bold ">
            {t("hero.title")} <span className="text-yellow-500">RentChain</span>
          </h1>
          <p className="py-8 text-4xl font-normal normal-case md:text-5xl">{t("hero.description")}</p>

          <div className="flex flex-wrap items-center justify-center w-full gap-10 m-auto mt-10 gap-x-7 sm:w-fit sm:flex-nowrap">
            <Link to="/dashboard/tenant-dashboard/properties">
              <ButtonTwo
                name={t("search for property")}
                className="flex items-center justify-center w-full cursor-pointer md:w-fit"
                icon={<FaSearch className="text-3xl" />}
              />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-16 mt-20 sm:flex-nowrap">
            <div className="w-full space-y-1">
              <h3 className="text-6xl font-bold text-yellow-500">1,000+</h3>
              <p className="text-3xl font-medium">{t("hero.listed")}</p>
            </div>

            <div className="w-full space-y-1">
              <h3 className="text-6xl font-bold text-yellow-500">500+</h3>
              <p className="text-3xl font-medium">{t("hero.tenants")}</p>
            </div>

            <div className="w-full space-y-1">
              <h3 className="text-6xl font-bold text-yellow-500">50+</h3>
              <p className="text-3xl font-medium">{t("hero.cities")} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
