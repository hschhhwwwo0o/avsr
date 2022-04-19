import ArtPreview from "components/ArtPreview";
import MoreArtsBy from "components/MoreArtsBy";
import TheLayout from "layouts";
import React, { Fragment } from "react";
import { Page } from "types";

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
