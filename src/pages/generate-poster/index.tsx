import React, { Fragment } from "react";
import { Page } from "types";
import TheLayout from "layouts";
import PosterGenerateScene from "components/_pages/generate-poster/PosterGenerateScene";

const GeneratePosterPage: Page = () => {
  return (
    <Fragment>
      <TheLayout withFooter={false} withMainLayout={false}>
        <PosterGenerateScene />
      </TheLayout>
    </Fragment>
  );
};

export default GeneratePosterPage;
