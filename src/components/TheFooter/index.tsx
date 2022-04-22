import React, { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import PoweredByVercel from "components/PoweredByVercel";

const TheFooter: FunctionComponent = () => {
  return (
    <Fragment>
      <footer>
        <div className="flex items-center justify-center py-10 md:py-16">
          <div className="flex flex-col gap-6 justify-between items-center md:items-start md:gap-0 md:flex-row">
            <div className="md:w-[240px] text-center lg:text-left">
              <NavLink to="/" className="uppercase text-sm font-extrabold cursor-pointer text-center md:text-left">
                AVSR
              </NavLink>
              <NavLink to="/" className="block uppercase text-xs font-semibold mt-2 text-center md:text-left">
                A Vision of Something <br /> Random
              </NavLink>
            </div>
            <div className="md:w-[240px]">
              <h4 className="uppercase text-sm font-extrabold cursor-pointer text-center md:text-left">
                <a target="_blank" rel="noopener noreferrer" href="https://www.rarediseasesinternational.org/">
                  RDI
                </a>
              </h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.rarediseasesinternational.org/"
                className="block uppercase text-xs font-semibold mt-2 text-center md:text-left"
              >
                Rare Diseases <br /> International
              </a>
            </div>
            <div className="md:w-[240px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://unsplash.com/"
                className="uppercase text-sm font-extrabold cursor-pointer"
              >
                Unsplash
              </a>
            </div>
            <div className="md:w-0">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vercel.com/dashboard"
                className="uppercase whitespace-nowrap text-sm font-extrabold cursor-pointer"
              >
                Vercel
              </a>
            </div>
          </div>
        </div>
        <PoweredByVercel />
      </footer>
    </Fragment>
  );
};

export default TheFooter;
