import TheFooter from "components/TheFooter";
import React, { Fragment, FunctionComponent } from "react";

const TheLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
      <TheFooter />
    </Fragment>
  );
};

export default TheLayout;
