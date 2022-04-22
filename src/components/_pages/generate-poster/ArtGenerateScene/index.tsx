import React, { Fragment, FunctionComponent } from "react";
import { useGenerateArt } from "hooks/useGenerateArt";
import { useTranslation } from "react-i18next";
import TheFooter from "components/TheFooter";
import Button from "components/Button";
import ArtCreateButton from "components/_pages/generate-poster/ArtCreateButton";
import ArtTypeA from "components/_pages/generate-poster/GenerateArt/ArtTypeA";
import InputArtTitle from "components/_pages/generate-poster/InputArtTitle";
import GeneratedArtPreview from "components/_pages/generate-poster/GenerateArt/GeneratedArtPreview";
import RegenearteArtButton from "components/_pages/generate-poster/RegenearteArtButton";

const ArtGenerateScene: FunctionComponent = () => {
  const { artTypeA, image, isGenerated, isLoading, onGenerateArt } = useGenerateArt();
  const { t } = useTranslation();

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
          {isLoading && <Button>{t("Please wait")}</Button>}
          {!isGenerated && !isLoading && <Button onClickHandler={onGenerateArt}>{t("Generate")}</Button>}
        </div>
      </div>
      <TheFooter />
      {
        /** Generate art in dom. This block is not displayed to the user */
        <ArtTypeA {...artTypeA} />
      }
    </Fragment>
  );
};

export default ArtGenerateScene;
