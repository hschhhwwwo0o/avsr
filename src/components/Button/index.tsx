import React, { Fragment, FunctionComponent, ReactNode } from "react";

interface IButton {
  children: ReactNode;
  w?: string;
  onClickHandler?: () => any;
}

const Button: FunctionComponent<IButton> = ({ children, w = "", onClickHandler = () => {} }) => {
  return (
    <Fragment>
      <button
        onClick={onClickHandler}
        className={`bg-[#252525] text-white uppercase py-4 px-11 font-semibold text-sm ${w}`}
      >
        {children}
      </button>
    </Fragment>
  );
};

export default Button;
