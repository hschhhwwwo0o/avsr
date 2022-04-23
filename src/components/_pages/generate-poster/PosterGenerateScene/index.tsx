import React, { Fragment, FunctionComponent, useState } from "react";
import { useGeneratePosterMockupImage } from "hooks/useGeneratePosterMockupImage";
import { useTranslation } from "react-i18next";
import { useCreatePoster } from "hooks/useCreatePoster";
import User from "store/User";
import TheFooter from "components/TheFooter";
import Button from "components/Button";
import PosterCreateButton from "components/_pages/generate-poster/PosterCreateButton";
import PosterTypeA from "components/_pages/generate-poster/GeneratePoster/PosterTypeA";
import InputPosterTitle from "components/_pages/generate-poster/InputPosterTitle";
import GeneratedPosterPreview from "components/_pages/generate-poster/GeneratePoster/GeneratedPosterPreview";
import RegeneartePosterPreviewButton from "components/_pages/generate-poster/RegeneartePosterPreviewButton";

const PosterGenerateScene: FunctionComponent = () => {
  const { posterArch, image, isGenerated, isLoading, onGeneratePosterMockupImage } = useGeneratePosterMockupImage();
  const { postersServiceMutation } = useCreatePoster();
  const { t } = useTranslation();
  const [title, setTitle] = useState<string>("");

  function onCreate(): void {
    if (title) {
      postersServiceMutation.mutate({ image, title, userId: User.user.id });
    }
  }

  return (
    <Fragment>
      <div className="w-full bg-[#FCFCFC] border-[#EAEAEA] border-b flex items-center justify-center h-[140vw] lg:h-[800px]">
        <div>
          {isGenerated && <GeneratedPosterPreview image={image} />}
          {isGenerated && (
            <div className="w-full flex flex-col lg:flex-row">
              <InputPosterTitle state={title} setState={setTitle} />
              <RegeneartePosterPreviewButton onClickHandler={onGeneratePosterMockupImage} />
              <PosterCreateButton onClickHandler={onCreate} />
            </div>
          )}
          {isLoading && <Button>{t("Please wait")}</Button>}
          {!isGenerated && !isLoading && <Button onClickHandler={onGeneratePosterMockupImage}>{t("Generate")}</Button>}
        </div>
      </div>
      <TheFooter />
      {
        /** Generate poster in dom. This block is not displayed to the user */
        <PosterTypeA {...posterArch} />
      }
    </Fragment>
  );
};

export default PosterGenerateScene;
