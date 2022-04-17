import React, { Fragment, FunctionComponent } from "react";

const GridLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <main className="flex items-center justify-center">
        <div className="w-full max-w-[1500px] px-4 2xl:px-0">{children}</div>
      </main>
    </Fragment>
  );
};

export default GridLayout;
