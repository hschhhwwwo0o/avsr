import React, { Fragment, FunctionComponent } from "react";

const Grid: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <div className="grid border-[#EBEBEB] border-l sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </Fragment>
  );
};

export default Grid;
