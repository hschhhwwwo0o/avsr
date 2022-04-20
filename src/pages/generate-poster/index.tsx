import ArtGenerateScene from "components/ArtGenerateScene";
import TheLayout from "layouts";
import React, { Fragment } from "react";
import { Page } from "types";

const GeneratePosterPage: Page = () => {
  return (
    <Fragment>
      <TheLayout withMainLayout={false}>
        <ArtGenerateScene />
      </TheLayout>
    </Fragment>
  );
};

export default GeneratePosterPage;
