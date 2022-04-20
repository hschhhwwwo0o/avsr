import ArtCard from "components/ArtCard";
import Grid from "components/Grid";
import GridLayout from "layouts/GridLayout";
import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const MoreArtsBy: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="py-10 text-center uppercase font-semibold">{t("More arts by")} Itoko Toma</div>
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

export default MoreArtsBy;
