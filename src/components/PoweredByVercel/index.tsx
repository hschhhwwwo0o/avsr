import React, { Fragment, FunctionComponent } from "react";

const PoweredByVercel: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="h-12 uppercase font-semibold text-xs flex items-center justify-center bg-[#252525] text-white">
        <a href="https://vercel.com/dashboard">Powered by Vercel</a>
      </div>
    </Fragment>
  );
};

export default PoweredByVercel;
