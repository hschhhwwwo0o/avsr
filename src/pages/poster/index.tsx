import React, { Fragment } from "react";
import { Page } from "types";
import TheLayout from "layouts";
import ArtPreview from "components/_pages/poster/ArtPreview";
import MoreArtsBy from "components/_pages/poster/MoreArtsBy";

const PosterPage: Page = () => {
  return (
    <Fragment>
      <TheLayout withMainLayout={false}>
        <ArtPreview />
        <MoreArtsBy />
      </TheLayout>
    </Fragment>
  );
};

export default PosterPage;
