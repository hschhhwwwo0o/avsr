import React, { Fragment, FunctionComponent } from "react";

interface IValidate {
  isValidate: boolean;
  className?: string;
}

const Validate: FunctionComponent<IValidate> = ({ children, isValidate = false, className = "" }) => {
  return (
    <Fragment>
      <span className={`block ${className} ${!isValidate ? "pointer-events-none opacity-50" : "opacity-100"}`}>
        {children}
      </span>
    </Fragment>
  );
};

export default Validate;
