import React, { Fragment, FunctionComponent } from "react";

const PoweredByVercel: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="h-12 uppercase font-semibold text-xs flex items-center justify-center bg-[#252525] text-white">
        Powered by Vercel
      </div>
    </Fragment>
  );
};

export default PoweredByVercel;
