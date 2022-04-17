import React, { Fragment, FunctionComponent } from "react";

const Grid: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-[#EBEBEB] border-l border-t">{children}</div>
    </Fragment>
  );
};

export default Grid;
