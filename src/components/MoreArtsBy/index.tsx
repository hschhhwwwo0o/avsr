import ArtCard from "components/ArtCard";
import Grid from "components/Grid";
import GridLayout from "layouts/GridLayout";
import React, { Fragment, FunctionComponent } from "react";

const MoreArtsBy: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="py-10 text-center uppercase font-semibold">More Arts by Itoko Toma</div>
      <GridLayout>
        <Grid>
          <ArtCard />
          <ArtCard />
          <ArtCard />
        </Grid>
      </GridLayout>
    </Fragment>
  );
};

export default MoreArtsBy;
