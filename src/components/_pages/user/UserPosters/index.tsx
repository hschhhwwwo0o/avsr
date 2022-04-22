import React, { Fragment, FunctionComponent } from "react";
import GridLayout from "layouts/GridLayout";
import ArtCard from "components/ArtCard";
import Grid from "components/Grid";

const UserPosters: FunctionComponent = () => {
  return (
    <Fragment>
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

export default UserPosters;
