import React, { Fragment, FunctionComponent } from "react";
import { useGeneratePoster } from "hooks/useGeneratePoster";
import { useTranslation } from "react-i18next";
import TheFooter from "components/TheFooter";
import Button from "components/Button";
import PosterCreateButton from "components/_pages/generate-poster/PosterCreateButton";
import PosterTypeA from "components/_pages/generate-poster/GeneratePoster/PosterTypeA";
import InputPosterTitle from "components/_pages/generate-poster/InputPosterTitle";
import GeneratedPosterPreview from "components/_pages/generate-poster/GeneratePoster/GeneratedPosterPreview";
import RegeneartePosterPreviewButton from "components/_pages/generate-poster/RegeneartePosterPreviewButton";

const PosterGenerateScene: FunctionComponent = () => {
  const { posterTypeA, image, isGenerated, isLoading, onGeneratePoster } = useGeneratePoster();
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="w-full bg-[#FCFCFC] border-[#EAEAEA] border-b flex items-center justify-center h-[140vw] lg:h-[800px]">
        <div>
          {isGenerated && <GeneratedPosterPreview image={image} />}
          {isGenerated && (
            <div className="w-full flex flex-col lg:flex-row">
              <InputPosterTitle />
              <RegeneartePosterPreviewButton onClickHandler={onGeneratePoster} />
              <PosterCreateButton />
            </div>
          )}
          {isLoading && <Button>{t("Please wait")}</Button>}
          {!isGenerated && !isLoading && <Button onClickHandler={onGeneratePoster}>{t("Generate")}</Button>}
        </div>
      </div>
      <TheFooter />
      {
        /** Generate art in dom. This block is not displayed to the user */
        <PosterTypeA {...posterTypeA} />
      }
    </Fragment>
  );
};

export default PosterGenerateScene;
