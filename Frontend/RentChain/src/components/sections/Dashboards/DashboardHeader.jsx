import { useLocation } from "react-router-dom";
import User from "../../ui/User";
import { useTranslation } from "react-i18next";

export default function DashboardHeader() {
  const location = useLocation();
  const pathName = location.pathname;
  const { t } = useTranslation();

  return (
    <div className="w-full section-page">
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <h2 className="text-5xl font-semibold">{t("dashboard")}</h2>
          {pathName === "/landlord%20dashboard" ? (
            <p className="text-3xl font-medium normal-case text-secondary"> {t("Tdashboard")} </p>
          ) : (
            <p className="text-3xl font-medium normal-case text-secondary">{t("Ldashboard")}</p>
          )}
        </div>
        <div className="">
          <User />
        </div>
      </div>
    </div>
  );
}
