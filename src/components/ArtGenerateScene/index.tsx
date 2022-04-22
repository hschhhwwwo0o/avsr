import React, { Fragment, FunctionComponent } from "react";
import { useGenerateArt } from "hooks/useGenerateArt";
import { useTranslation } from "react-i18next";
import ArtCreateButton from "components/ArtCreateButton";
import ArtTypeA from "components/GenerateArt/ArtTypeA";
import InputArtTitle from "components/InputArtTitle";
import Button from "components/Button";
import GeneratedArtPreview from "components/GenerateArt/GeneratedArtPreview";
import TheFooter from "components/TheFooter";
import RegenearteArtButton from "components/RegenearteArtButton";

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
          {isLoading && <Button>Please wait...</Button>}
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
