import React from "react";
import { Page } from "types";
import TheLayout from "layouts";
import Grid from "components/Grid";
import ArtCard from "components/ArtCard";

const HomePage: Page = () => {
  return (
    <TheLayout>
      <div className="mt-10">
        <Grid>
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
          <ArtCard />
        </Grid>
      </div>
    </TheLayout>
  );
};

export default HomePage;
