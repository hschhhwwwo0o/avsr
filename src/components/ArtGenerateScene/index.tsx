import React, { Fragment, FunctionComponent } from "react";
import ArtCreateButton from "components/ArtCreateButton";
import ArtTypeA from "components/GenerateArt/ArtTypeA";
import InputArtTitle from "components/InputArtTitle";

const ArtGenerateScene: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="w-full bg-[#FCFCFC] border-[#EAEAEA] border-b flex items-center justify-center h-[140vw] lg:h-[949px]">
        <div>
          <ArtTypeA />
          <div className="w-full flex flex-col lg:flex-row">
            <InputArtTitle />
            <ArtCreateButton />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ArtGenerateScene;
