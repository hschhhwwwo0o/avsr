import React, { Fragment, FunctionComponent } from "react";
import GridLayout from "layouts/GridLayout";
import TheFooter from "components/TheFooter";
import TheHeader from "components/TheHeader";

interface ITheLayout {
  withMainLayout?: boolean;
  withFooter?: boolean;
}

const TheLayout: FunctionComponent<ITheLayout> = ({ children, withMainLayout = true, withFooter = true }) => {
  return (
    <Fragment>
      <TheHeader />
      {withMainLayout && <GridLayout>{children}</GridLayout>}
      {!withMainLayout && children}
      {withFooter && <TheFooter />}
    </Fragment>
  );
};

export default TheLayout;
