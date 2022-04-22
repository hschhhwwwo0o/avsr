import React from "react";
import { Page } from "types";
import TheLayout from "layouts";
import Grid from "components/Grid";
import PosterCard from "components/PosterCard";

const HomePage: Page = () => {
  return (
    <TheLayout>
      <div className="mt-10">
        <Grid>
          <PosterCard />
          <PosterCard />
          <PosterCard />
        </Grid>
      </div>
    </TheLayout>
  );
};

export default HomePage;
