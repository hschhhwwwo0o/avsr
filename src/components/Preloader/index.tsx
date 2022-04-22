import React, { Fragment, FunctionComponent } from "react";

const Preloader: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="w-full py-12 flex items-center justify-center">
        <img src={require("./animation.gif")} alt="" className="transform scale-[0.65]" />
      </div>
    </Fragment>
  );
};

export default Preloader;
