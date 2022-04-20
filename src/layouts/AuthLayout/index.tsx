import React, { Fragment, FunctionComponent } from "react";

const AuthLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <div className="flex flex-col-reverse lg:flex-row lg:h-[688px]">
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-[432px] pt-8 lg:pt-0">{children}</div>
        </div>
        <div className="h-[140px] pt-4 lg:pt-0 lg:h-auto lg:w-1/2 lg:p-16">
          <div className="bg-[#252525] w-full h-full flex items-center justify-center text-white font-bold text-xl lg:text-6xl">
            <span className="uppercase">Abiior</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthLayout;
