import { useTranslation } from "react-i18next";
import { ButtonThree, ButtonTwo } from "../../common/Button";
import { Link } from "react-router-dom";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="w-full !pb-32 section-page">
      <div className="flex flex-col justify-center w-full p-10 py-20 text-center text-white place-content-center bg-primary rounded-xl">
        <h3 className="mb-8 text-6xl font-semibold">{t("banner.title")}</h3>
        <p className="text-3xl font-medium normal-case">{t("banner.description")}</p>
        <div className="flex flex-wrap items-center justify-center gap-10 m-auto mt-16 sm:flex-nowrap">
          <Link to="/dashboard/tenant-dashboard/properties">
            <ButtonTwo name={t("banner.browse properties")} className="flex justify-center w-full" />
          </Link>
          <Link to="/dashboard/landlord-dashboard/add-new-property">
            <ButtonThree name={t("banner.list your property")} className="flex justify-center w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}
