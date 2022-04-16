import LanguageSelect from "components/LanguageSelect";
import Logo from "components/Logo";
import Burger from "icons/Burger";
import React, { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";

const TheHeader: FunctionComponent = () => {
  return (
    <Fragment>
      <div>
        <header className="h-[65px] border-[#EBEBEB] border-b flex items-center justify-center px-5 2xl:px-0">
          <div className="max-w-[1500px] w-full flex justify-between">
            <ul className="flex flex-row gap-10 items-center">
              <li className="text-sm font-medium uppercase hidden md:block">
                <NavLink to="/">Collection</NavLink>
              </li>
              <li className="text-sm font-medium uppercase hidden md:block">
                <NavLink to="/generate-poster">Generate Poster</NavLink>
              </li>
              <li>
                <LanguageSelect />
              </li>
            </ul>
            <div className="md:hidden flex items-center justify-center">
              <Burger />
            </div>
            <div className="hidden md:block">
              <Profile />
            </div>
          </div>
        </header>
        <div className="h-[65px] flex items-center justify-center -mt-[65px]">
          <Logo />
        </div>
      </div>
    </Fragment>
  );
};

export default TheHeader;