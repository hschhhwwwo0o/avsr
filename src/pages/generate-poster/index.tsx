import React, { Fragment } from "react";
import { Page } from "types";
import TheLayout from "layouts";
import ArtGenerateScene from "components/ArtGenerateScene";

const GeneratePosterPage: Page = () => {
  return (
    <Fragment>
      <TheLayout withFooter={false} withMainLayout={false}>
        <ArtGenerateScene />
      </TheLayout>
    </Fragment>
  );
};

export default GeneratePosterPage;
