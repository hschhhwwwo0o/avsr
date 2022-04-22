import React, { Fragment, FunctionComponent } from "react";
import ArtCreateButton from "components/ArtCreateButton";
import ArtTypeA from "components/GenerateArt/ArtTypeA";
import InputArtTitle from "components/InputArtTitle";
import Button from "components/Button";
import GeneratedArtPreview from "components/GenerateArt/GeneratedArtPreview";
import TheFooter from "components/TheFooter";
import RegenearteArtButton from "components/RegenearteArtButton";
import { useGenerateArt } from "hooks/useGenerateArt";

const ArtGenerateScene: FunctionComponent = () => {
  const { artTypeA, image, isGenerated, isLoading, onGenerateArt } = useGenerateArt();

  return (
    <Fragment>
      <div className="w-full bg-[#FCFCFC] border-[#EAEAEA] border-b flex items-center justify-center h-[140vw] lg:h-[800px]">
        <div>
          {isGenerated && <GeneratedArtPreview image={image} />}
          {isGenerated && (
            <div className="w-full flex flex-col lg:flex-row">
              <InputArtTitle />
              <RegenearteArtButton onClickHandler={onGenerateArt} />
              <ArtCreateButton />
            </div>
          )}
          {isLoading && <Button>Please wait</Button>}
          {!isGenerated && !isLoading && <Button onClickHandler={onGenerateArt}>Generate</Button>}
        </div>
      </div>
      <TheFooter />
      <ArtTypeA {...artTypeA} />
    </Fragment>
  );
};

export default ArtGenerateScene;
