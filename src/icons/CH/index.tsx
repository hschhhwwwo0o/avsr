import React, { Fragment, FunctionComponent } from "react";
import Icon from "./CH.svg";

const CH: FunctionComponent = () => {
  return (
    <Fragment>
      <img src={Icon} alt="" className="select-none pointer-events-none" />
    </Fragment>
  );
};

export default CH;
