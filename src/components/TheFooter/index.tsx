import PoweredByVercel from "components/PoweredByVercel";
import React, { Fragment, FunctionComponent } from "react";

const TheFooter: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-center py-16">
        <div className="flex flex-row justify-between">
          <div className="w-[240px]">
            <h4 className="uppercase text-sm font-extrabold cursor-pointer">AVSR</h4>
            <div className="uppercase text-xs font-semibold mt-2">
              A Vision of Something <br /> Random
            </div>
          </div>
          <div className="w-[240px]">
            <a href="https://unsplash.com/" className="uppercase text-sm font-extrabold cursor-pointer">
              Unsplash
            </a>
          </div>
          <div className="w-0">
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
    </Fragment>
  );
};

export default TheFooter;
