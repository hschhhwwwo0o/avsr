import React, { Fragment, FunctionComponent } from "react";
import PoweredByVercel from "components/PoweredByVercel";

const TheFooter: FunctionComponent = () => {
  return (
    <Fragment>
      <footer>
        <div className="flex items-center justify-center py-10 md:py-16">
          <div className="flex flex-col gap-6 justify-between items-center md:items-start md:gap-0 md:flex-row">
            <div className="md:w-[240px]">
              <h4 className="uppercase text-sm font-extrabold cursor-pointer text-center md:text-left">AVSR</h4>
              <div className="uppercase text-xs font-semibold mt-2 text-center md:text-left">
                A Vision of Something <br /> Random
              </div>
            </div>
            {/* <div className="md:w-[240px]">
              <h4 className="uppercase text-sm font-extrabold cursor-pointer text-center md:text-left">
                <a target="_blank" rel="noopener noreferrer" href="https://www.rarediseasesinternational.org/">
                  RDI
                </a>
              </h4>
              <div className="uppercase text-xs font-semibold mt-2 text-center md:text-left">
                Rare Diseases <br /> International
              </div>
            </div> */}
            <div className="md:w-[240px]">
              <a href="https://unsplash.com/" className="uppercase text-sm font-extrabold cursor-pointer">
                Unsplash
              </a>
            </div>
            <div className="md:w-0">
              <a
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
