import React, { Fragment, FunctionComponent } from "react";
import GridLayout from "layouts/GridLayout";
import ArtCard from "components/ArtCard";
import Grid from "components/Grid";
import { useUser } from "hooks/useUser";

const UserPosters: FunctionComponent = () => {
  const { postersResponse } = useUser();

  return (
    <Fragment>
      <GridLayout>
        {postersResponse?.data?.data?.length ? (
          <Grid>
            {postersResponse.data.data.map((poster: any) => {
              return <ArtCard />;
            })}
          </Grid>
        ) : (
          <span className="block text-center">Oops</span>
        )}
      </GridLayout>
    </Fragment>
  );
};

export default UserPosters;
