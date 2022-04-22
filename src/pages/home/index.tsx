import React from "react";
import { IPoster, Page } from "types";
import TheLayout from "layouts";
import Grid from "components/Grid";
import PosterCard from "components/PosterCard";
import { useHomeGetPosters } from "hooks/useHomeGetPosters";
import Preloader from "components/Preloader";

const HomePage: Page = () => {
  const { postersResponse } = useHomeGetPosters();

  return (
    <TheLayout>
      <div className="mt-10">
        {postersResponse.isLoading ? (
          <Preloader />
        ) : (
          <Grid>
            {postersResponse.data.data.map((poster: IPoster) => {
              return <PosterCard data={poster} key={poster._id} />;
            })}
          </Grid>
        )}
      </div>
    </TheLayout>
  );
};

export default HomePage;
