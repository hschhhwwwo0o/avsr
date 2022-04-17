import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageSelect from "components/LanguageSelect";
import Logo from "components/Logo";
import Burger from "components/Burger";
import Profile from "./Profile";

const TheHeader: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div>
        <div className="h-[65px]"></div>
        <header className="h-[65px] border-[#EBEBEB] border-b flex items-center justify-center px-5 fixed top-0 w-screen z-50 2xl:px-0">
          <div className="max-w-[1500px] w-full flex justify-between">
            <ul className="flex flex-row gap-10 items-center">
              <li className="text-sm font-medium uppercase hidden md:block">
                <NavLink to="/">{t("Collection")}</NavLink>
              </li>
              <li className="text-sm font-medium uppercase hidden md:block">
                <NavLink to="/generate-poster">{t("Generate Poster")}</NavLink>
              </li>
              <li>
                <LanguageSelect />
              </li>
            </ul>
            <div className="md:hidden flex items-center justify-center">
              <Burger />
            </div>
            <div className="hidden items-center justify-center md:flex">
              <Profile />
            </div>
          </div>
        </header>
        <div className="h-[65px] flex items-center justify-center fixed top-0 left-0 w-screen z-40 bg-white">
          <Logo />
        </div>
      </div>
    </Fragment>
  );
};

export default TheHeader;
