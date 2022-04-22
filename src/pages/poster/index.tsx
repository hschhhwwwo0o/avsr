import React, { Fragment } from "react";
import { Page } from "types";
import TheLayout from "layouts";
import PosterPreview from "components/_pages/poster/PosterPreview";
import MorePostersBy from "components/_pages/poster/MorePostersBy";

const PosterPage: Page = () => {
  return (
    <Fragment>
      <TheLayout withMainLayout={false}>
        <PosterPreview />
        <MorePostersBy />
      </TheLayout>
    </Fragment>
  );
};

export default PosterPage;
