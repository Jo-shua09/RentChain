import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUserCircle } from "react-icons/fa";

export default function User() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  window.onscroll = () => {
    setOpen(false);
  };

  return (
    <div className="relative inline-block w-full text-left">
      <button onClick={() => setOpen((prev) => !prev)} className="focus:outline-none">
        <FaUserCircle className="w-20 h-20 text-gray-600 hover:text-primary" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-[30rem] origin-top-right bg-white border border-gray-200 shadow-xl rounded-xl">
          <div className="flex flex-col items-center p-4 border-b border-gray-100">
            <FaUserCircle className="w-24 h-24 mb-4 text-gray-400" />
            <p className="text-3xl font-medium text-secondary">John Doe</p>
          </div>
          <ul className="py-2 pb-4 pl-4 space-y-4 text-2xl text-gray-700">
            <li className="px-4 py-4 cursor-pointer hover:bg-gray-100">{t("userMenu.changeName")}</li>
            <li className="px-4 py-4 cursor-pointer hover:bg-gray-100">{t("userMenu.changeEmail")}</li>
            <li className="px-4 py-4 cursor-pointer hover:bg-gray-100">{t("userMenu.changePassword")}</li>
            <li className="px-4 py-4 text-red-600 cursor-pointer hover:bg-red-100">{t("userMenu.logout")}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
