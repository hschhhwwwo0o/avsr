import ArtCreateButton from "components/ArtCreateButton";
import GenerateArt from "components/GenerateArt";
import InputArtTitle from "components/InputArtTitle";
import React, { Fragment, FunctionComponent } from "react";

const ArtGenerateScene: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="h-[849px] w-full bg-[#FCFCFC] border-[#EAEAEA] border-b flex items-center justify-center">
        <div>
          <div className="w-[80vw] h-[80vw] border-[#EAEAEA] border bg-white flex items-center justify-center p-16 lg:w-[642px] lg:h-[642px]">
            <GenerateArt />
          </div>
          <div className="w-full flex flex-row">
            <InputArtTitle />
            <ArtCreateButton />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ArtGenerateScene;
