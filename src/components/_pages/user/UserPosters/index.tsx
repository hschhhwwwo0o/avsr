import React, { Fragment, FunctionComponent } from "react";
import { Params, useParams } from "react-router-dom";
import { useUserData } from "hooks/useUserData";
import GridLayout from "layouts/GridLayout";
import PosterCard from "components/PosterCard";
import Grid from "components/Grid";
import EmptyPosters from "../EmptyPosters";
import { IPoster } from "types";
import Preloader from "components/Preloader";

const UserPosters: FunctionComponent = () => {
  const { postersResponse } = useUserData();
  const params: Readonly<Params<string>> = useParams();

  return (
    <Fragment>
      <GridLayout>
        {postersResponse?.data?.data?.length ? (
          <Grid>
            {postersResponse.data.data.map((poster: IPoster, index: number) => {
              return <PosterCard data={poster} key={index} />;
            })}
          </Grid>
        ) : (
          <Fragment>{!postersResponse?.isLoading ? <EmptyPosters id={params.id || ""} /> : <Preloader />}</Fragment>
        )}
      </GridLayout>
    </Fragment>
  );
};

export default UserPosters;
