import React, { Fragment, FunctionComponent } from "react";
import GridLayout from "layouts/GridLayout";
import PosterCard from "components/PosterCard";
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
              return <PosterCard />;
            })}
          </Grid>
        ) : (
          <span className="block text-center"></span>
        )}
      </GridLayout>
    </Fragment>
  );
};

export default UserPosters;
