import React, { Fragment, FunctionComponent } from "react";
import Icon from "./USA.svg";

const USA: FunctionComponent = () => {
  return (
    <Fragment>
      <img src={Icon} alt="" className="select-none pointer-events-none" />
    </Fragment>
  );
};

export default USA;
