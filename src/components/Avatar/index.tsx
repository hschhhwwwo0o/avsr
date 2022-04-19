import React, { Fragment, FunctionComponent } from "react";

interface IAvatar {
  size?: "small" | "medium";
}

const Avatar: FunctionComponent<IAvatar> = ({ size = "small" }) => {
  function returnSize(): string {
    if (size === "small") return "w-[34px] h-[34px]";
    if (size === "medium") return "w-[40px] h-[40px] lg:w-[51px] lg:h-[51px]";
    return "w-[34px] h-[34px]";
  }

  return (
    <Fragment>
      <div className={`${returnSize()} overflow-hidden rounded-full`}>
        <img
          src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default Avatar;
