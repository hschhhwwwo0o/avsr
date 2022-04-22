import React, { Fragment, FunctionComponent } from "react";

interface IAvatar {
  string?: string;
  image?: string;
  size?: "small" | "medium" | "big";
}

const Avatar: FunctionComponent<IAvatar> = ({ size = "small", image = "", string = "un" }) => {
  function returnSize(): string {
    if (size === "small") return "w-[34px] h-[34px]";
    if (size === "medium") return "w-[40px] h-[40px] lg:w-[51px] lg:h-[51px]";
    if (size === "big") return "w-[95px] h-[95px] lg:w-[95px] lg:h-[95px]";
    return "w-[34px] h-[34px]";
  }

  function returnTextSize(): string {
    if (size === "small") return "text-sm";
    if (size === "medium") return "text";
    if (size === "big") return "text-lg";
    return "w-[34px] h-[34px]";
  }

  return (
    <Fragment>
      <div className={`${returnSize()} bg-[#252525] overflow-hidden rounded-full flex items-center justify-center`}>
        {image ? (
          <img src={image} alt="" />
        ) : (
          <span className={`${returnTextSize()} text-white uppercase font-bold`}>{string.slice(0, 2)}</span>
        )}
      </div>
    </Fragment>
  );
};

export default Avatar;
