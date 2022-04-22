import React, { Fragment, FunctionComponent, useState } from "react";
import ArtCreateButton from "components/ArtCreateButton";
import ArtTypeA from "components/GenerateArt/ArtTypeA";
import InputArtTitle from "components/InputArtTitle";
import { useGenerateArtTypeA } from "hooks/useGenerateArtTypeA";
import Button from "components/Button";
import DomToImage from "dom-to-image";
import GeneratedArtPreview from "components/GenerateArt/GeneratedArtPreview";
import TheFooter from "components/TheFooter";
import RegenearteArtButton from "components/RegenearteArtButton";

const ArtGenerateScene: FunctionComponent = () => {
  const [artTypeA, setArtTypeA] = useState<any>();
  const [image, setImage] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onGenerateArt(): Promise<void> {
    setIsLoading(true);
    setIsGenerated(false);
    setArtTypeA(useGenerateArtTypeA());
    setTimeout(async () => {
      const poster: Element | null = document.querySelector("#_POSTER");
      if (poster) {
        const image: string = await DomToImage.toPng(poster);
        setImage(image);
        setIsGenerated(true);
      }
      setIsLoading(false);
    }, 1200);
  }

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
