import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import GridLayout from "layouts/GridLayout";
import PosterCard from "components/PosterCard";
import Grid from "components/Grid";

const MorePostersBy: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="py-10 text-center uppercase font-semibold">{t("More arts by")} Itoko Toma</div>
      <GridLayout>
        <Grid>
          <PosterCard />
          <PosterCard />
          <PosterCard />
        </Grid>
      </GridLayout>
    </Fragment>
  );
};

export default MorePostersBy;