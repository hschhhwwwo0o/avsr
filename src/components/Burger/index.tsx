import React, { Fragment, FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Burger: FunctionComponent = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="w-[24px] h-[14px] flex flex-col justify-between" onClick={() => setIsActive(!isActive)}>
        <div
          className={`w-full h-[1px] bg-black transform transition-transform duration-200 ${
            isActive && "translate-y-[7px]"
          }`}
        />
        <div className={`w-full h-[1px] bg-black transition-opacity duration-200 ${isActive && "opacity-0"}`} />
        <div
          className={`w-full h-[1px] bg-black transform transition-transform duration-200 ${
            isActive && "-translate-y-[7px]"
          }`}
        />
      </div>
      {isActive && (
        <ul className="fixed w-screen h-[calc(100vh-65px)] bg-white left-0 bottom-0 py-20 flex flex-col items-center gap-6">
          <li className="font-medium text-lg uppercase">
            <NavLink to="/">{t("Collection")}</NavLink>
          </li>
          <li className="font-medium text-lg uppercase">
            <NavLink to="/generate-poster">{t("Generate Poster")}</NavLink>
          </li>
          <li className="font-medium text-lg uppercase">
            <NavLink to="/generate-poster">{t("Profile")}</NavLink>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

export default Burger;
