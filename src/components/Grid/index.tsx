import React, { Fragment, FunctionComponent } from "react";

const Grid: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <div className="grid grid-cols-3 border-[#EBEBEB] border-l border-t">{children}</div>
    </Fragment>
  );
};

export default Grid;
