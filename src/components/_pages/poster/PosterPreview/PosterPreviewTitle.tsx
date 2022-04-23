import React, { Fragment, FunctionComponent } from "react";

const PosterTitle: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <h2 className="text-2xl font-semibold lg:text-4xl uppercase">{children}</h2>
    </Fragment>
  );
};

export default PosterTitle;
