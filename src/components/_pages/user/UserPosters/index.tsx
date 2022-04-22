import React, { Fragment, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useUserData } from "hooks/useUserData";
import GridLayout from "layouts/GridLayout";
import PosterCard from "components/PosterCard";
import Grid from "components/Grid";
import EmptyPosters from "../EmptyPosters";

const UserPosters: FunctionComponent = () => {
  const { postersResponse } = useUserData();

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
          <Fragment>{!postersResponse.isLoading && <EmptyPosters id={useParams()?.id || ""} />}</Fragment>
        )}
      </GridLayout>
    </Fragment>
  );
};

export default UserPosters;
