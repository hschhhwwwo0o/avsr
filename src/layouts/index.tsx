import React, { Fragment, FunctionComponent } from "react";
import TheFooter from "components/TheFooter";
import TheHeader from "components/TheHeader";
import GridLayout from "layouts/GridLayout";

interface ITheLayout {
  withMainLayout?: boolean;
}

const TheLayout: FunctionComponent<ITheLayout> = ({ children, withMainLayout = true }) => {
  return (
    <Fragment>
      <TheHeader />
      {withMainLayout && <GridLayout>{children}</GridLayout>}
      {!withMainLayout && children}
      <TheFooter />
    </Fragment>
  );
};

export default TheLayout;
