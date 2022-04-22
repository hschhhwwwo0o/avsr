import React, { Fragment, FunctionComponent } from "react";

interface IGeneratedPosterPreview {
  image?: string;
}

const GeneratedPosterPreview: FunctionComponent<IGeneratedPosterPreview> = ({ image = "" }) => {
  return (
    <Fragment>
      <div className="flex overflow-hidden w-[80vw] h-[80vw] select-none border-[#EAEAEA] border bg-white flex-col items-center justify-center lg:w-[642px] lg:h-[642px]">
        <div
          className={`w-[calc(80vw)] h-[calc(80vw)] lg:w-[calc(642px-96px)] border-[#EAEAEA] border overflow-hidden lg:h-[calc(642px-96px)] flex-shrink-0`}
        >
          <span className={`block w-[calc(80vw)] h-[calc(80vw)] lg:w-[calc(642px-96px)] lg:h-[calc(642px-96px)]`}>
            <img src={image} alt="" className="w-full h-full" />
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default GeneratedPosterPreview;
