import { Button } from "./Button";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoClose, IoGlobeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();
  const isDesktop = window.innerWidth > 768;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  window.onscroll = () => {
    setIsOpen(false);
  };

  return isDesktop ? (
    <div className="fixed top-0 left-0 right-0 z-10 w-full">
      <div className="flex items-center justify-between w-full px-20 py-2 bg-white shadow-sm">
        <Link to="/about">
          <div className="cursor-pointer w-fit">
            <img src="/logo.png" alt="logo image" loading="lazy" className="w-[25rem] h-fit cursor-pointer" />
          </div>
        </Link>

        <div className="w-full">
          <ul className="flex items-center justify-center gap-16">
            <Link
              to="/about"
              className={`${
                pathname == "/about" ? "text-primary font-semibold" : ""
              } list-none text-[1.7rem] font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200`}
            >
              {t("about")}
            </Link>

            <Link
              to="/dashboard"
              className={`${
                pathname == "/dashboard/landlord-dashboard" || pathname == "/dashboard/tenant-dashboard" ? "text-primary font-semibold" : ""
              } list-none text-[1.7rem] font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200 text-nowrap`}
            >
              {t("my dashboard")}
            </Link>
            <Link
              to="/contact"
              className={`${
                pathname == "/contact" ? "text-primary font-semibold" : ""
              } list-none text-[1.7rem] font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200`}
            >
              {t("contact")}
            </Link>
          </ul>
        </div>

        <div className="flex items-center w-fit gap-x-10">
          <div className="flex items-center px-8 py-6 border cursor-pointer rounded-xl border-secondary gap-x-3">
            <IoGlobeOutline className="text-3xl" />
            <LanguageSelector />
          </div>
          <Button name={t("connect wallet")} icon={<MdOutlineAccountBalanceWallet className="text-3xl" />} />
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed top-0 left-0 right-0 z-10 w-full px-12 bg-white shadow-sm sm:px-20">
      <div className="flex items-center justify-between w-full">
        <Link to="/about">
          <div className="cursor-pointer w-fit">
            <img src="/logo.png" alt="logo image" loading="lazy" className="w-[25rem] h-fit cursor-pointer" />
          </div>
        </Link>

        <div className="flex w-full place-content-end">
          {!isOpen ? (
            <RiMenu2Fill className="text-6xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <IoClose className="text-6xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
      </div>

      <div className={`w-full bg-white ${isOpen ? "opacity-100 translate-y-0 pb-14 block" : "opacity-0 -translate-y-8 hidden"}`}>
        <hr className="w-full h-px my-2 mb-8 bg-secondary" />

        <ul className="flex flex-col justify-start gap-16">
          <Link
            to="/about"
            className={`${
              pathname == "/about" ? "text-primary font-semibold" : ""
            } list-none text-[1.7rem] font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200`}
          >
            {t("about")}
          </Link>
          <Link
            to="/dashboard"
            className={`${
              pathname == "/dashboard/landlord-dashboard" || pathname == "/dashboard/tenant-dashboard" ? "text-primary font-semibold" : ""
            } list-none text-[1.7rem] font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200 text-nowrap`}
          >
            {t("my dashboard")}
          </Link>
          <Link
            to="/contact"
            className={`${
              pathname == "/contact" ? "text-primary font-semibold" : ""
            } list-none text-[1.7rem] font-medium cursor-pointer hover:text-primary hover:font-bold w-fit h-fit transition-colors duration-200`}
          >
            {t("contact")}
          </Link>
        </ul>

        <hr className="w-full h-px mt-16 bg-secondary mb-7" />
        <div className="flex flex-col w-full md:w-fit gap-y-10">
          <div className="flex items-center px-8 py-6 border cursor-pointer rounded-xl w-fit border-secondary gap-x-3">
            <IoGlobeOutline className="text-3xl" />
            <LanguageSelector />
          </div>
          <Button
            name={t("connect wallet")}
            className="w-full flex items-center justify-center md:w-fit h-[5rem]"
            icon={<MdOutlineAccountBalanceWallet className="text-3xl" />}
          />
        </div>
      </div>
    </div>
  );
}
