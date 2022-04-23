import React, { Fragment, FunctionComponent } from "react";

interface IPosterImage {
  image?: string;
}

const PosterImage: FunctionComponent<IPosterImage> = ({ image }) => {
  return (
    <Fragment>
      <div className="w-[80vw] h-[80vw] border-[#EAEAEA] border bg-white flex items-center justify-center lg:w-[642px] lg:h-[642px] select-none pointer-events-none">
        {image && <img src={image} className="w-[60vw] h-[60vw] lg:w-[518px] lg:h-[518px] border-none" alt="" />}
      </div>
    </Fragment>
  );
};

export default PosterImage;
