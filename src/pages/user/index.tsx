import React, { Fragment } from "react";
import { Page } from "types";
import TheLayout from "layouts";
import GridLayout from "layouts/GridLayout";
import ArtCard from "components/ArtCard";
import Grid from "components/Grid";
import UserProfile from "components/UserProfile";

const UserPage: Page = () => {
  return (
    <Fragment>
      <TheLayout>
        <UserProfile />
        <GridLayout>
          <Grid>
            <ArtCard />
            <ArtCard />
            <ArtCard />
          </Grid>
        </GridLayout>
      </TheLayout>
    </Fragment>
  );
};

export default UserPage;
