import TheFooter from "components/TheFooter";
import TheHeader from "components/TheHeader";
import React, { Fragment, FunctionComponent } from "react";

const TheLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </Fragment>
  );
};

export default TheLayout;
