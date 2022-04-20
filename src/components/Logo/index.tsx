import React, { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const Logo: FunctionComponent = () => {
  return (
    <Fragment>
      <NavLink to="/" className="uppercase font-extrabold text-sm relative z-[60]">
        AVSR
      </NavLink>
    </Fragment>
  );
};

export default Logo;
