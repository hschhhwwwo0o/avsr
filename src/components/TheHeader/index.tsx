import React, { Fragment, FunctionComponent } from "react";
import LanguageSelect from "components/LanguageSelect";
import Logo from "components/Logo";
import Burger from "components/Burger";
import Profile from "./Profile";
import Links from "./Links";

const TheHeader: FunctionComponent = () => {
  return (
    <Fragment>
      <div>
        <div className="h-[65px]"></div>
        <header className="h-[65px] border-[#EBEBEB] border-b flex items-center justify-center px-5 fixed top-0 w-screen z-50 2xl:px-0">
          <div className="max-w-[1500px] w-full flex justify-between">
            <ul className="flex flex-row gap-10 items-center">
              <Links />
              <li>
                <LanguageSelect />
              </li>
            </ul>
            <div className="flex items-center justify-center md:hidden">
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
